from django.core import serializers
from django.core.serializers import json
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

# Create your views here.
from django.views.decorators.csrf import csrf_exempt

from analysis.models import Job
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
    if request.method == 'GET':
        jobs = Job.objects.order_by('id')[0:5]
        list = []
        for i in jobs:
            j = {
                "id":i.id,
                "compName":i.JobName,
                "compPlace":i.JobPlace,
                "compSalary":i.JobSalary,
                "compPosition":i.JobPlace,
                "compPublish":'1.1'
            }
            list.append(j)
        print(list)

        return JsonResponse(list, safe=False)