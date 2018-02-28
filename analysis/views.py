import random
from json import dumps

from django.core import serializers
from django.core.serializers import json
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

# Create your views here.
from django.views.decorators.csrf import csrf_exempt

from analysis.digitization import get_digitaluser
from analysis.models import Job, DigitizedJob
from analysis.prediction import predic
from analysis.tools.csv_to_database import persistence_job, persistence_djob, persistence_company


def index(request):
    return render(request, 'analysis/index.html')


def access(request):
    return render(request, 'analysis/access.html')


def into_mysql(request):
    persistence_job('datas/java_data.csv')
    return HttpResponse(request, 'hfhfhfh')


def write_djob(request):
    persistence_djob('analysis/result/newModel.csv')
    return HttpResponse(request)


def persistence(request):
    persistence_company('datas/java_data.csv')
    return HttpResponse(request)

def pack_job_result(jobs:list):
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


@csrf_exempt
def job_list(request):
    if request.method == 'POST':
        print(request.body)
        # 获取求职者信息  预测   返回结果
        b = request.body.decode()
        body = eval(b)
        try:
            # compSize = body['compSize']
            experience = body['exper']
            education = body['edu']
            skills = body['skills']
        except KeyError as e:
            return JsonResponse([], safe=False)
        # 将提交表单的字段转化为数字
        user = get_digitaluser(skills, experience, education, '')
        result = predic(user)

        # 查询条件相近的职位
        djobs = DigitizedJob.objects.order_by('salary').filter(salary__gt=result)[0:5]
        print(djobs[0].salary)
        jobs = []
        for djob in djobs:
            job = Job.objects.get(id=djob.Job.id)
            jobs.append(job)

        # 拼接返回JSON
        list = pack_job_result(jobs)

        return JsonResponse(list, safe=False)


# TODO 修改为从文件或数据库获取
def get_searchKeyword(request):
    releaseTime = ['this week', 'this month', 'latest three mount']

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
        randid = random.randint(5200, 6000)
        print('get job : ', randid)
        job = Job.objects.get(id=randid)
        jobs.append(job)
    recommendjobs = pack_job_result(jobs)
    return JsonResponse(recommendjobs, safe=False)


# 获取热门职位
def get_hotJob(request):

    jobs = Job.objects.order_by('clicktimes')[:5]
    hotjobs = pack_job_result(jobs)
    return JsonResponse(hotjobs, safe=False)


# 猜你喜欢
def get_personRecommend(request):
    jobs = []
    for i in range(5):
        randid = random.randint(5200, 6000)
        print('get job : ', randid)
        job = Job.objects.get(id=randid)
        jobs.append(job)
    recommendjobs = pack_job_result(jobs)
    return JsonResponse(recommendjobs, safe=False)
