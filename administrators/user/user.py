from django.db import models
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.urls import reverse
import administrators.models as m
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

# 展示用户
def show(request):
    return showNext(request)

def showNext(request):
    if 'flag' not in request.GET.keys():
        flag = '1'
    else:
        flag = request.GET['flag']
    if flag == '1':  # 下一页
        if 'page' not in request.GET.keys():
            page = 1
        else:
            page = request.GET['page']
            page = int(page) + 1
    elif flag == '0':  # 上一页
        page = request.GET['page']
        page = int(page) - 1

    users = m.User.objects.all()
    if users.count() % 10 == 0:
        pageAll = users.count() / 10
    else:
        pageAll = int(users.count() / 10) + 1
    paginator = Paginator(users, 10)  # Show 25 contacts per page
    try:
        contacts = paginator.page(page)
    except PageNotAnInteger:
        # If page is not an integer, deliver first page.
        contacts = paginator.page(page)
    except EmptyPage:
        # If page is out of range (e.g. 9999), deliver last page of results.
        contacts = paginator.page(paginator.num_pages)
    result = {'lists': users, 'page': page, 'pageAll': pageAll}
    return render(request, 'user/userShow.html', result)

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


