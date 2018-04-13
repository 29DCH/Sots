import json
import os
from datetime import datetime
from pickle import loads, dumps
from threading import Thread
from time import sleep
from urllib.parse import unquote

import async as async
import pandas as pd
import redis
from django.utils.timezone import now

from analysis.tools import hbase_tool

from analysis import analysis
from analysis.tools import csv_conf
from analysis.tools.csv_conf import datapath, didatapath
from analysis.models import Job, Company, SpiderConf, AnalysisConf, DigitizedJob
from analysis.scrapyd_api import ScrapydApi
from analysis.tools.default_values import defaults
from analysis.tools.hbase_tool import getalljobid
from analysis.tools.persistence_data_handel import persistence_origindata, persistence_digitizeddata


def getjsjob(jsjob):
    job = Job(keyword=jsjob['keyword'], jobId=jsjob['jobId'], JobName=jsjob['jobName'], JobPlace=jsjob['jobPlace'],
              JobSalary=jsjob['jobSalary'], JobAdvantage=jsjob['jobAdvantage'], releaseTime=jsjob['releaseTime'],
              educationRequire=jsjob['educationRequire'], experienceRequire=jsjob['experienceRequire'],
              jobNature=jsjob['jobNature'], jobLabels=jsjob['jobLabels'], jobLink=jsjob['jobLink'],
              jobInfo=jsjob['jobInfo'], company_id=jsjob['compId'])
    return job


def getjscompany(jscompany):
    company = Company(companyId=jscompany['compId'], compSize=jscompany['compSize'], companyLabels=
    jscompany['compLabels'], companyLogo=jscompany['compLogo'], compHome=jscompany['compHome'], compIndustry=
                      jscompany['compIndustry'], compIntroduce='', compLink=jscompany['compLink'],
                      compName=jscompany['compName'],
                      contactInfo='', longitude=jscompany['longitude'], latitude=jscompany['latitude'], businessZones=
                      jscompany['businessZones'], financeStage=jscompany['financeStage'])
    return company


# jobId	jobName	jobPlace	jobSalary	jobAdvantage	releaseTime	jobNeed	educationRequire	experienceRequire
# skillRequire	jobLink	jobInfo	jobNature	jobLabels	companyId	compName	compSize	compIndustry
# companyLabels	compLink	compIntroduce	contactInfo	longitude	latitude	businessZones	compHome
# companyLogo	financeStage
def getcolumnsname():
    columnsname = {'jobId', 'jobName', 'jobPlace', 'jobSalary', 'jobAdvantage', 'releaseTime', 'jobNeed',
                   'educationRequire', 'experienceRequire', 'skillRequire', 'jobLink', 'jobInfo', 'jobNature',
                   'jobLabels', 'companyId', 'compName', 'compSize', 'compIndustry', 'companyLabels', 'compLink',
                   'compIntroduce', 'contactInfo', 'longitude', 'latitude', 'businessZones', 'compHome',
                   'companyLogo', 'financeStage', 'keyword'}
    return columnsname


def getvalue(jandc, key):
    try:
        value = jandc[key]
    except KeyError:
        print('nokey :', key, 'return ', defaults[key])
        return defaults[key]
    return value


def getkeyword(jandc, keyword):
    try:
        kw = unquote(jandc[keyword])
    except KeyError:
        return 'java'
    return kw


