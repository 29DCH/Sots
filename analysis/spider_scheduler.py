from datetime import datetime
from threading import Thread
from time import sleep, time
import json
from pickle import loads, dumps

import pandas
import redis

from analysis.models import Job, Company, SpiderConf

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


def spader_runner():
    spiderapi = ScrapydApi()
    project_name = 'sots'
    # 如果还有爬虫在运行  不予执行  即"pending": [], "running": [],
    joblist = spiderapi.list_job(project_name)
    joblist = json.loads(joblist)

    if len(joblist['pending']) > 0 or len(joblist['running']) > 0:
        return 'error'

    spiders = SpiderConf.objects.all()  # 获取所有爬虫配置并启动
    for spider in spiders:
        spidername = spider.spiderName
        keyword = spider.keyword
        startpage = spider.startPage
        maxpage = spider.maxAllowPage
        print('start spider', spidername, 'keyword', keyword)
        res = spiderapi.start_spider(project_name, spidername, keyword, start_page=startpage, max_allow_page=maxpage)
        print('res : ', res)
    # 启动爬虫或每隔一段时间向scrapyd服务端发送请求   看有没有正在运行的任务  当所有任务结束时开始文件操作和数据库操作
    while True:
        joblist = spiderapi.list_job(project_name)
        joblist = json.loads(joblist)

        print(datetime.time(datetime.now()), ' request ', joblist)
        if len(joblist['running']) == 0 and len(joblist['pending']) == 0:
            break
        sleep(30)

    # TODO redis文件数据库操作
    operations()


# 1：先从数据库获取全部相同关键字的所有职位  然后和爬虫扒取的职位比较去重  然后分别存数据库和csv
# 2：将扒取的数据每一条查询一次数据库看是否已经存在  然后将不存在的集合分别存数据库和csv
# 3：从数据库中获取全部相同关键字的职位  然后将所有jobid存入一个set  然后将爬虫扒取的职位的id不在set里面的分别存数据库和csv
def operations():
    starttime = time()

    r = redis.Redis()
    keys = r.keys()
    for key in keys:
        print(key)
    name = 'lagou_new:items'
    len = r.llen(name)
    jobsfromredis = []
    companysfromredis = []
    joblist = r.lrange(name, 0, len)
    for job in joblist:
        jsjob = json.loads(job)
        print(jsjob)
        job = getjsjob(jsjob)
        company = getjscompany(jsjob)
        jobsfromredis.append(job)
        companysfromredis.append(company)
    endtime = time()

    newcompname = 'newcomp'
    newjobname = 'newjob'
    companystoinsert = []  # 用于保存新company
    jobstoinsert = []  # 用于保存新job
    oldcompanyidset = set()
    oldjobidset = set()
    oldcompanylist = []
    oldjoblist = []

    # 获取所有公司
    companys = Company.objects.all()  # TODO 尝试set相减

    for company in companys:
        oldcompanylist.append(company)
        oldcompanyidset.add(company.companyId)
    print('old company set size = ', oldcompanyidset.__len__())

    for newcompany in companysfromredis:
        newId = newcompany.companyId
        if int(newId) in oldcompanyidset:
            print('old com', newId)
        else:
            print('new com', newId)
            r.hset(newcompname, newId, dumps(newcompany))
    print('new company size : ', companystoinsert.__len__())

    # 获取所有职位
    jobs = Job.objects.all()
    for job in jobs:
        oldjobidset.add(job.jobId)
        oldjoblist.append(job)

    print('old job set size = ', oldjobidset.__len__())
    for newjob in jobsfromredis:
        newId = newjob.jobId
        if int(newId) in oldjobidset:
            print('old job', newId)
        else:

            print('new job', newId)
            r.hset(newjobname, newId, dumps(newjob))
    print('new job size : ', jobstoinsert.__len__())

    # 取出去重后的新数据  并插入旧的list用于生成新的csv
    newjobs = r.hvals(newjobname)
    newcompanys = r.hvals(newcompname)
    for job in newjobs:
        jobstoinsert.append(loads(job))
    for company in newcompanys:
        companystoinsert.append(loads(company))

    # 批量插入新数据
    Job.objects.bulk_create(jobstoinsert)
    Company.objects.bulk_create(companystoinsert)

    # TODO 插入新数据后不需要重新查询  之前的旧数据后面加上新数据更新csv即可



    print('cost : ', endtime - starttime)


# TODO 写个接口让这个函数以线程的形式调用  在接口中完成各种约束
# TODO 爬虫定时任务及扒取完后的操作
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
        print('schetime: ', schehour, ':', scheminute, ' now ', nowhour, ':', nowminute)
        if nowhour == schehour and nowminute == scheminute:
            print('ok ', nowhour, '：', scheminute)
            thread = Thread(target=spader_runner, name='worker', args=())  # TODO 需要修改为按关键字列表批量启动
            print('开始扒取')
            thread.start()
        sleep(60)


def scheduler():
    thread = Thread(target=ontime_spider, name='scheduler')
    thread.start()


if __name__ == '__main__':
    # ontime_spider(16, 9)
    # spader_runner()
    operations()
