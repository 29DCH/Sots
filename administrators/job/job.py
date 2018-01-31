from django.db import models
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.urls import reverse

# 职位类
class Job(models.Model):
    # 职位id
    jobId = models.IntegerField()
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