def getrow(jandc):
    try:
        row = {'jobId': getvalue(jandc, 'jobId'), 'jobName': getvalue(jandc, 'jobName'),
               'jobPlace': getvalue(jandc, 'jobPlace'), 'jobSalary':
                   getvalue(jandc, 'jobSalary'), 'jobAdvantage': getvalue(jandc, 'jobAdvantage'),
               'releaseTime': getvalue(jandc, 'releaseTime'), 'jobNeed':
                   getvalue(jandc, 'jobNeed'), 'educationRequire': getvalue(jandc, 'educationRequire'),
               'experienceRequire': getvalue(jandc, 'experienceRequire'),
               'skillRequire': '', 'jobLink': getvalue(jandc, 'jobLink'), 'jobInfo': getvalue(jandc, 'jobInfo'),
               'jobNature': '',
               'jobLabels': getvalue(jandc, 'jobLabels'), 'companyId': getvalue(jandc, 'compId'),
               'compName': getvalue(jandc, 'compName'), 'compSize':
                   getvalue(jandc, 'compSize'), 'compIndustry': getvalue(jandc, 'compIndustry'),
               'companyLabels': getvalue(jandc, 'compLabels'),
               'compLink': getvalue(jandc, 'compLink'), 'compIntroduce': '', 'contactInfo': '',
               'longitude': getvalue(jandc, 'longitude'),
               'latitude': getvalue(jandc, 'latitude'), 'businessZones': getvalue(jandc, 'businessZones'),
               'compHome': getvalue(jandc, 'compHome'),
               'companyLogo': getvalue(jandc, 'compLogo'), 'financeStage': getvalue(jandc, 'financeStage'),
               'keyword': getkeyword(jandc, 'keyword')}
    except KeyError as e:
        print(e)
        return None
    return row


def get_insertjobtupple(row):
    # jobId, JobName, JobPlace, JobSalary, JobAdvantage, releaseTime, jobNeed, educationRequire, experienceRequire,
    # skillRequire, jobLink, jobInfo, jobNature, jobLabels, company_id, clicktimes, keyword
    job = []

    job.append(int(row['jobId']))
    job.append(str(row['jobName']))
    job.append(str(row['jobPlace']))
    job.append(str(row['jobSalary']))
    job.append(str(row['jobAdvantage']))
    job.append(str(row['releaseTime']))
    job.append(str(row['jobNeed']))
    job.append(str(row['educationRequire']))
    job.append(str(row['experienceRequire']))
    job.append(str(row['skillRequire']))
    job.append(str(row['jobLink']))
    job.append(str(row['jobInfo']))
    job.append(str(row['jobNature']))
    job.append(str(row['jobLabels']))
    job.append(int(row['companyId']))
    job.append(str(row['keyword']))

    return job


def get_insertcomptupple(row):
    # companyId, compName, compSize, compIndustry, companyLabels, compLink, compIntroduce, contactInfo, longitude,
    # latitude, businessZones, compHome, companyLogo, financeStage
    comp = []

    '''
    '''

    comp.append(int(row['companyId']))
    comp.append(str(row['compName']))
    comp.append(str(row['compSize']))
    comp.append(str(row['compIndustry']))
    comp.append(str(row['companyLabels']))
    comp.append(str(row['compLink']))
    comp.append(str(row['compIntroduce']))
    comp.append(str(row['contactInfo']))
    comp.append(0.0)
    comp.append(0.0)
    comp.append(str(row['businessZones']))
    comp.append(str(row['compHome']))
    comp.append(str(row['companyLogo']))
    comp.append(str(row['financeStage']))

    return comp


def getredissize():
    r = redis.Redis()
    keys = r.keys(r"*:items")
    size = 0
    for name in keys:
        size += r.llen(name)
    return size


def operations():
    r = redis.Redis()
    keys = r.keys(r'*:items')
    try:
        oldjobidset = getalljobid()
    except BrokenPipeError as e:
        print("Broken pipe try again : ", e.strerror)
        return

    starttime = now()
    count = 0
    for name in keys:
        len = r.llen(name)
        tmplist = r.lrange(name, 0, len)
        count += len

        for job in tmplist:
            jsjob = json.loads(job)
            r.lrem(name, job)
            if jsjob is not None:
                row = getrow(jsjob)
                newId = row['jobId']
                if int(newId) in oldjobidset:
                    pass
                else:
                    # print('new job', newId)
                    hcomp = get_insertcomptupple(row)
                    hjob = get_insertjobtupple(row)
                    try:
                        hbase_tool.insert_job(hjob)
                        hbase_tool.insert_company(hcomp)
                    except BrokenPipeError as e:
                        print(e.strerror)
                        return
    # TODO 独立出来一个模块
    # analysis.handle(path, allkey)
    endtime = now()
    print("insert", count, "'s rows cost", (endtime - starttime))


