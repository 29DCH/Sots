from datetime import datetime
from threading import Thread
from time import sleep, time
import json
from pickle import loads, dumps

import os
import pandas as pd
import redis

from analysis import analysis
from analysis.models import Job, Company, SpiderConf, AnalysisConf

# TODO 相同的关于公司的操作
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
    columnsname = {'jobId', 'JobName', 'JobPlace', 'JobSalary', 'JobAdvantage', 'releaseTime', 'jobNeed',
                   'educationRequire', 'experienceRequire', 'skillRequire', 'jobLink', 'jobInfo', 'jobNature',
                   'jobLabels', 'companyId', 'compName', 'compSize', 'compIndustry', 'companyLabels', 'compLink',
                   'compIntroduce', 'contactInfo', 'longitude', 'latitude', 'businessZones', 'compHome',
                   'companyLogo', 'financeStage', 'keyword'}
    return columnsname


def getrow(jandc):
    row = {'jobId': jandc['jobId'], 'JobName': jandc['jobName'], 'JobPlace': jandc['jobPlace'], 'JobSalary':
        jandc['jobSalary'], 'JobAdvantage': jandc['jobAdvantage'], 'releaseTime': jandc['releaseTime'], 'jobNeed':
               '', 'educationRequire': jandc['educationRequire'], 'experienceRequire': jandc['experienceRequire'],
           'skillRequire': '', 'jobLink': jandc['jobLink'], 'jobInfo': jandc['jobInfo'],
           'jobNature': jandc['jobNature'],
           'jobLabels': jandc['jobLabels'], 'companyId': jandc['compId'], 'compName': jandc['compName'], 'compSize':
               jandc['compSize'], 'compIndustry': jandc['compIndustry'], 'companyLabels': jandc['compLabels'],
           'compLink': jandc['compLink'], 'compIntroduce': '', 'contactInfo': '', 'longitude': jandc['longitude'],
           'latitude': jandc['latitude'], 'businessZones': jandc['businessZones'], 'compHome': jandc['compHome'],
           'companyLogo': jandc['compLogo'], 'financeStage': jandc['financeStage'], 'keyword': jandc['keyword'], }
    return row

def operations():
    # 判断文件是否存在
    path = 'datas/data.csv'
    ifexists = os.path.exists(path)
    if ifexists:
        frame = pd.read_csv(path)
    else:
        frame = pd.DataFrame(getcolumnsname())
    print('old job set size = ', frame.shape[0])

    starttime = time()
    r = redis.Redis()
    keys = r.keys()
    for key in keys:
        print(key)
    name = 'lagou_new:items'
    # TODO 此时的情况为 到了数据库设定的分析时间  获取redis中的对应队列长度  然后pop对应个数的row得到分析队列(set或者缓存)在之后的操作中进行调用
    len = r.llen(name)
    rows = []
    joblist = r.lrange(name, 0, len)

    # TODO pop出len个数量的job  放入下面list中  之后操作不变
    listname = 'analysis_list'

    for job in joblist:
        jsjob = json.loads(job)
        rows.append(getrow(jsjob))

    endtime = time()

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
            frame.loc[frame.shape[0] + 1] = newrow
            # 加入以关键字为键的redis list
            keyname = newrow['keyword'] + '_new'
            r.lpush(keyname, dumps(newrow))

    print('new job size : ', frame.shape[0])

    frame = frame.drop_duplicates(['jobId'])
    print('job size after duplicates', frame.shape[0])

    # 获取关键字集合
    allkey = frame['keyword']
    allkey = allkey.drop_duplicates()

    print(allkey)

    # TODO 流程完成后取消注释
    # frame.to_csv(path)
    print('cost : ', endtime - starttime)

    # analysis.handle(path, allkey)


def spader_runner():
    spiderapi = ScrapydApi('localhost')
    project_name = 'sots'
    # 如果还有爬虫在运行  不予执行  即"pending": [], "running": [],
    joblist = spiderapi.list_job(project_name)
    joblist = json.loads(joblist)

    # if len(joblist['pending']) > 0 or len(joblist['running']) > 0:
    #     return 'error'

    spiders = SpiderConf.objects.all()  # 获取所有爬虫配置并启动
    for spider in spiders:
        spidername = spider.spiderName
        keyword = spider.keyword
        startpage = spider.startPage
        maxpage = spider.maxAllowPage
        print('start spider', spidername, 'keyword', keyword)
        run_stat = spiderapi.run_master_spider(project_name, 'lagou_start', keyword, start_page=startpage, max_allow_page=maxpage)
        print(json.loads(run_stat))
    # 启动爬虫或每隔一段时间向scrapyd服务端发送请求   看有没有正在运行的任务  当所有任务结束时开始文件操作和数据库操作
    while True:
        joblist = spiderapi.list_job(project_name)
        joblist = json.loads(joblist)

        print(datetime.time(datetime.now()), ' request ', joblist)
        # TODO 获取数据库的配置时间来启动一个分析线程
        analysis_conf = AnalysisConf.objects.all()[0:1]
        schetime = analysis_conf[0].starttime
        schehour = schetime.hour
        scheminute = schetime.minute
        now = datetime.now()
        nowhour = now.hour
        nowminute = now.minute
        print('analysis schetime: ', schehour, ':', scheminute, ' now ', nowhour, ':', nowminute)
        if nowhour == schehour and nowminute == scheminute:
            thread = Thread(target=operations, name='startanalysis', args=())  # TODO 需要修改为按关键字列表批量启动
            thread.start()
        sleep(60)


# TODO 改为只有一个对外调用的接口  不再以时间为基准启动爬虫  而是只启动一次  到每天一定时候运行添加url的爬虫
# 考虑一个配置文件和一个对应的表
def ontime_spider():
    datetime.astimezone(datetime.now())
    while True:
        # 获取数据库配置
        conf = SpiderConf.objects.all()[0:1]
        schetime = conf[0].starttime
        schehour = schetime.hour
        scheminute = schetime.minute

        now = datetime.now()
        nowhour = now.hour
        nowminute = now.minute
        nowsecond = now.second
        print('scrapy schetime: ', schehour, ':', scheminute, ' now ', nowhour, ':', nowminute)
        if nowhour == schehour and nowminute == scheminute:
            print('ok ', nowhour, '：', scheminute)
            thread = Thread(target=spader_runner, name='startspider', args=())  # TODO 需要修改为按关键字列表批量启动
            print('开始扒取')
            thread.start()
        sleep(60)


# TODO 修改:扒取和分析两条线程并行
def scheduler():
    thread = Thread(target=ontime_spider, name='scheduler')
    thread.start()


if __name__ == '__main__':
    # ontime_spider(16, 9)
    # spader_runner()
    operations()
