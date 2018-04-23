import pickle

import pandas
import random
from json import dumps
import json

import pandas as pd
import redis
from django.core import serializers
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

from administrators.models import User
from analysis.models import Carousel, Company

# Create your views here.
from django.views.decorators.csrf import csrf_exempt

from analysis.digitization import get_digitaluser, Analysis, jobmatch, getmaxpoint
from analysis.models import Job, DigitizedJob, SpiderConf, Keyword, Hotword
from analysis.portrait import user_portrait, job_portrait, company_portrait
from analysis.portrait.job_portrait import getonegraph, getallgraph, jobcity
from analysis.prediction import predic
from analysis.scrapyd_api import ScrapydApi
from analysis.spider_scheduler import scheduler
from analysis.tools.model_tool import get_random_job_id, saveas_diuser
from analysis.tools.persistence_data_handel import persistence_job, persistence_djob, persistence_company


def index(request):
    return render(request, 'analysis/index.html')


def get_carouselData(request):
    carousels = Carousel.objects.filter(state=1)
    result = []
    for carousel in carousels:
        r = {'photo_url': carousel.photo_url, 'content_url': carousel.content_url}
        result.append(r)
    return JsonResponse(result, safe=False)


def access(request):
    pass


def persistence(request):
    persistence_company('datas/data.csv')
    return HttpResponse(request)


def updateclicktimes(job: Job):
    job.clicktimes += 1
    job.save()


def pack_job_result(matchjobs: list):
    result = {}

    try:
        list = []
        for i in matchjobs:
            job = i['job']
            # updateclicktimes(job)       # 更新点击量
            j = {
                "id": job.id,
                "compName": job.JobName,
                "compPlace": job.releaseTime,
                "compSalary": job.JobSalary,
                "compPosition": job.JobPlace,
                "compPublishTime": '1.1',
                "recruitmentSources": job.jobLink,
                'matchingdegree': str(i['point'] / getmaxpoint() * 100) + '%'
            }
            list.append(j)
    except Exception as e:
        result['status'] = 'no'
        result['message'] = 'internal error'
        return result
    result['result'] = list
    if len(list) > 0:
        result['status'] = 'yes'
        result['message'] = '查询成功'
    else:
        result['status'] = 'no'
        result['message'] = '无匹配结果'
    print(result)
    return result

def pack_job_list(jobs: list):
    list = []
    for i in jobs:
        j = {
            "id": i.id,
            "compName": i.JobName,
            "compPlace": i.releaseTime,
            "compSalary": i.JobSalary,
            "compPosition": i.JobPlace,
            "compPublishTime": '1.1',
            "recruitmentSources": i.jobLink
        }
        list.append(j)
    print(list)
    return list


def pack_job_listwithcompname(jobs: list, compnames):
    list = []
    idx = 0
    for i in jobs:
        j = {
            "id": i.id,
            "compName": compnames[idx][0],
            "compPlace": i.releaseTime,
            "compSalary": i.JobSalary,
            "compPosition": i.JobName,
            "compPublishTime": '1.1',
            "recruitmentSources": i.jobLink
        }
        idx+=1
        list.append(j)
    print(list)
    return list


def test_url(request):
    scheduler()


def start_spider(request):
    project_name = 'sots'
    kword = 'php'
    scrapyd_master = ScrapydApi('localhost')  # local的地址对应localhost
    run_stat = scrapyd_master.run_slave_spider(project_name, 'lagou_new')
    print(json.loads(run_stat))

# TODO 每次匹配结果存入数据库
@csrf_exempt
def job_list(request):
    if request.method == 'POST':
        print(request.body)
        # 获取求职者信息  预测   返回结果
        try:
            b = request.body.decode()
            body = eval(b)

            # compSize = body['compSize']
            place = body['place']
            # experience = body['exper'] TODO delete
            experience = '4'
            # education = body['edu'] TODO education
            education = '本科'
            skills = body['skills']
        except KeyError as e:
            print('error', e)
            return JsonResponse(pack_job_result([]), safe=False)
        # 将提交表单的字段转化为数字
        user = get_digitaluser(skills, experience, education, '', 'java')
        result = predic(user)

        djobs = DigitizedJob.objects.order_by('salary').filter(salary__gt=result)[0:100]
        print(djobs[0].salary)

        jobs = []

        for djob in djobs:
            job = Job.objects.get(jobId=djob.job_id)
            jobs.append(job)

        result = jobmatch(jobs, skills, experience, education, place)
        # 拼接返回JSON
        list = pack_job_result(result)

        return JsonResponse(list, safe=False)


