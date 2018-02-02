from django.db import models
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.urls import reverse
import administrators.models as m

# 展示岗位
def show(request):
    jobs = m.Job.objects.all()
    return render(request, 'job/jobShow.html', {'jobs': jobs})

# 删除岗位
def delete(request):
    jid = request.GET['jid']
    print('jid', 'xxxxxxxx')
    m.Job.objects.get(id=jid).delete()
    return show(request)

# 跳转到添加岗位界面
def add(request):
    return  render(request, 'job/jobAdd.html')

# 存储岗位
def save(request):
    JobName = request.POST['JobName']
    JobPlace = request.POST['JobPlace']
    JobSalary = request.POST['JobSalary']
    JobAdvantage = request.POST['JobAdvantage']
    releaseTime = request.POST['releaseTime']
    jobNeed = request.POST['jobNeed']
    educationRequire = request.POST['educationRequire']
    experienceRequire = request.POST['experienceRequire']
    skillRequire = request.POST['skillRequire']
    jobLink = request.POST['jobLink']
    jobInfo = request.POST['jobInfo']
    jobNature = request.POST['jobNature']
    jobLabels = request.POST['jobLabels']

    job = m.Job(JobName=JobName, JobPlace=JobPlace,
             JobSalary=JobSalary,JobAdvantage=JobAdvantage,
             releaseTime=releaseTime,jobNeed=jobNeed,
             educationRequire=educationRequire,experienceRequire=experienceRequire,
             skillRequire=skillRequire,jobLink=jobLink,jobInfo=jobInfo,
             jobNature=jobNature,jobLabels=jobLabels)
    job.save()
    return show(request)

# 跳转到编辑岗位界面
def edit(request):
    jid = request.GET['jid']
    job = m.Job.objects.get(id=jid)
    return render(request, 'job/jobEditor.html', {'job' : job})

# 更新岗位
def update(request):
    jid = request.POST['jid']
    JobName = request.POST['JobName']
    JobPlace = request.POST['JobPlace']
    JobSalary = request.POST['JobSalary']
    JobAdvantage = request.POST['JobAdvantage']
    releaseTime = request.POST['releaseTime']
    jobNeed = request.POST['jobNeed']
    educationRequire = request.POST['educationRequire']
    experienceRequire = request.POST['experienceRequire']
    skillRequire = request.POST['skillRequire']
    jobLink = request.POST['jobLink']
    jobInfo = request.POST['jobInfo']
    jobNature = request.POST['jobNature']
    jobLabels = request.POST['jobLabels']

    job = m.Job.objects.get(id=jid)
    job.JobName = JobName
    job.JobPlace = JobPlace
    # job.JobSalary = JobSalary
    job.JobAdvantage = JobAdvantage
    job.releaseTime = releaseTime
    job.jobNeed = jobNeed
    job.educationRequire = educationRequire
    job.experienceRequire = experienceRequire
    job.skillRequire = skillRequire
    job.jobLink = jobLink
    job.jobInfo = jobInfo
    job.jobNature = jobNature
    job.jobLabels = jobLabels

    job.save()
    return show(request)