def ontime_persistencer():
    while True:
        jobhbsize = hbase_tool.count_job()
        jobdb_size = Job.objects.count()
        print("job : ", jobdb_size, " : ", jobhbsize)
        if jobdb_size + 50 < jobhbsize:
            print('db_size ', jobdb_size, 'hb_size', jobhbsize, 'start insert')
            # 阻塞阻塞阻塞
            persistence_origindata()
        else:
            print('no job')
        djobdb_size = DigitizedJob.objects.count()
        djobhbsize = hbase_tool.count_djob()
        if djobdb_size + 50 < djobhbsize:
            print('db_size ', djobdb_size, 'hb_size', djobhbsize, 'start insert')
            persistence_digitizeddata()
        else:
            print('no djob')
        sleep(60)


def spider_runner(spidername: str, keyword: str, start_page: str, maxpage: str):
    spiderapi = ScrapydApi('localhost')
    project_name = 'sots'

    print('start spider', spidername, 'keyword', keyword)
    run_stat = spiderapi.run_master_spider(project_name, spidername, keyword, start_page=start_page,
                                           max_allow_page=maxpage)
    print(json.loads(run_stat))
    # 启动爬虫或每隔一段时间向scrapyd服务端发送请求   看有没有正在运行的任务  当所有任务结束时开始文件操作和数据库操作


def ontime_analysis():
    while True:
        cachesize = getredissize()
        print("cache size ： ", cachesize)
        if cachesize < 50:
            print("cache size is too small, wait for 10 second")
            sleep(10)
        else:
            operations()
            sleep(10)


# 考虑一个配置文件和一个对应的表
def ontime_spider():
    datetime.astimezone(datetime.now())
    while True:
        # 获取数据库配置
        conf = SpiderConf.objects.all()
        for con in conf:
            schetime = con.starttime
            scheyear = schetime.year
            schemonth = schetime.month
            scheday = schetime.day
            schehour = schetime.hour
            scheminute = schetime.minute

            now = datetime.now()
            nowyear = now.year
            nowmonth = now.month
            nowday = now.day
            nowhour = now.hour
            nowminute = now.minute
            nowsecond = now.second
            print('scrapy schetime: ', schehour, ':', scheminute, ' now ', nowhour, ':', nowminute)
            if nowyear == scheyear and nowmonth == schemonth and nowday == scheday and \
                    nowhour == schehour and nowminute == scheminute:
                print('ok ', nowhour, '：', scheminute)
                spider_runner(con.spiderName, con.keyword, con.startPage, con.maxAllowPage)
                print('开始扒取')
        sleep(60)


def ontime_handel():
    while(True):
        djobhbsize = hbase_tool.count_djob()
        jobhbsize = hbase_tool.count_job()
        if djobhbsize + 50 < jobhbsize:
            analysis.handle()
        sleep(60)



def ontime_countwords():
    while(True):
        jobhbsize = hbase_tool.count_job()
        jobdb_size = Job.objects.count()
        if jobdb_size + 50 < jobhbsize:
            analysis.count_words()
        sleep(60)


def scheduler():
    # spider_thread = Thread(target=ontime_spider, name='ontime_spider')
    # spider_thread.start()
    # analysis_thread = Thread(target=ontime_analysis, name='ontime_analysis')
    # analysis_thread.start()
    # handle_thread = Thread(target=ontime_handel, name='ontime_handel')
    # handle_thread.start()
    # handle_thread = Thread(target=ontime_countwords, name='ontime_countwords')
    # handle_thread.start()
    persistence_thread = Thread(target=ontime_persistencer, name='ontime_persistencer')
    persistence_thread.start()
#

if __name__ == '__main__':
    # ontime_spider(16, 9)
    # spader_runner()
    operations()
