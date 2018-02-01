from django.db import models
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.urls import reverse

# 职位类
class Job(models.Model):
    # 职位名称
    JobName = models.CharField(max_length=30)
    # 职位地点
    JobPlace = models.CharField(max_length=10)
    # 职位薪水
    JobSalary = models.CharField(max_length=10)
    # 职位优势
    JobAdvantage = models.CharField(max_length=30)
    # 发布时间
    releaseTime = models.CharField(max_length=30)
    # 工作需求
    jobNeed = models.CharField(max_length=30)
    # 学历要求
    educationRequire = models.CharField(max_length=30)
    # 经验要求
    experienceRequire = models.CharField(max_length=30)
    # 技能需求
    skillRequire = models.CharField(max_length=30)
    # 职位链接
    jobLink = models.CharField(max_length=200)
    # 职位信息
    jobInfo = models.TextField()
    # 职位性质
    jobNature = models.CharField(max_length=20)
    # 职位标签
    jobLabels = models.CharField(max_length=30)

# 展示岗位
def show(request):
    jobs = Job.objects.all()
    return render(request, 'job/jobShow.html', {'jobs': jobs})

# 删除岗位
def delete(request):
    jid = request.GET['jid']
    print('jid', 'xxxxxxxx')
    Job.objects.get(id=jid).delete()
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

    job = Job(JobName=JobName, JobPlace=JobPlace,
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
    job = Job.objects.get(id=jid)
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

    job = Job.objects.get(id=jid)
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

