# -*- coding:utf-8 -*-
"""
@author:kkh
@file:main.py
@time:2018/1/249:24
"""

import sched
import time
import os
from scrapy import cmdline
import redis


# COOKIES_ENABLED设置为false
# cmdline.execute('scrapy startproject logou'.split())
# cmdline.execute('scrapy genspider lagou_new lagou.com'.split())
# cmdline.execute('scrapy crawl lagou_new -a keyword=python -a start_page=1 -a max_allow_page=2'.split())

keyword = 'python'
start_page = 1
max_allow_page = 10  # 往后爬的页数

# TODO(hk): 爬虫管理api
# 运行爬虫（分布式），部署后，主服务器运行run_lagou_start函数，从服务器运行run_lagou_new函数
def run_lagou_start():
    line = 'scrapy crawl lagou_start -a keyword=%s -a start_page=%s -a max_allow_page=%s' % (keyword, str(start_page), str(max_allow_page))
    cmdline.execute(line.split())

def run_lagou_new():
    line = 'scrapy runspider ../lagou/spiders/lagou_new.py'
    cmdline.execute(line.split())

# run_lagou_new()
run_lagou_start()

# 向redis中添加爬虫的初始url
def push_to_redis():
    rds = redis.Redis(host='10.0.0.61', port=6379, db=0)
    url = 'http://www.lagou.com/jobs/positionAjax.json?first=true&pn={}&kd={}'
    redis_key = 'lagou_new:start_urls'
    rds.lpush(redis_key, url.format(str(start_page), keyword))
# 直接操作redis(要修改pn和kd)
# llpush lagou_new:start_urls http://www.lagou.com/jobs/positionAjax.json?first=true&pn=10&kd=php

# push_to_redis()


# scrapyd部署后运行命令
# curl http://127.0.0.1:6800/schedule.json -d project=lagou -d spider=lagou_new -d keyword=php -d start_page=1 -d max_allow_page=5 -d delay=0.1

# TODO(hk): 定时任务
schedule = sched.scheduler(time.time, time.sleep)


# 运行爬虫并传入关键词
def run_spider():
    kw_list = ['php', 'java']  # 关键词
    start_page = 1
    max_allow_page = 3
    for x in kw_list:
        os.system('scrapy crawl lagou_new -a keyword={} -a start_page={} -a max_allow_page={}'.format(x, start_page, max_allow_page))


# 设置运行爬虫的间隔时间
def interval(offset):
    print(time.time())
    run_spider()
    print(time.time())
    schedule.enter(offset, 0, interval, (offset,))
    schedule.run()


if __name__ == '__main__':
    # interval(10)  # 爬虫运行间隔时间（秒）
    pass