def get_searchKeyword(request):
    releaseTime = ['本周发布', '本月发布', '三个月內发布']

    workExperience = []
    for i in range(10):
        workExperience.append(i)
    workExperience.append('十年以上')

    education = ['大专', '本科', '硕士', '博士']

    skills = []
    skillsfile = open('analysis/result/java_keywords')
    for skill in skillsfile.readlines():
        skill = (skill.split(' ')[0].strip())
        skills.append(skill)
    skills = skills[:10]
    salary = ['5K', '10K', '15K', '20K']

    jobs = []
    for i in range(5):
        randid = get_random_job_id()
        print('get job : ', randid)
        job = Job.objects.get(id=randid)
        jobs.append(job)

    res = {
        'releaseTime': releaseTime,
        'workExperience': workExperience,
        'education': education,
        'skills': skills,
        'salary': salary,
        'recommend': pack_recommend(jobs),
    }

    return JsonResponse(res)


def pack_recommend(jobs):
    recs = []
    for job in jobs:
        recs.append({
            'content': job.JobName,
            'hot': True,
            'url': job.jobLink
        })


# 推荐职位
def get_recommendInformation(request):
    jobs = []
    compids = []
    for i in range(20):

        randid = get_random_job_id()
        print('get job : ', randid)
        try:
            job = Job.objects.get(id=randid)
            jobs.append(job)
            compids.append(job.company_id)
        except BaseException as e:
            print(e)
            i -= 1
    compnames = Company.objects.filter(companyId__in=compids).values_list('compName')
    recommendjobs = pack_job_listwithcompname(jobs, compnames)
    return JsonResponse(recommendjobs, safe=False)


# 获取热门职位
def get_hotJob(request):
    jobs = Job.objects.order_by('clicktimes')[:20]
    compids = []
    for i in jobs:
        compids.append(i.company_id)
    compnames = Company.objects.filter(companyId__in=compids).values_list('compName')

    hotjobs = pack_job_listwithcompname(jobs, compnames)
    return JsonResponse(hotjobs, safe=False)


# 猜你喜欢
def get_personRecommend(request):
    jobs = []
    for i in range(20):
        randid = get_random_job_id()
        print('get job : ', randid)
        job = Job.objects.get(id=randid)
        jobs.append(job)
    recommendjobs = pack_job_list(jobs)
    return JsonResponse(recommendjobs, safe=False)


# 前端传入id数组
def get_requirementsDiagrams(request):
    getonegraph(id)
    pass


def get_allrequirementsDiagrams(request):
    graph = getallgraph('analysis/result/newModel.csv')

    return JsonResponse(graph)

'''
{
            statu: 1,
            errorcode: 101,
            errormessage: "服务器繁忙",
            data:{
                chart:{
                    <!-- 各年龄阶段所拥有的人数 -->
                    userage:[
                            { value: 335, name: '20-25' },
                            { value: 310, name: '25-30' },
                            { value: 274, name: '30-35' },
                            { value: 235, name: '35-40' },
                            { value: 235, name: '40-45' },
                            { value: 235, name: '其他' },
                        ]
                },
                table:{
                    title: string[],
                    body: string[],
                },
                descr:{
                    <!-- 未定 -->
                }
            }
        }
'''
def pack_graph_result(datas: dict, **kwargs):
    if len(datas) == 0:
        result = {'statu': '0'}
    else:
        result = {'statu': '1'}

        kwitems = kwargs.items()
        for item in kwitems:
            result[item[0]] = item[1]
        items = datas.items()

        sec = dict()
        for item in items:
            sec[item[0]] = item[1]

        result['data'] = dict()
        result['data']['chart'] = sec

    return result


def get_usersex(request):
    r = redis.Redis()
    datas = r.hget('portraits', 'user_sex')
    if datas is None:
        datas = user_portrait.user_sex()
        r.hset('portraits', 'user_sex', pickle.dumps(datas))
    datas = pickle.loads(r.hget('portraits', 'user_sex'))
    print(pack_graph_result(datas))
    return JsonResponse(pack_graph_result(datas))


def get_user_data(request):
    r = redis.Redis()
    datas = r.hget('portraits', 'user_data')
    if datas is None:
        datas = user_portrait.user_data()
        r.hset('portraits', 'user_data', pickle.dumps(datas))
    datas = pickle.loads(r.hget('portraits', 'user_data'))
    print(pack_graph_result(datas))
    return JsonResponse(pack_graph_result(datas))


def get_userfavcity(request):
    r = redis.Redis()
    datas = r.hget('portraits', 'userfavcity')
    if datas is None:
        datas = user_portrait.userfavcity()
        r.hset('portraits', 'userfavcity', pickle.dumps(datas))
    datas = pickle.loads(r.hget('portraits', 'userfavcity'))
    print(pack_graph_result(datas))

    return JsonResponse(pack_graph_result(datas))

