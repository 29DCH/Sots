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

# cmdline.execute('scrapy startproject logou'.split())
# cmdline.execute('scrapy genspider lagou_new lagou.com'.split())
cmdline.execute('scrapy crawl lagou_new -a keyword=python -a start_page=1 -a max_allow_page=15 -a delay=0.1'.split())
# COOKIES_ENABLED设置为false

# scrapyd部署后运行命令
# curl http://127.0.0.1:6800/schedule.json -d project=lagou -d spider=lagou_new -d keyword=php -d start_page=1 -d max_allow_page=5 -d delay=0.1



# 定时任务
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
