from django.db import models
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.urls import reverse
import administrators.models as m


# 展示用户
def show(request):
    users = m.User.objects.all()
    return render(request, 'user/userShow.html', {'lists' : users})

# 删除用户
def delete(request):
    uid = request.GET['uid']
    m.User.objects.get(id=uid).delete()
    return show(request)

# 跳转到添加岗位界面
def add(request):
    return  render(request, 'user/userAdd.html')

# 存储用户
def save(request):
    username = request.POST['username']
    nickname = request.POST['nickname']
    password = request.POST['password']
    # print('dddsdsdsdsd')
    # print(username, password, nickname)
    us = m.User(username=username, nickname=nickname, password=password)
    us.save()
    # print(us.id)
    return show(request)

# 跳转到编辑用户界面
def edit(request):
    uid = request.GET['uid']
    us = m.User.objects.get(id=uid)
    return render(request, 'user/userEdit.html', {'us' : us})

# 更新用户
def update(request):
    uid = request.POST['uid']
    username = request.POST['username']
    nickname = request.POST['nickname']
    password = request.POST['password']
    us = m.User.objects.get(id=uid)
    us.username = username
    us.nickname = nickname
    us.password = password
    us.save()
    return show(request)