def get_userfavjob(request):
    r = redis.Redis()
    datas = r.hget('portraits', 'userfavjob')
    if datas is None:
        datas = user_portrait.userfavjob()
        r.hset('portraits', 'userfavjob', pickle.dumps(datas))
    datas = pickle.loads(r.hget('portraits', 'userfavjob'))
    print(pack_graph_result(datas))

    return JsonResponse(pack_graph_result(datas))

def get_useragenum(request):
    r = redis.Redis()
    datas = r.hget('portraits', 'user_action')
    if datas is None:
        datas = user_portrait.user_action()
        r.hset('portraits', 'user_action', pickle.dumps(datas))
    datas = pickle.loads(r.hget('portraits', 'user_action'))
    print(pack_graph_result(datas))

    return JsonResponse(pack_graph_result(datas))


def get_user_feature(request):
    r = redis.Redis()
    datas = r.hget('portraits', 'user_feature')
    if datas is None:
        datas = user_portrait.user_feature()
        r.hset('portraits', 'user_feature', pickle.dumps(datas))
    datas = pickle.loads(r.hget('portraits', 'user_feature'))
    print(pack_graph_result(datas))

    return JsonResponse(pack_graph_result(datas))


def get_job_need(request):
    r = redis.Redis()
    datas = r.hget('portraits', 'job_need')
    if datas is None:
        datas = job_portrait.job_need()
        r.hset('portraits', 'job_need', pickle.dumps(datas))
    datas = pickle.loads(r.hget('portraits', 'job_need'))
    print(pack_graph_result(datas))

    return JsonResponse(pack_graph_result(datas, num=10))


def get_job_detail(request):
    r = redis.Redis()
    datas = r.hget('portraits', 'job_detail')
    if datas is None:
        datas = job_portrait.salary_analysis()
        r.hset('portraits', 'job_detail', pickle.dumps(datas))
    datas = pickle.loads(r.hget('portraits', 'salary_analysis'))
    print(pack_graph_result(datas))

    return JsonResponse(pack_graph_result(datas))


def get_salary_analysis(request):
    r = redis.Redis()
    datas = r.hget('portraits', 'salary_analysis')
    if datas is None:
        datas = job_portrait.salary_analysis()
        r.hset('portraits', 'salary_analysis', pickle.dumps(datas))
    datas = pickle.loads(r.hget('portraits', 'salary_analysis'))
    print(pack_graph_result(datas))

    return JsonResponse(pack_graph_result(datas))


def get_comp_scale(request):
    r = redis.Redis()
    datas = r.hget('portraits', 'comp_scale')
    if datas is None:
        datas = company_portrait.comp_scale()
        r.hset('portraits', 'comp_scale', pickle.dumps(datas))
    datas = pickle.loads(r.hget('portraits', 'comp_scale'))
    print(pack_graph_result(datas))
    return JsonResponse(pack_graph_result(datas))


def get_corporateportrait(request):
    r = redis.Redis()
    datas = r.hget('portraits', 'corporateportrait')
    if datas is None:
        datas = company_portrait.corporateportrait()
        r.hset('portraits', 'corporateportrait', pickle.dumps(datas))
    datas = pickle.loads(r.hget('portraits', 'corporateportrait'))
    print(pack_graph_result(datas))

    return JsonResponse(pack_graph_result(datas))


def get_compkind(request):
    r = redis.Redis()
    datas = r.hget('portraits', 'compkind')
    if datas is None:
        datas = company_portrait.compkind()
        r.hset('portraits', 'compkind', pickle.dumps(datas))
    datas = pickle.loads(r.hget('portraits', 'compkind'))
    print(pack_graph_result(datas))

    return JsonResponse(pack_graph_result(datas))


def get_citycompscale(request):
    r = redis.Redis()
    datas = r.hget('portraits', 'citycompscale')
    if datas is None:
        datas = company_portrait.citycompscale()
        r.hset('portraits', 'citycompscale', pickle.dumps(datas))
    datas = pickle.loads(r.hget('portraits', 'citycompscale'))
    print(pack_graph_result(datas))

    return JsonResponse(pack_graph_result(datas))


def get_difcompscaleexper(request):
    r = redis.Redis()
    datas = r.hget('portraits', 'difcompscaleexper')
    if datas is None:
        datas = company_portrait.difcompscaleexper()
        r.hset('portraits', 'difcompscaleexper', pickle.dumps(datas))
    datas = pickle.loads(r.hget('portraits', 'difcompscaleexper'))
    print(pack_graph_result(datas))

    return JsonResponse(pack_graph_result(datas))


def get_cityindustrycompnum(request):
    r = redis.Redis()
    datas = r.hget('portraits', 'cityindustrycompnum')
    if datas is None:
        datas = company_portrait.cityindustrycompnum()
        r.hset('portraits', 'cityindustrycompnum', pickle.dumps(datas))
    datas = pickle.loads(r.hget('portraits', 'cityindustrycompnum'))
    print(pack_graph_result(datas))

    return JsonResponse(pack_graph_result(datas))


