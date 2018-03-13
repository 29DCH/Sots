from datetime import datetime
from threading import Thread
from time import sleep, time
import json
from pickle import loads, dumps

import os
from urllib.parse import unquote

import pandas as pd
import redis

from analysis import analysis, csv_conf
from analysis.models import Job, Company, SpiderConf, AnalysisConf

from analysis.scrapyd_api import ScrapydApi


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


def getrow(jandc):
    row = {'jobId': jandc['jobId'], 'jobName': jandc['jobName'], 'jobPlace': jandc['jobPlace'], 'jobSalary':
        jandc['jobSalary'], 'jobAdvantage': jandc['jobAdvantage'], 'releaseTime': jandc['releaseTime'], 'jobNeed':
               '', 'educationRequire': jandc['educationRequire'], 'experienceRequire': jandc['experienceRequire'],
           'skillRequire': '', 'jobLink': jandc['jobLink'], 'jobInfo': jandc['jobInfo'],
           'jobNature': jandc['jobNature'],
           'jobLabels': jandc['jobLabels'], 'companyId': jandc['compId'], 'compName': jandc['compName'], 'compSize':
               jandc['compSize'], 'compIndustry': jandc['compIndustry'], 'companyLabels': jandc['compLabels'],
           'compLink': jandc['compLink'], 'compIntroduce': '', 'contactInfo': '', 'longitude': jandc['longitude'],
           'latitude': jandc['latitude'], 'businessZones': jandc['businessZones'], 'compHome': jandc['compHome'],
           'companyLogo': jandc['compLogo'], 'financeStage': jandc['financeStage'], 'keyword': unquote(jandc['keyword']), }

    return row


def operations():
    # 判断文件是否存在
    r = redis.Redis()

    name = 'lagou_new:items'
    len = r.llen(name)
    rows = []
    joblist = r.lrange(name, 0, len)

    for job in joblist:
        r.lrem(name, job)  # 从缓存中移除已经获取的jobODO
        jsjob = json.loads(job)
        rows.append(getrow(jsjob))

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
        frame = pd.read_csv(path)
        frame = frame[csv_conf.data_columnsname]
    else:
        frame = pd.DataFrame(getcolumnsname())
    print(frame.shape)
    print('old job set size = ', frame.shape[0])

    r = redis.Redis()
    names  = r.keys(r'*_new')
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

    print(allkey)

    frame.to_csv(path)

    analysis.handle(path, allkey)


def spader_runner(spidername:str, keyword:str, start_page:str, maxpage:str):
    spiderapi = ScrapydApi('localhost')
    project_name = 'sots'
    joblist = spiderapi.list_job(project_name)
    joblist = json.loads(joblist)

    print('start spider', spidername, 'keyword', keyword)
    run_stat = spiderapi.run_master_spider(project_name, 'lagou_start', keyword, start_page=start_page,
                                           max_allow_page=maxpage)
    print(json.loads(run_stat))
    # 启动爬虫或每隔一段时间向scrapyd服务端发送请求   看有没有正在运行的任务  当所有任务结束时开始文件操作和数据库操作


def ontime_analysis():
    spiderapi = ScrapydApi('localhost')
    project_name = 'sots'
    while True:
        joblist = spiderapi.list_job(project_name)
        joblist = json.loads(joblist)

        print(datetime.time(datetime.now()), ' request ', joblist)
        #  获取数据库的配置时间来启动一个分析线程
        analysis_conf = AnalysisConf.objects.all()[0:1]
        schetime = analysis_conf[0].starttime
        schehour = schetime.hour
        scheminute = schetime.minute
        now = datetime.now()
        nowhour = now.hour
        nowminute = now.minute
        print('analysis schetime: ', schehour, ':', scheminute, ' now ', nowhour, ':', nowminute)
        if nowhour == schehour and nowminute == scheminute:
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
            schehour = schetime.hour
            scheminute = schetime.minute

            now = datetime.now()
            nowhour = now.hour
            nowminute = now.minute
            nowsecond = now.second
            print('scrapy schetime: ', schehour, ':', scheminute, ' now ', nowhour, ':', nowminute)
            if nowhour == schehour and nowminute == scheminute:
                print('ok ', nowhour, '：', scheminute)
                spader_runner(con.spiderName, con.keyword, con.startPage, con.maxAllowPage)
                print('开始扒取')
        sleep(60)


def scheduler():
    thread = Thread(target=ontime_spider, name='ontime_spider')
    thread.start()
    thread2 = Thread(target=ontime_analysis, name='ontime_analysis')
    thread2.start()


if __name__ == '__main__':
    # ontime_spider(16, 9)
    # spader_runner()
    operations()
