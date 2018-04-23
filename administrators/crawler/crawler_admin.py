# -*- coding:utf-8 -*-
"""
@author:kkh
@file:crawl_admin.py
@time:2018/2/2815:14
"""
from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.http import HttpResponse
from django.urls import reverse
import analysis.models as md
import time
# Create your views here.


# 添加爬虫任务的页面
def crawler_index(request):
    infos = md.Website.objects.all()
    return render(request, 'crawler/crawler_admin.html', {'infos': infos})


# 将爬虫初始条件存入数据库
def save_spider_conf(data: dict):
    keyword = data['keyword']
    spider = data['spider']
    start_page = data['start_page']
    max_allow_page = data['max_allow_page']
    start_time = data['start_time']
    conf = md.SpiderConf(starttime=start_time, startPage=start_page, spiderName=spider, keyword=keyword, maxAllowPage=max_allow_page)
    conf.save()


# 获取页面填写的初始条件，存入数据库
def start_spider(request):
    if request.method == 'POST':
        print(request.POST['start_time'])
        data = {
            'project': 'sots',
            'spider': request.POST['spider'],
            'keyword': request.POST['keyword'],
            'start_page': request.POST['start_page'],
            'max_allow_page': request.POST['max_allow_page'],  # 页数,默认爬至最后一页
            'start_time': request.POST['start_time'],
            'interval_time': request.POST['interval_time'],  # 间隔时间（秒为单位）
        }
        # close_spider_timeout = request.POST['close_spider_timeout']  # 多久后关闭（秒为单位）,默认爬完
        if data['max_allow_page'] is None or data['max_allow_page'] is '':
            data['max_allow_page'] = 0
        print(data['keyword'], ';', data['spider'], ';', data['interval_time'], ';', data['max_allow_page'])
        try:
            save_spider_conf(data)
            return HttpResponseRedirect(  # 重定向
                reverse('list_crawler_job')  # 用reverse获取对应的网址
            )
        except Exception as e:
            return HttpResponse(e)


# 删除指定的未开始任务
def end_job(request):
    job_id = request.GET['job_id']
    md.SpiderConf.objects.get(id=job_id).delete()
    return HttpResponseRedirect(  # 重定向
        reverse('list_crawler_job')  # 用reverse获取对应的网址
    )


# 爬虫任务列表
def list_job(request):
    all_data = md.SpiderConf.objects.all()
    print(type(all_data))
    job_list = []
    for data in all_data:
        dic = {
            'id': data.id,
            'spider': data.spiderName,
            'keyword': data.keyword,
            'start_page': '第%d页' % data.startPage,
            'max_allow_page': data.maxAllowPage if data.maxAllowPage > 0 else '所有页',
            'start_time': data.starttime.strftime('%Y-%m-%d %H:%M'),
            'state': '已开始' if time.time() >= data.starttime.timestamp() else '未开始',
        }
        job_list.append(dic)
    print(job_list)
    return render(request, 'crawler/list_job.html', {'job_list': job_list})
