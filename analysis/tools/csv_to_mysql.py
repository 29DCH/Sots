import csv

import time
from django.db import IntegrityError

from analysis.models import Job, DigitizedJob
import pandas as pd

def write_job_to_mysql():
    df = pd.read_csv('datas/java_data.csv')
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


def write_diJob_to_mysql():
    df = pd.read_csv('analysis/result/newModel.csv')
    rows = df.iterrows()
    '''
    1 jobId
    2 compSize
    3 skill
    4 experience
    5 education
    6 salary
    '''
    # TODO 解决job重复  批量插入
    list_to_insert = list()
    start_time = time.time()
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
        list_to_insert.append(djob)
    DigitizedJob.objects.bulk_create(list_to_insert)
    endtime = time.time()
    print('耗时：', (endtime-start_time))
if __name__ == '__main__':
    write_diJob_to_mysql()