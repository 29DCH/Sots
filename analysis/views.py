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
from analysis.tools.csv_to_mysql import write_job_to_mysql, write_diJob_to_mysql


def index(request):
    return render(request, 'analysis/index.html')


def access(request):
    return render(request, 'analysis/access.html')


def into_mysql(request):
    write_job_to_mysql()
    return HttpResponse(request, 'hfhfhfh')


def write_djob(request):
    write_diJob_to_mysql()
    return HttpResponse(request)


@csrf_exempt
def job_list(request):
    if request.method == 'POST':
        print(request.body)
        # 获取求职者信息  预测   返回结果
        b = request.body.decode()
        body = eval(b)

        salary = body['salary']
        experience = body['exper']
        education = body['edu']
        skills = body['skills']

        # 将提交表单的字段转化为数字
        user = get_digitaluser(salary, experience, education, skills)
        result = predic(user)

        # 查询条件相近的职位
        djobs = DigitizedJob.objects.order_by('salary').filter(salary__gt = result)[0:5]
        print(djobs[0].salary)
        jobs = []
        for djob in djobs:
            job = Job.objects.get(id=djob.Job.id)
            jobs.append(job)

        # 拼接返回JSON
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

        return JsonResponse(list, safe=False)