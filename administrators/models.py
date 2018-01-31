from django.db import models
from django.http import HttpResponse
from django.shortcuts import render
# Create your models here.
# 进入登陆页面
def land(request):
    return render(request, 'index.html')
# 主页的欢迎界面
def welcome(request):
    return render(request, 'welcome.html')