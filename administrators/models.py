from django.db import models
from django.http import HttpResponse
from django.shortcuts import render
# Create your models here.
# 进入登陆页面
def land(request):
    return render(request, 'index.html')