from django.db import models
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.urls import reverse

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
