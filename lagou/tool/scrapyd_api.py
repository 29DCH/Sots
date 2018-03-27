# -*- coding:utf-8 -*-
"""
@author:kkh
@file:scrapyd_api.py
@time:2018/2/2521:45
"""

import os

import requests


# 将一个项目部署到scrapyd上,多个地址
def deploy(project, target_list=('',)):
    """
    :param target_list: 部署名列表
    :param project: 项目名
    :return:
    """
    for target in target_list:
        os.system('scrapyd-deploy {} -p {}'.format(target, project))


class ScrapydApi:
    # baseUrl = 'http://127.0.0.1:6800/'
    # 传入主机号，操作部署在不同主机上的项目
    def __init__(self, host):
        self.host = host
        self.baseUrl = 'http://' + host + ':6800/'
        self.daemUrl = self.baseUrl + 'daemonstatus.json'
        self.listproUrl = self.baseUrl + 'listprojects.json'
        self.listspdUrl = self.baseUrl + 'listspiders.json?project=%s'
        self.listspdvUrl = self.baseUrl + 'listversions.json?project=%s'
        self.listjobUrl = self.baseUrl + 'listjobs.json?project=%s'
        self.delspdvUrl = self.baseUrl + 'delversion.json'

    # schedule.json
    # curl http://127.0.0.1:6800/schedule.json -d project=myproject -d spider=myspider
    # 启动scrapyd服务器上myproject工程下的myspider爬虫，使myspider立刻开始运行，注意必须以post方式
    def start_spider(self, project, spider, keyword, start_page=1, max_allow_page=0, delay=0.1):
        """
        :param project: 项目名
        :param spider: 爬虫名
        :param keyword: 要爬取的关键字
        :param start_page: 开始页
        :param max_allow_page: 最多允许爬取的页数，0表示爬完为止
        :param delay: 延迟时间
        :return:
        """
        schUrl = self.baseUrl + 'schedule.json'
        dictdata = {
            "project": project,
            "spider": spider,
            "keyword": keyword,
            "start_page": start_page,
            "max_allow_page": max_allow_page,
            "delay": delay,
        }
        r = requests.post(schUrl, data=dictdata)

        # url = 'http://www.lagou.com/jobs/positionAjax.json?first=true&pn={}&kd={}'
        # rds = redis.Redis(host='localhost', port=6379, db=0)
        # rds.lpush('lagou_new:start_urls', url.format(str(start_page), keyword))
        return r.text

    # 停止爬虫任务
    def stop_spider(self, project, job_id):
        """
        :param project: 项目名
        :param job_id: 爬虫任务id
        :return:
        """
        stop_url = self.baseUrl + 'cancel.json'
        dictdata = {
            'project': project,
            'job': job_id
        }
        r = requests.post(stop_url, data=dictdata)
        return r.text

    # curl http://127.0.0.1:6800/listprojects.json
    # 获取scrapyd服务器上已经发布的工程列表
    def list_project(self):
        r = requests.get(self.listproUrl)
        return r.text

    # curl http://127.0.0.1:6800/listspiders.json -d project=myproject
    # 获取scrapyd服务器上名为myproject的工程下的爬虫清单
    def list_spider(self, project):
        # project = input('输入项目名：')
        listspdUrl = self.listspdUrl % project
        r = requests.get(listspdUrl)
        return r.text

    # curl http://127.0.0.1:6800/listjobs.json -d project=myproject
    # 获取scrapyd服务器上的所有任务清单，包括已结束，正在运行的，准备启动的。
    def list_job(self, project):
        listjobUrl = self.listjobUrl % project
        r = requests.get(listjobUrl)
        return r.text

    # curl http://127.0.0.1:6800/delproject.json -d project=myproject
    # 删除scrapyd服务器上myproject工程，注意该命令会自动删除该工程下所有的spider，注意必须以post方式
    def del_project(self, project):
        delProUrl = self.baseUrl + 'delproject.json'
        dictdata = {"project": project}
        r = requests.post(delProUrl, data=dictdata)
        return r.text

    # curl http://127.0.0.1:6800/daemonstatus.json
    # 查看scrapyd服务器运行状态
    def get_state(self):
        r = requests.get(self.daemUrl)
        return r.text

    # 主服务器的爬虫，根据输入的信息抓取url放入redis的初始队列中
    def run_master_spider(self, project, spider, keyword, start_page=1, max_allow_page=0):
        """
        :param project: 项目名
        :param spider: 爬虫名
        :param keyword: 要爬取的关键字
        :param start_page: 开始页
        :param max_allow_page: 最多允许爬取的页数，0表示爬完为止
        :return: log信息
        """
        schUrl = self.baseUrl + 'schedule.json'
        dictdata = {
            "project": project,
            "spider": spider,
            "keyword": keyword,
            "start_page": start_page,
            "max_allow_page": max_allow_page,
        }
        r = requests.post(schUrl, data=dictdata)
        return r.text

    # 从服务器的爬虫，从redis的初始队列取出url爬取并解析
    def run_slave_spider(self, project, spider):
        """
        :param project: 项目名
        :param spider: 爬虫名
        :return: log信息
        """
        schUrl = self.baseUrl + 'schedule.json'
        dictdata = {
            "project": project,
            "spider": spider,
        }
        r = requests.post(schUrl, data=dictdata)
        return r.text


# TODO(hk): 测试发布分布式爬虫并修改相关操作的函数
if __name__ == '__main__':
    project_name = 'sots'
    kword = 'php'
    targets = [
        'local',
        # 'slave01',
    ]
    deploy(project_name, targets)  # 部署到scrapyd

    # 根据scrapy.cfg查看对应关系
    # scrapyd_master = ScrapydApi('localhost')  # local的地址对应localhost
    # scrapyd_slave_01 = ScrapydApi('192.168.71.143')  # slave01对应192.168.71.143

    # master端爬虫, 可多次执行run_master_spider函数,修改kword、start_page、max_allow_page等生成不同的url
    # run_stat = scrapyd_master.run_master_spider(project_name, 'lagou_start', kword, start_page=15, max_allow_page=5)
    # print(json.loads(run_stat))
    # run_stat = scrapyd_master.run_master_spider(project_name, 'wuyou_first', kword, start_page=15, max_allow_page=5)
    # print(json.loads(run_stat))
    # slave端爬虫,只需调用一次，不会自动关闭
    # run_stat = scrapyd_slave_01.run_slave_spider(project_name, 'lagou_new')
    # print(json.loads(run_stat))
    # run_stat = scrapyd_slave_01.run_slave_spider(project_name, 'wuyou_second')
    # print(json.loads(run_stat))
