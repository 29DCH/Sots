import random
from json import dumps
import json

import pandas as pd
from django.core import serializers
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

# Create your views here.
from django.views.decorators.csrf import csrf_exempt

from analysis.digitization import get_digitaluser, Analysis, jobmatch, getmaxpoint
from analysis.models import Job, DigitizedJob, SpiderConf
from analysis.portrait.job_portrait import getonegraph, getallgraph
from analysis.prediction import predic
from analysis.scrapyd_api import ScrapydApi
from analysis.spider_scheduler import scheduler, test
from analysis.tools.persistence_data_handel import persistence_job, persistence_djob, persistence_company


def index(request):
    return render(request, 'analysis/index.html')


def access(request):
    return render(request, 'analysis/access.html')


def persistence(request):
    persistence_company('datas/data.csv')
    return HttpResponse(request)


def updateclicktimes(job:Job):
    job.clicktimes += 1
    job.save()


def pack_job_result(matchjobs:list):
    result = {}

    try:
        list = []
        for i in matchjobs:
            job = i['job']
            # updateclicktimes(job)       # 更新点击量
            j = {
                "id": job.id,
                "compName": job.JobName,
                "compPlace": job.JobPlace,
                "compSalary": job.JobSalary,
                "compPosition": job.JobPlace,
                "compPublishTime": '1.1',
                "recruitmentSources": job.jobLink,
                'matchingdegree': str(i['point']/getmaxpoint()*100)+'%'
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


def pack_job_list(jobs:list):
    list = []
    for i in jobs:
        j = {
            "id": i.id,
            "compName": i.JobName,
            "compPlace": i.JobPlace,
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
    # test()


# TODO 只会被调用一次的爬虫启动接口
def start_spider(request):
    project_name = 'sots'
    kword = 'php'
    scrapyd_master = ScrapydApi('localhost')  # local的地址对应localhost
    run_stat = scrapyd_master.run_slave_spider(project_name, 'lagou_new')
    print(json.loads(run_stat))


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
            experience = body['exper']
            education = body['edu']
            skills = body['skills']
        except KeyError as e:
            return pack_job_result([])
        # 将提交表单的字段转化为数字
        user = get_digitaluser(skills, experience, education, '', 'java')
        result = predic(user)

        djobs = DigitizedJob.objects.order_by('salary').filter(salary__gt=result)[0:50]
        print(djobs[0].salary)

        jobs = []

        for djob in djobs:
            job = Job.objects.get(id=djob.Job.id)
            jobs.append(job)


        # TODO 有效值检测(一个独立模块)
        result = jobmatch(jobs, skills, experience, education, place)
        # 拼接返回JSON
        list = pack_job_result(result)

        return JsonResponse(list, safe=False)


# TODO 修改为从文件或数据库获取
def get_searchKeyword(request):
    releaseTime = ['本周发布', '本月发布', '三个月內发布']

    workExperience = []
    for i in range(10):
        workExperience.append(i)
    workExperience.append('十年以上')

    education = ['大专', '本科','硕士','博士']

    skills = []
    skillsfile = open('analysis/result/keywords')
    for skill in skillsfile.readlines():
        skills.append(skill.strip())

    res = {
        'releaseTime': releaseTime,
        'workExperience': workExperience,
        'education': education,
        'skills': skills
    }

    return JsonResponse(res)

# 推荐职位
def get_recommendInformation(request):
    jobs = []
    for i in range(5):

        randid = random.randint(0, 5000)
        print('get job : ', randid)
        job = Job.objects.get(id=randid)
        jobs.append(job)
    recommendjobs = pack_job_list(jobs)
    return JsonResponse(recommendjobs, safe=False)


# 获取热门职位
def get_hotJob(request):

    jobs = Job.objects.order_by('clicktimes')[:5]
    hotjobs = pack_job_list(jobs)
    return JsonResponse(hotjobs, safe=False)


# 猜你喜欢
def get_personRecommend(request):
    jobs = []
    for i in range(5):
        randid = random.randint(5200, 6000)
        print('get job : ', randid)
        job = Job.objects.get(id=randid)
        jobs.append(job)
    recommendjobs = pack_job_list(jobs)
    return JsonResponse(recommendjobs, safe=False)


# TODO 在哪里显示？
# 前端传入id数组
def get_requirementsDiagrams(request):

    getonegraph(id)
    pass


def get_allrequirementsDiagrams(request):
    graph = getallgraph('analysis/result/newModel.csv')

    return JsonResponse(graph)