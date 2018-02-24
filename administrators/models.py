from django.db import models
from django.http import HttpResponse
from django.shortcuts import render
# Create your models here.

# 用户表
class User(models.Model):
    username = models.CharField(max_length=10)# 用户名
    password = models.CharField(max_length=10)# 密码
    nickname = models.CharField(max_length=10)# 昵称

# 用户求职信息表`
class UserInfo(models.Model):
    educationRequire = models.CharField(max_length=20)# 学历
    major = models.CharField(max_length=20)# 专业
    school = models.CharField(max_length=20)# 学校
    jobPlace = models.CharField(max_length=20)# 求职地
    experienceRequire = models.CharField(max_length=20)# 工作经验
    skillRequire = models.CharField(max_length=20)# 技能

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

# 网站表
class website(models.Model):
    url = models.CharField(max_length=50)
    name = models.CharField(max_length=20)

# 进入登陆页面
def land(request):
    return render(request, 'index.html')
# 主页的欢迎界面
def welcome(request):
    return render(request, 'welcome.html')