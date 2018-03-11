from django.db import models
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.urls import reverse

import analysis.models as m
import  pandas

# 展示公司
def show(request):
    coms = m.Company.objects.all()
    return render(request, 'company/companyShow.html', {'coms': coms})

# 删除公司
def delete(request):
    comid = request.GET['comid']
    m.Company.objects.get(id=comid).delete()
    return show(request)


# 暂时先只写查、删
# # 跳转到添加公司界面
# def add(request):
#     return  render(request, 'job/jobAdd.html')
#
# # 存储公司
# def save(request):
#     JobName = request.POST['JobName']
#     JobPlace = request.POST['JobPlace']
#     JobSalary = request.POST['JobSalary']
#     JobAdvantage = request.POST['JobAdvantage']
#     releaseTime = request.POST['releaseTime']
#     jobNeed = request.POST['jobNeed']
#     educationRequire = request.POST['educationRequire']
#     experienceRequire = request.POST['experienceRequire']
#     skillRequire = request.POST['skillRequire']
#     jobLink = request.POST['jobLink']
#     jobInfo = request.POST['jobInfo']
#     jobNature = request.POST['jobNature']
#     jobLabels = request.POST['jobLabels']
#
#     job = m.Job(JobName=JobName, JobPlace=JobPlace,
#              JobSalary=JobSalary,JobAdvantage=JobAdvantage,
#              releaseTime=releaseTime,jobNeed=jobNeed,
#              educationRequire=educationRequire,experienceRequire=experienceRequire,
#              skillRequire=skillRequire,jobLink=jobLink,jobInfo=jobInfo,
#              jobNature=jobNature,jobLabels=jobLabels)
#     job.save()
#     return show(request)
#
# # 跳转到编辑公司界面
# def edit(request):
#     jid = request.GET['jid']
#     job = m.Job.objects.get(id=jid)
#     return render(request, 'job/jobEditor.html', {'job' : job})
#
# # 更新公司
# def update(request):
#     jid = request.POST['jid']
#     JobName = request.POST['JobName']
#     JobPlace = request.POST['JobPlace']
#     JobSalary = request.POST['JobSalary']
#     JobAdvantage = request.POST['JobAdvantage']
#     releaseTime = request.POST['releaseTime']
#     jobNeed = request.POST['jobNeed']
#     educationRequire = request.POST['educationRequire']
#     experienceRequire = request.POST['experienceRequire']
#     skillRequire = request.POST['skillRequire']
#     jobLink = request.POST['jobLink']
#     jobInfo = request.POST['jobInfo']
#     jobNature = request.POST['jobNature']
#     jobLabels = request.POST['jobLabels']
#
#     job = m.Job.objects.get(id=jid)
#     job.JobName = JobName
#     job.JobPlace = JobPlace
#     # job.JobSalary = JobSalary
#     job.JobAdvantage = JobAdvantage
#     job.releaseTime = releaseTime
#     job.jobNeed = jobNeed
#     job.educationRequire = educationRequire
#     job.experienceRequire = experienceRequire
#     job.skillRequire = skillRequire
#     job.jobLink = jobLink
#     job.jobInfo = jobInfo
#     job.jobNature = jobNature
#     job.jobLabels = jobLabels
#
#     job.save()
#     return show(request)
#
# def readDate():
#     pa = pandas.read_csv(r'D:/java_data.csv',encoding='gbk', header=None,names=['JobName',
#         'JobPlace', 'JobSalary', 'JobAdvantage', 'releaseTime', 'jobNeed',
#         'educationRequire', 'experienceRequire', 'skillRequire', 'jobLink',
#         'jobInfo', 'jobNature', 'jobLabels'])
#     # pa = pandas.read_csv(r'D:/data.txt', header=None, names=['a', 'b', 'c'])
#     print(pa.head(5))


# 公司类
class Company(models.Model):
    # 公司id
    companyId = models.IntegerField()
    # 公司名称
    compName = models.CharField(max_length=50)
    # 公司规模
    compSize = models.CharField(max_length=20)
    # 公司行业
    compIndustry = models.CharField(max_length=50)
    # 公司标签
    companyLabels = models.CharField(max_length=50)
    # 公司链接
    compLink = models.CharField(max_length=200)
    # 公司介绍
    compIntroduce = models.TextField()
    # 联系信息
    contactInfo = models.CharField(max_length=50)
    # 经度
    longitude = models.FloatField()
    # 纬度
    latitude = models.FloatField()
    # 商业区域
    businessZones = models.CharField(max_length=50)
    # 公司主页
    compHome = models.CharField(max_length=200)
    # 公司LOGO
    companyLogo = models.CharField(max_length=100)
    # 融资
    financeStage = models.CharField(max_length=20)
