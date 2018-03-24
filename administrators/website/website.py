from django.db import models
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.urls import reverse
import analysis.models as m
import pandas
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

# 展示爬取的网站
def show(request):
   return showNext(request)

def showNext(request):
    if 'flag' not in request.GET.keys():
        flag = '1'
    else:
        flag = request.GET['flag']
        # print('flag='+str(flag))
    if flag == '1':  # 下一页
        # print('xxxxx')
        if 'page' not in request.GET.keys():
            page = 1
        else:
            page = request.GET['page']
            # print('page='+str(page))
            page = int(page) + 1
            # print(page)
    elif flag == '0':  # 上一页
        page = request.GET['page']
        page = int(page) - 1
        # print(page)
        # print(page)
    webs = m.Website.objects.all()
    if webs.count() % 10 == 0:
        pageAll = webs.count() / 10
    else:
        pageAll = int(webs.count() / 10) + 1
    paginator = Paginator(webs, 10)  # Show 25 contacts per page
    try:
        contacts = paginator.page(page)
    except PageNotAnInteger:
        # If page is not an integer, deliver first page.
        contacts = paginator.page(page)
    except EmptyPage:
        # If page is out of range (e.g. 9999), deliver last page of results.
        contacts = paginator.page(paginator.num_pages)
    result = {'webs': webs, 'page': page, 'pageAll': pageAll}
    return render(request, 'website/websiteShow.html', result)

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
    spider = request.POST['spider']
    web = m.Website(name=name, url=url, spider=spider)
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
    spider = request.POST['spider']

    web = m.Website.objects.get(id = id)
    web.name = name
    web.url = url
    web.spider = spider

    web.save()
    return show(request)