def get_difcompscaleedu(request):
    r = redis.Redis()
    datas = r.hget('portraits', 'difcompscaleedu')
    if datas is None:
        datas = company_portrait.difcompscaleedu()
        r.hset('portraits', 'difcompscaleedu', pickle.dumps(datas))
    datas = pickle.loads(r.hget('portraits', 'difcompscaleedu'))
    print(pack_graph_result(datas))

    return JsonResponse(pack_graph_result(datas))


def get_difcompscalejobnum(request):
    r = redis.Redis()
    datas = r.hget('portraits', 'difcompscalejobnum')
    if datas is None:
        datas = company_portrait.difcompscalejobnum()
        r.hset('portraits', 'difcompscalejobnum', pickle.dumps(datas))
    datas = pickle.loads(r.hget('portraits', 'difcompscalejobnum'))
    print(pack_graph_result(datas))

    return JsonResponse(pack_graph_result(datas))


def get_comp_statu(request):
    r = redis.Redis()
    datas = r.hget('portraits', 'comp_status')
    if datas is None:
        datas = company_portrait.comp_status()
        r.hset('portraits', 'comp_status', pickle.dumps(datas))
    datas = pickle.loads(r.hget('portraits', 'comp_status'))
    print(pack_graph_result(datas))

    return JsonResponse(pack_graph_result(datas))


def get_industrycitycompnum(request):
    r = redis.Redis()
    datas = r.hget('portraits', 'industrycitycompnum')
    if datas is None:
        datas = job_portrait.industrycitycompnum()
        r.hset('portraits', 'industrycitycompnum', pickle.dumps(datas))
    datas = pickle.loads(r.hget('portraits', 'industrycitycompnum'))
    print(pack_graph_result(datas))

    return JsonResponse(pack_graph_result(datas))


def get_factorsalary(request):
    r = redis.Redis()
    datas = r.hget('portraits', 'factorsalary')
    if datas is None:
        datas = job_portrait.factorsalary()
        r.hset('portraits', 'factorsalary', pickle.dumps(datas))
    datas = pickle.loads(r.hget('portraits', 'factorsalary'))
    print(pack_graph_result(datas))

    return JsonResponse(pack_graph_result(datas))


def get_postportrait(request):
    r = redis.Redis()
    datas = r.hget('portraits', 'postportrait')
    if datas is None:
        datas = job_portrait.postportrait()
        r.hset('portraits', 'postportrait', pickle.dumps(datas))
    datas = pickle.loads(r.hget('portraits', 'postportrait'))
    print(pack_graph_result(datas))

    return JsonResponse(pack_graph_result(datas))


def get_welfaresalaryfactor(request):
    r = redis.Redis()
    datas = r.hget('portraits', 'welfaresalaryfactor')
    if datas is None:
        datas = job_portrait.welfaresalaryfactor()
        r.hset('portraits', 'welfaresalaryfactor', pickle.dumps(datas))
    datas = pickle.loads(r.hget('portraits', 'welfaresalaryfactor'))
    print(pack_graph_result(datas))

    return JsonResponse(pack_graph_result(datas))


def get_avgsalaryjobnum(request):
    r = redis.Redis()
    datas = r.hget('portraits', 'avgsalaryjobnum')
    if datas is None:
        datas = job_portrait.avgsalaryjobnum()
        r.hset('portraits', 'avgsalaryjobnum', pickle.dumps(datas))
    datas = pickle.loads(r.hget('portraits', 'avgsalaryjobnum'))
    print(pack_graph_result(datas))

    return JsonResponse(pack_graph_result(datas))



def get_topsalaryjobnum(request):
    r = redis.Redis()
    datas = r.hget('portraits', 'topsalaryjobnum')
    if datas is None:
        datas = job_portrait.topsalaryjobnum()
        r.hset('portraits', 'topsalaryjobnum', pickle.dumps(datas))
    datas = pickle.loads(r.hget('portraits', 'topsalaryjobnum'))
    print(pack_graph_result(datas))

    return JsonResponse(pack_graph_result(datas))


def get_factorjobnum(request):
    r = redis.Redis()
    datas = r.hget('portraits', 'factorjobnum')
    if datas is None:
        datas = job_portrait.factorjobnum()
        r.hset('portraits', 'factorjobnum', pickle.dumps(datas))
    datas = pickle.loads(r.hget('portraits', 'factorjobnum'))
    print(pack_graph_result(datas))

    return JsonResponse(pack_graph_result(datas))

# 存储简历
def jianli(request):
    from concurrent.futures import ThreadPoolExecutor
    executor = ThreadPoolExecutor(20)

    all = User.objects.all()
    for i in all:
        executor.submit(saveas_diuser, i)


def test(request):
    jobcity()