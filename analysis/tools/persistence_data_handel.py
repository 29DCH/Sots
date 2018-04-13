import time

import pandas as pd

from analysis.tools import csv_conf, hbase_tool
from analysis.tools.csv_conf import datapath, didatapath
from analysis.models import Job, DigitizedJob, Company

# 以防None
prevent_none = lambda x: x if x is not None else 'nothing'


def batchinsert_company(idlist: list):
    list_to_insert = list()
    for id in idlist:
        row = hbase_tool.getcomp_bycompid(id)
        company = Company()

        company.companyId = id
        company.compName = prevent_none(row[1])
        company.compSize = prevent_none(row[2])
        company.compIndustry = prevent_none(row[3])
        company.companyLabels = prevent_none(row[4])
        company.compLink = prevent_none(row[5])
        company.compIntroduce = prevent_none(row[6])
        company.contactInfo = prevent_none(row[7])
        company.longitude = prevent_none(row[8])
        company.latitude = prevent_none(row[9])
        company.businessZones = prevent_none(row[10])
        company.compHome = prevent_none(row[11])
        company.companyLogo = prevent_none(row[12])
        company.financeStage = prevent_none(row[13])

        list_to_insert.append(company)
    Company.objects.bulk_create(list_to_insert)
    print("batch insert size = ", len(list_to_insert))


def batchinsert_djob(idlist: list):
    list_to_insert = list()
    for id in idlist:
        row = hbase_tool.getdjob_byjobid(id)
        djob = DigitizedJob()
        #  COMPSIZE, SKILL, EXPERIENCE, EDUCATION, SALARY, JOB_ID, KEYWORD)
        djob.compSize = row[0]
        djob.skill = row[1]
        djob.experience = row[2]
        djob.education = row[3]
        djob.salary = row[4]
        djob.job_id = row[5]
        djob.keyword = row[6]
        list_to_insert.append(djob)
    DigitizedJob.objects.bulk_create(list_to_insert)
    print("batch insert size = ", len(list_to_insert))


def batchinsert_job(idlist: list):
    list_to_insert = list()
    for id in idlist:
        row = hbase_tool.getjob_byjobid(id)
        job = Job()
        job.jobId = id

        job.JobName = prevent_none(row[1])
        job.JobPlace = prevent_none(row[2])
        job.JobSalary = prevent_none(row[3])
        job.JobAdvantage = prevent_none(row[4])
        job.releaseTime = prevent_none(row[5])
        job.jobNeed = prevent_none(row[6])
        job.educationRequire = prevent_none(row[7])
        job.experienceRequire = prevent_none(row[8])
        job.skillRequire = prevent_none(row[9])
        job.jobLink = prevent_none(row[10])
        job.jobInfo = prevent_none(row[11])
        job.jobNature = prevent_none(row[12])
        job.jobLabels = prevent_none(row[13])
        job.company_id = prevent_none(row[14])
        job.keyword = prevent_none(row[16])
        list_to_insert.append(job)

    Job.objects.bulk_create(list_to_insert)
    print("batch insert size = ", len(list_to_insert))


def persistence_company():
    start_time = time.time()
    print('start insert company')

    # 获取hbase比mysql的差集
    newidset = hbase_tool.getcompids()

    oldidset = set()
    oldcomps = Company.objects.values_list('companyId')
    for comp in oldcomps:
        oldidset.add(comp[0])
    print("old size = ", len(oldidset), 'new size = ', len(newidset))
    # 得到新增
    newset = newidset - oldidset
    print("new set ", len(newset))
    batchidlist = list()
    for id in newset:
        print(id)
        batchidlist.append(id)

        if len(batchidlist) == 1000:
            batchinsert_company(batchidlist)
            batchidlist.clear()

    batchinsert_company(batchidlist)

    end_time = time.time()
    print('insert comp end costing:', end_time - start_time)


def persistence_job():
    start_time = time.time()

    print('start insert job')

    newidset = hbase_tool.getjobids()

    oldidset = set()
    oldcomps = Job.objects.values_list('jobId')
    for comp in oldcomps:
        oldidset.add(comp[0])
    print("old size = ", len(oldidset), 'new size = ', len(newidset))

    # 得到新增
    newset = newidset - oldidset

    batchidlist = list()
    for id in newset:
        batchidlist.append(id)

        if len(batchidlist) == 1000:
            batchinsert_job(batchidlist)
            batchidlist.clear()

    batchinsert_job(batchidlist)

    endtime = time.time()
    print('耗时：', (endtime - start_time))


def persistence_djob():
    start_time = time.time()

    print('start insert djob')

    newidset = hbase_tool.getdjobids()

    oldidset = set()
    oldcomps = DigitizedJob.objects.values_list('job_id')
    for comp in oldcomps:
        oldidset.add(comp[0])
    print("old size = ", len(oldidset), 'new size = ', len(newidset))

    # 得到新增
    newset = newidset - oldidset

    batchidlist = list()
    for id in newset:
        batchidlist.append(id)

        if len(batchidlist) == 1000:
            batchinsert_djob(batchidlist)
            batchidlist.clear()

    batchinsert_djob(batchidlist)
    endtime = time.time()

    print('耗时：', (endtime - start_time))


# TODO 添加各种图表需要的数据
def persistence_origindata():
    try:
        persistence_company()
        persistence_job()
    except TimeoutError as e:
        print('database error occurred ', e)


def persistence_digitizeddata():
    try:
        persistence_djob()
    except TimeoutError as e:
        print('database error occurred ', e)


if __name__ == '__main__':
    pass
    # write_job_to_mysql('datas/data.csv')
    # write_diJob_to_mysql()
