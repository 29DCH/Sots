from django.db import models
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.urls import reverse

class administrator(models.Model):
    username = models.CharField(max_length=10)
    password = models.CharField(max_length=10)

# 检查账号密码
def checks( request):
    admins = administrator()
    admins.username = request.POST['username']
    admins.password = request.POST['password']
    admin_list = administrator.objects.all()
    for i in admin_list:
        # print(i.username,admins.username)
        if (i.username == admins.username) and (i.password == admins.password):
            request.session['username'] = i.username
            # print(i.username, 'xxxxx')
            return redirect( 'main')
    return render(request, 'adminuser/error.html')

# 展示欢迎界面
def welcome(request):
    return render(request, 'welcome.html')

# 跳转到主界面
def show_main(request):
    return render(request, 'main.html')


