import csv
from math import nan

from analysis import  csv_conf
import time

import pickle
from django.db import IntegrityError
import redis

from analysis.models import Job, DigitizedJob, Company
import pandas as pd

# TODO 去重方式需要考虑
def persistence_company(path: str):
    print('insert comp start')
    start_time = time.time()
    oldsize = Job.objects.all()
    start_index = len(oldsize)


    oldcompanyidset = set()
    oldcomps = Company.objects.all()
    for comp in oldcomps:
        oldcompanyidset.add(comp.companyId)

    df = pd.read_csv(path)
    print(df.tail())
    df = df[csv_conf.data_columnsname]
    df = df[start_index:]

    rows = df.iterrows()

    setname = 'companys'
    r = redis.Redis()
    list_to_insert = list()

    for index, row in rows:
        company = Company()
        company.companyId = row[14]
        if company.companyId in oldcompanyidset:
            continue
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
        r.hset(setname, company.companyId, pickle.dumps(company))

    values = r.hvals(setname)
    for val in values:
        company = pickle.loads(val)
        list_to_insert.append(company)
        print(company.compSize)
    Company.objects.bulk_create(list_to_insert)

    r.delete(setname)
    end_time = time.time()
    print('insert comp end costing:', end_time-start_time)


def persistence_job(path: str):
    old_size = Job.objects.all()
    start_index = len(old_size)

    df = pd.read_csv(path)
    print(df.tail())

    df = df[csv_conf.data_columnsname]
    df = df[start_index:]

    rows = df.iterrows()

    list_to_insert = list()
    start_time = time.time()

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
        list_to_insert.append(job)
    Job.objects.bulk_create(list_to_insert)
    print('batch insert job size:', len(list_to_insert))
    endtime = time.time()
    print('耗时：', (endtime - start_time))


def persistence_djob(path: str):
    if path:
        old_size = DigitizedJob.objects.all()
        start_index = len(old_size)

        df = pd.read_csv(path)
        print(df.tail())

        df = df[csv_conf.digital_columnsname]
        df = df[start_index:]
    else:
        return
    rows = df.iterrows()

    list_to_insert = list()
    start_time = time.time()
    for index, row in rows:
        jobId = row[0]
        job = Job.objects.get(jobId=jobId)
        djob = DigitizedJob()
        djob.Job = job
        djob.compSize = row[1]
        djob.skill = row[2]
        djob.experience = row[3]
        djob.education = row[4]
        djob.salary = row[5]
        djob.keyword = row[6]
        list_to_insert.append(djob)

    DigitizedJob.objects.bulk_create(list_to_insert)
    endtime = time.time()

    print('耗时：', (endtime - start_time))


if __name__ == '__main__':
    pass
    # write_job_to_mysql('datas/data.csv')
    # write_diJob_to_mysql()
