from django.http import HttpResponse
from django.shortcuts import render


# Create your views here.
from analysis.tools.csv_to_mysql import write_job_to_mysql


def index(request):
    return render(request, 'analysis/index.html')

def access(request):
    return render(request, 'analysis/access.html')


def into_mysql(request):
    write_job_to_mysql()
    return HttpResponse(request, 'hfhfhfh')