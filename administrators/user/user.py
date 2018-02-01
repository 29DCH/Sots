from django.db import models
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.urls import reverse

#用户表
class User(models.Model):
    username = models.CharField(max_length=10)# 用户名
    password = models.CharField(max_length=10)# 密码
    nickname = models.CharField(max_length=10)# 昵称

# 展示用户
def show(request):
    users = User.objects.all()
    return render(request, 'user/userShow.html', {'lists' : users})

# 删除用户
def delete(request):
    uid = request.GET['uid']
    User.objects.get(id=uid).delete()
    return show(request)

# 跳转到添加用户界面
def add(request):
    return  render(request, 'user/userAdd.html')

# 存储用户
def save(request):
    username = request.POST['username']
    nickname = request.POST['nickname']
    password = request.POST['password']
    # print('dddsdsdsdsd')
    # print(username, password, nickname)
    us = User(username=username, nickname=nickname, password=password)
    us.save()
    # print(us.id)
    return show(request)

# 跳转到编辑用户界面
def edit(request):
    uid = request.GET['uid']
    us = User.objects.get(id=uid)
    return render(request, 'user/userEdit.html', {'us' : us})

# 更新用户
def update(request):
    print('sssssss')
    uid = request.POST['uid']
    username = request.POST['username']
    nickname = request.POST['nickname']
    password = request.POST['password']
    # print(uid)
    us = User.objects.get(id=2)
    us.username = username
    us.nickname = nickname
    us.password = password
    us.save()
    return show(request)


