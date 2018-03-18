from django.db import models
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.urls import reverse
import analysis.models as m
import pandas

# 展示爬取的网站
def show(request):
    webs = m.Website.objects.all()
    return render(request, 'website/websiteShow.html', {'webs' : webs})

# 删除需要爬取的网站
def delete(request):
    wid = request.GET['wid']
    m.Website.objects.get(id = wid).delete()
    return show(request)

# 设置需要爬取的网站
def add(request):
    return render(request, 'website/websiteAdd.html')

# 存储需要爬取的网站
def save(request):
    name = request.POST['name']
    url = request.POST['url']
    web = m.website(name=name, url=url)
    web.save()
    return show(request)

# 进入编辑网站的页面
def edit(request):
    wid = request.GET['wid']
    web = m.Website.objects.get(id=wid)
    return render(request, 'website/websiteEditor.html', {'web': web})

# 更新网站
def update(request):
    id = request.POST['id']
    name = request.POST['name']
    url = request.POST['url']

    web = m.Website.objects.get(id = id)
    web.name = name
    web.url = url

    web.save()
    return show(request)