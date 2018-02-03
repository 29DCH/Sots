from django.db import models
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.urls import reverse
import administrators.models as m
import pandas

# 展示爬取的网站
def show(request):
    webs = m.website.objects.all()
    return render(request, 'website/websiteShow.html', {'webs' : webs})

# 设置需要爬取的网站
def setWebiste(request):
    webs = m.website.objects.all()
    return render(request, 'website/websiteSet.html',  {'webs' : webs})

# 提交需要爬取的网站
def websiteSet(request):
    webs = request.POST.getlist('web')

    print(webs)
    li = []
    for web in webs:
        print(web)
        # li.append(web.name).
    # print(li)
    # request.session['webs'] = li

    return show(request)