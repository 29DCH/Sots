# -*- coding:utf-8 -*-
"""
@author:kkh
@file:scrapyd_api.py
@time:2018/2/2521:45
"""

import requests
import os
import json

class ScrapydApi:
    baseUrl = 'http://127.0.0.1:6800/'
    daemUrl = 'http://127.0.0.1:6800/daemonstatus.json'
    listproUrl = 'http://127.0.0.1:6800/listprojects.json'
    listspdUrl = 'http://127.0.0.1:6800/listspiders.json?project=%s'
    listspdvUrl = 'http://127.0.0.1:6800/listversions.json?project=%s'
    listjobUrl = 'http://127.0.0.1:6800/listjobs.json?project=%s'
    delspdvUrl = 'http://127.0.0.1:6800/delversion.json'

    # 部署到scrapyd上
    def deploy(self, target, project):
        """
        :param target: 部署名
        :param project: 项目名
        :return:
        """
        os.system('scrapyd-deploy {} -p {}'.format(target, project))

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
        # spider = input('输入spider:')
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

    # curl http://127.0.0.1:6800/daemonstatus.json
    # 查看scrapyd服务器运行状态
    def get_state(self):
        r = requests.get(self.daemUrl)
        return r.text

    # curl http://127.0.0.1:6800/listprojects.json
    # 获取scrapyd服务器上已经发布的工程列表
    def list_project(self):
        r = requests.get(self.listproUrl)
        return r.text

    # if len(json.loads(r.text)["projects"]) > 0:
    #     project = json.loads(r.text)["projects"][0]

    # curl http://127.0.0.1:6800/listspiders.json -d project=myproject
    # 获取scrapyd服务器上名为myproject的工程下的爬虫清单
    def list_spider(self, project):
        # project = input('输入项目名：')
        listspdUrl = self.listspdUrl % project
        r = requests.get(listspdUrl)
        return r.text

    # curl http://127.0.0.1:6800/listversions.json -d project=myproject
    # 获取scrapyd服务器上名为myproject的工程下的各爬虫的版本
    def list_version(self, project):
        listspdvUrl = self.listspdvUrl % project
        r = requests.get(listspdvUrl)
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


if __name__ == '__main__':
    project_name = 'sots'
    job = ''
    scrapyd = ScrapydApi()
    scrapyd.deploy('local', project_name)  # 部署更新
    # print(scrapyd.gproject_nameet_state())
    # print(scrapyd.list_project())
    # print(scrapyd.list_spider(project_name))
    # print(scrapyd.list_job(project_name))
    # 调用爬虫
    run_stat = scrapyd.start_spider(project_name, 'lagou_new', 'python', max_allow_page=3, delay=0.5)
    # print(run_stat)

    job_list = scrapyd.list_job(project_name)
    print(job_list)
    # print(json.loads(run_stat)['jobid'])
