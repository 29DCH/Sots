import csv

import time

import pickle
from django.db import IntegrityError
import redis
from analysis.models import Job, DigitizedJob
import pandas as pd

'''
流程：
    1. 爬虫爬取玩完数据之后进行step1更新关键字
    2. 进行step2得出DigitizedJob并将所有csv更新至数据库
    3. 当收到前端提交的预测请求时，执行step3预测,得出预测结果
    
'''


# TODO 改为redis去重的批量插入
def write_job_to_mysql(path:str):
    df = pd.read_csv(path)
    rows = df.iterrows()
    for index, row in rows:
        job = Job()
        job.jobId = row[0]
        job.JobName = row[1]
        job.JobPlace = row[2]
        job.JobSalary = row[3]
        job.JobAdvantage = row[4]
        job.releaseTime = row[5]
        job.jobNeed = row[6]
        job.educationRequire = row[7]
        job.experienceRequire = row[8]
        job.skillRequire = row[9]
        job.jobLink = row[10]
        job.jobInfo = row[11]
        job.jobNature = row[12]
        job.jobLabels = row[13]
        print('save job :', job.jobId)
        try:
            job.save()
        except IntegrityError as e:
            print('添加了重复数据', e.__str__())


def write_diJob_to_mysql(path:str):
    df = pd.read_csv(path)
    rows = df.iterrows()
    '''
    1 jobId
    2 compSize
    3 skill
    4 experience
    5 education
    6 salary
    '''
    setname = 'djobs'
    r = redis.Redis()
    list_to_insert = list()
    start_time = time.time()
    size = 0
    for index, row in rows:
        jobId = row[1]
        job = Job.objects.get(jobId=jobId)
        djob = DigitizedJob()
        djob.Job = job
        djob.compSize = row[2]
        djob.skill = row[3]
        djob.experience = row[4]
        djob.education = row[5]
        djob.salary = row[6]
        size = index
        r.hset(setname, jobId, pickle.dumps(djob))
    values = r.hvals(setname)

    print('原大小：', size)
    print('去重后大小：', len(values))

    for val in values:
        djob = pickle.loads(val)
        list_to_insert.append(djob)
    DigitizedJob.objects.bulk_create(list_to_insert)
    r.hdel(setname)
    endtime = time.time()

    print('耗时：', (endtime - start_time))


if __name__ == '__main__':
    pass
    # write_job_to_mysql('datas/java_data.csv')
    # write_diJob_to_mysql()
