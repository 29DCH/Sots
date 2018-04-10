import random
from json import dumps
import json

import pandas as pd
from django.core import serializers
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from analysis.models import Carousel

# Create your views here.
from django.views.decorators.csrf import csrf_exempt

from analysis.digitization import get_digitaluser, Analysis, jobmatch, getmaxpoint
from analysis.models import Job, DigitizedJob, SpiderConf, Keyword, Hotword
from analysis.portrait import user_portrait, job_portrait, company_portrait
from analysis.portrait.job_portrait import getonegraph, getallgraph
from analysis.prediction import predic
from analysis.scrapyd_api import ScrapydApi
from analysis.spider_scheduler import scheduler
from analysis.tools.model_tool import get_random_job_id
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
    for i in range(20):

        randid = get_random_job_id()
        print('get job : ', randid)
        try:
            job = Job.objects.get(id=randid)
            jobs.append(job)
        except BaseException as e:
            print(e)
            i -= 1
    recommendjobs = pack_job_list(jobs)
    return JsonResponse(recommendjobs, safe=False)


# 获取热门职位
def get_hotJob(request):
    jobs = Job.objects.order_by('clicktimes')[:20]
    hotjobs = pack_job_list(jobs)
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


def pack_graph_result(datas: dict, **kwargs):
    if len(datas) == 0:
        result = {'status': 'no'}
    else:
        result = {'status': 'ok'}

        kwitems = kwargs.items()
        for item in kwitems:
            result[item[0]] = item[1]
        items = datas.items()

        sec = dict()
        for item in items:
            sec[item[0]] = item[1]

        result['result'] = sec
    return result


def get_user_data(request):
    datas = user_portrait.user_data()
    print(pack_graph_result(datas))
    return JsonResponse(pack_graph_result(datas))


def get_user_action(request):
    datas = user_portrait.user_action()
    print(pack_graph_result(datas))

    return JsonResponse(pack_graph_result(datas))


def get_user_feature(request):
    datas = user_portrait.user_feature()
    print(pack_graph_result(datas))

    return JsonResponse(pack_graph_result(datas))


def get_job_need(request):
    datas = job_portrait.job_need()
    print(pack_graph_result(datas))

    return JsonResponse(pack_graph_result(datas, num=10))


def get_job_detail(request):
    datas = job_portrait.job_detail()
    print(pack_graph_result(datas))

    return JsonResponse(pack_graph_result(datas))


def get_salary_analysis(request):
    datas = job_portrait.salary_analysis()
    print(pack_graph_result(datas))

    return JsonResponse(pack_graph_result(datas))


def get_comp_scale(request):
    datas = company_portrait.comp_scale()
    print(pack_graph_result(datas))
    return JsonResponse(pack_graph_result(datas))


def get_comp_statu(request):
    datas = company_portrait.comp_status()
    print(pack_graph_result(datas))

    return JsonResponse(pack_graph_result(datas))
