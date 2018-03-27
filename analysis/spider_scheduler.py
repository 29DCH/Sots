import json
import os
from datetime import datetime
from pickle import loads, dumps
from threading import Thread
from time import sleep
from urllib.parse import unquote

import pandas as pd
import redis

from analysis import analysis
from analysis.tools import csv_conf
from analysis.tools.csv_conf import datapath, didatapath
from analysis.models import Job, Company, SpiderConf, AnalysisConf, DigitizedJob
from analysis.scrapyd_api import ScrapydApi
from analysis.tools.default_values import defaults
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
                   '', 'educationRequire': getvalue(jandc, 'educationRequire'),
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


def operations():
    # 判断文件是否存在
    r = redis.Redis()
    joblist = []
    keys = r.keys(r'*:items')
    rows = []

    for name in keys:
        len = r.llen(name)
        tmplist = r.lrange(name, 0, len)

        for job in tmplist:
            r.lrem(name, job)
            jsjob = json.loads(job)
            if jsjob is not None:
                row = getrow(jsjob)
                rows.append(row)
        joblist.append(tmplist)

    oldjobidset = set()

    # 获取所有职位
    jobids = Job.objects.values_list('jobId')
    for jobid in jobids:
        oldjobidset.add(jobid[0])

    for newrow in rows:
        newId = newrow['jobId']
        if int(newId) in oldjobidset:
            print('old job', newId)
        else:
            print('new job', newId)
            # 加入以关键字为键的redis list
            keyname = newrow['keyword'] + '_new'
            r.hset(keyname, newId, dumps(newrow))
            # r.lpush(keyname, dumps(newrow))
    test()


def test():
    path = 'datas/data.csv'
    ifexists = os.path.exists(path)
    if ifexists:
        frame = pd.read_csv(path, low_memory=False)
        frame = frame[csv_conf.data_columnsname]
    else:
        frame = pd.DataFrame(columns=getcolumnsname())
    print(frame.shape)
    print('old job set size = ', frame.shape[0])

    r = redis.Redis()
    names = r.keys(r'*_new')
    for name in names:
        print(name)
        vals = r.hvals(name)
        for val in vals:
            newrow = loads(val)
            frame.loc[frame.shape[0] + 1] = newrow

    print('new job size : ', frame.shape[0])

    # 获取关键字集合
    allkey = frame['keyword']
    allkey = allkey.drop_duplicates()

    frame.to_csv(path)

    analysis.handle(path, allkey)


def ontime_persistencer():
    # 当本地的数据条数超过数据库固定数量时进行操作
    while True:
        df = pd.read_csv(datapath, low_memory=False)
        csv_size = df.shape[0]
        db_size = Job.objects.count()
        if db_size + 50 < csv_size:
            print('db_size ', db_size, 'csv_size', csv_size, 'start insert')
            # 阻塞阻塞阻塞
            persistence_origindata()

        db_size = DigitizedJob.objects.count()
        csv_size = pd.read_csv(didatapath, low_memory=False).shape[0]
        if db_size + 50 < csv_size:
            print('db_size ', db_size, 'csv_size', csv_size, 'start insert')
            persistence_digitizeddata()
        sleep(60)


def spader_runner(spidername: str, keyword: str, start_page: str, maxpage: str):
    spiderapi = ScrapydApi('localhost')
    project_name = 'sots'

    print('start spider', spidername, 'keyword', keyword)
    run_stat = spiderapi.run_master_spider(project_name, spidername, keyword, start_page=start_page,
                                           max_allow_page=maxpage)
    print(json.loads(run_stat))
    # 启动爬虫或每隔一段时间向scrapyd服务端发送请求   看有没有正在运行的任务  当所有任务结束时开始文件操作和数据库操作


def ontime_analysis():
    while True:
        #  获取数据库的配置时间来启动一个分析线程
        analysis_conf = AnalysisConf.objects.all()[0:1]
        schetime = analysis_conf[0].starttime
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
        print('analysis schetime: ', schehour, ':', scheminute, ' now ', nowhour, ':', nowminute)
        if nowyear ==scheyear and nowmonth==schemonth and  nowday == scheday and\
                nowhour == schehour and nowminute == scheminute:
            thread = Thread(target=operations, name='startanalysis', args=())
            thread.start()
        sleep(60)


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
            if  nowyear ==scheyear and nowmonth==schemonth and  nowday == scheday and\
                    nowhour == schehour and nowminute == scheminute:
                print('ok ', nowhour, '：', scheminute)
                spader_runner(con.spiderName, con.keyword, con.startPage, con.maxAllowPage)
                print('开始扒取')
        sleep(60)


def scheduler():
    spider_thread = Thread(target=ontime_spider, name='ontime_spider')
    spider_thread.start()
    analysis_thread = Thread(target=ontime_analysis, name='ontime_analysis')
    analysis_thread.start()
    persistence_thread = Thread(target=ontime_persistencer, name='ontime_persistencer')
    persistence_thread.start()


if __name__ == '__main__':
    # ontime_spider(16, 9)
    # spader_runner()
    operations()
