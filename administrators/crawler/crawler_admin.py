# -*- coding:utf-8 -*-
"""
@author:kkh
@file:crawl_admin.py
@time:2018/2/2815:14
"""
from django.shortcuts import render
from administrators.crawler.crawler_utils.scrapyd_api import ScrapydApi
from administrators.crawler.crawler_utils.redis_api import RedisAPI
from administrators.crawler.crawler_utils.trans_spider_and_site import trans
from administrators.crawler.crawler_utils import trans_date
from django.http import HttpResponseRedirect
from django.http import HttpResponse
from django.urls import reverse
import json
import time
# Create your views here.


def crawler_index(request):
    return render(request, 'crawler/crawler_admin.html')


def start_spider(request):
    if request.method == 'POST':
        project = 'sots'
        spider = request.POST['spider']
        keyword = request.POST['keyword']
        start_page = request.POST['start_page']
        max_allow_page = request.POST['max_allow_page']  # 最大允许页码,默认爬至最后一页
        # close_spider_timeout = request.POST['close_spider_timeout']  # 多久后关闭（秒为单位）,默认爬完
        interval_time = request.POST['interval_time']  # 间隔时间（秒为单位）
        if max_allow_page is None or max_allow_page is '':
            max_allow_page = 0
        scrapyd = ScrapydApi()
        print(spider, ';', keyword, ';', interval_time, ';', max_allow_page)
        statu = scrapyd.start_spider(project, spider, keyword, start_page=start_page, max_allow_page=max_allow_page)
        print(statu)
        dict_statu = json.loads(statu)
        if dict_statu['status'] == 'ok':
            reds = RedisAPI()
            # 将jobid与搜索关键字作为键值对存入redis
            reds.set_key(dict_statu['jobid'], keyword)
            return HttpResponseRedirect(  # 重定向
                reverse('list_crawler_job')  # 用reverse获取对应的网址
            )
        else:
            HttpResponse(request, 'error:'+statu)


def end_job(request):
    project = 'sots'
    job_id = request.GET['job_id']
    scrapyd = ScrapydApi()
    print(scrapyd.stop_spider(project, job_id))
    return HttpResponse('ok')


# 爬虫任务列表
def list_job(request):
    project = 'sots'
    scrapyd = ScrapydApi()
    redis_use = RedisAPI()
    job_list = json.loads(scrapyd.list_job(project))

    # 数据处理：运行中的爬虫列表
    for i in job_list['running']:
        i['keyword'] = redis_use.get_value(i['id'])     # 显示keyword
        i['count'] = redis_use.get_len_by_id(i['spider'], i['id'])  # 统计该爬虫的数据量
        i['start_time'] = trans_date.to_normal(i['start_time'])  # 将时间格式成‘年月日时分秒’
        i['spider'] = trans(i['spider'])  # 将爬虫名转换为网站名，便于展示,在i['count']修改之后再转换
        # 计算爬虫的平均速度(取整)
        # 数据量/(当前时间-开始时间)
        speed = i['count'] / (int(time.time()) - trans_date.to_time_stamp(i['start_time']))
        i['speed'] = float('%.2f' % speed)

    # 数据处理：已完成的爬虫列表
    for i in job_list['finished']:
        i['keyword'] = redis_use.get_value(i['id'])
        i['count'] = redis_use.get_len_by_id(i['spider'], i['id'])
        i['start_time'] = trans_date.to_normal(i['start_time'])
        i['spider'] = trans(i['spider'])  # 将爬虫名转换为网站名，便于展示,在i['count']修改之后再转换
        i['end_time'] = trans_date.to_normal(i['end_time'])
        # 数据量/(结束时间-开始时间)
        speed = i['count'] / (trans_date.to_time_stamp(i['end_time']) - trans_date.to_time_stamp(i['start_time']))
        i['speed'] = float('%.2f' % speed)
    return render(request, 'crawler/list_job.html', {'job_list': job_list})

