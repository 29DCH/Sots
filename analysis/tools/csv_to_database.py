import csv

import time

import pickle
from django.db import IntegrityError
import redis
from numpy import nan

from analysis.models import Job, DigitizedJob, Company
import pandas as pd

'''
    companyId = models.IntegerField()
    compName = models.CharField(max_length=500)
    compSize = models.CharField(max_length=200)
    compIndustry = models.CharField(max_length=500)
    companyLabels = models.CharField(max_length=500)
    compLink = models.CharField(max_length=500)
    compIntroduce = models.TextField()
    contactInfo = models.CharField(max_length=500)
    longitude = models.FloatField()
    latitude = models.FloatField()
    businessZones = models.CharField(max_length=500)
    compHome = models.CharField(max_length=2000)
    companyLogo = models.CharField(max_length=500)
    financeStage = models.CharField(max_length=200)
    14

'''


def persistence_company(path: str):
    df = pd.read_csv(path)
    rows = df.iterrows()

    setname = 'companys'
    r = redis.Redis()
    list_to_insert = list()
    start_time = time.time()

    size = 0
    for index, row in rows:
        company = Company()
        company.companyId = row[14]
        company.compName = row[15]
        company.compSize = row[16]
        company.compIndustry = row[17]
        company.companyLabels = row[18]
        company.compLink = row[19]
        company.compIntroduce = row[20]
        company.contactInfo = row[21]
        tmp = lambda x: 0 if x != nan else x
        company.longitude = tmp(row[22])
        company.latitude = tmp(row[23])
        company.businessZones = row[24]
        company.compHome = row[25]
        company.companyLogo = row[26]
        company.financeStage = row[27]
        size = index
        r.hset(setname, company.companyId, pickle.dumps(company))

    values = r.hvals(setname)
    print('原大小：', size)
    print('去重后大小：', len(values))

    for val in values:
        company = pickle.loads(val)
        list_to_insert.append(company)
        print(company.compSize)
    Company.objects.bulk_create(list_to_insert)

    r.delete(setname)
    endtime = time.time()
    print('耗时：', (endtime - start_time))


def persistence_job(path: str):
    df = pd.read_csv(path)
    rows = df.iterrows()

    setname = 'jobs'
    r = redis.Redis()
    list_to_insert = list()
    start_time = time.time()
    size = 0

    for index, row in rows:
        companyId = row[14]
        company = Company.objects.get(companyId=companyId)
        job = Job()
        job.company = company
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
        size = index

        r.hset(setname, job.jobId, pickle.dumps(job))
    values = r.hvals(setname)
    print('原大小：', size)
    print('去重后大小：', len(values))

    for val in values:
        djob = pickle.loads(val)
        list_to_insert.append(djob)
    Job.objects.bulk_create(list_to_insert)

    r.delete(setname)
    endtime = time.time()
    print('耗时：', (endtime - start_time))


def persistence_djob(path: str):
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
    r.delete(setname)
    endtime = time.time()

    print('耗时：', (endtime - start_time))


if __name__ == '__main__':
    pass
    # write_job_to_mysql('datas/java_data.csv')
    # write_diJob_to_mysql()
