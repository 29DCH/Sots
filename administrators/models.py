from django.db import models
from django.http import HttpResponse
from django.shortcuts import render
# Create your models here.

#用户表
class User(models.Model):
    username = models.CharField(max_length=30)# 用户名
    password = models.CharField(max_length=30)# 密码
    nickname = models.CharField(max_length=30)# 昵称
    settledCity = models.CharField(max_length=300)
    degree = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    gender = models.CharField(max_length=300)
    graduatedSchool = models.CharField(max_length=300)
    graduationYear = models.CharField(max_length=300)
    highestEducation = models.CharField(max_length=300)
    majors = models.CharField(max_length=300)
    name = models.CharField(max_length=300)
    phone = models.CharField(max_length=300)
    workingTime = models.CharField(max_length=300)
    status = models.CharField(max_length=20)

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