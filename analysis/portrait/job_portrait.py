import time

import pickle
from datetime import datetime

import redis
from django.db import connection
from django.db.models import Count, Sum

from analysis.models import DigitizedJob, DigitizedCity, Job, Hotword
import pandas as pd


def getgraph(djob:DigitizedJob):
    graph = {
        'title': {
            'text': '职位能力需求图'
        },
        'tooltip': {},
        'legend': {
            'data': ['总分', '该职位得分']
        },
        'radar': {
            'name': {
                'textStyle': {
                    'color': '#fff',
                    'backgroundColor': '#999',
                    'borderRadius': 3,
                    'padding': [3, 5]
                }
            },
            'indicator': [
                {'name': '技能要求', 'max': 20},
                {'name': '经验要求', 'max': 10},
                {'name': '学历要求', 'max': 5},
            ]
        },
        'series': [{
            'name': '',
            'type': 'radar',
            'areaStyle': {'normal': {}},
            'data': [
                # {
                #     'value': [20, 10, 5],
                #     'name': '总分'
                # },
                {
                    'value': [djob.skill, djob.experience, djob.education],
                    'name': '该职位得分'
                }
            ]
        }]
    }
    return graph


def getallgraph(path: str):
    # TODO
    frame = pd.read_csv(path, low_memory=False)

    mean = frame.mean()
    education = mean['education']
    skill = mean['skill']
    experience = mean['experience']

    djob = DigitizedJob(education=education, skill=skill, experience=experience)
    graph = getgraph(djob)
    return graph


def getonegraph(id):
    djob = DigitizedJob.objects.get(id)
    graph = getgraph(djob)
    return graph


def jobcity():
    starttime = time.time()

    r = redis.Redis()
    keyname = 'jobcity'
    # TODO 修改为文件获取
    djobs = DigitizedJob.objects.all()
    for djob in djobs:
        job = djob.Job
        city = job.JobPlace
        digitizedcity = r.hget(keyname, city)
        print(city, djob.salary, djob.compSize, djob.education, djob.skill, djob.experience)
        if digitizedcity:
            dcity = pickle.loads(digitizedcity)
            dcity.experience += djob.experience
            dcity.experience /= 2
            dcity.skill += djob.skill
            dcity.skill /= 2
            dcity.education += djob.education
            dcity.education /= 2
            dcity.compSize += djob.compSize
            dcity.compSize /= 2
            dcity.salary += djob.salary
            dcity.salary /= 2
            dcity.sum += 1
            print(city,  dcity.salary, dcity.compSize, dcity.education, dcity.skill, dcity.experience, dcity.sum)
            r.hset(keyname, city,  pickle.dumps(dcity))
        else:
            dcity = DigitizedCity(cityname=city,experience=djob.experience,skill=djob.skill,education=djob.education,
                                  compSize=djob.compSize,salary=djob.salary,sum=1)
            r.hset(keyname, city, pickle.dumps(dcity))

    r = redis.Redis()
    keys = r.keys()
    for key in keys:
        print(key)
    setname = 'jobcity'
    hkeys = r.hkeys(setname)
    dcitylist = []
    for key in hkeys:
        dcity = r.hget(setname, key)
        dcity = pickle.loads(dcity)
        dcitylist.append(dcity)
        print(key.decode(), dcity.salary, dcity.compSize, dcity.education, dcity.skill, dcity.experience, dcity.sum)
    DigitizedCity.objects.bulk_create(dcitylist)
    r.delete(keyname)

    endtime = time.time()
    print ('耗时：', endtime-starttime)


def job_need():
    datas = dict()
    # 以发布时间为组
    releasenum = Job.objects.values_list('releaseTime').annotate(num=Count('id')).order_by('-num')[:10]
    datas['jobnum'] = []
    for obj in releasenum:
        datas['jobnum'].append({'value':obj[1], 'name':obj[0]})

    skillnum = Hotword.objects.values_list('hotword').annotate(heat=Sum('heat')).order_by('-heat')[:20]
    datas['skillnum'] = []
    for obj in skillnum:
        datas['skillnum'].append({'value':obj[1], 'name':obj[0]})

    # TODO api错误
    exprnum = Job.objects.values_list('experienceRequire').annotate(num=Count('id')).order_by('-num')[:5]
    datas['workskill'] = []
    for obj in skillnum:
        datas['workskill'].append({'value':obj[1], 'name':obj[0]})

    return datas


def job_detail():
    datas = dict()
    releasenum = Job.objects.values_list('JobName').annotate(num=Count('id')).order_by('-num')[:10]
    # TODO 显示问题
    datas['jobtop'] = []
    datas['jobtype'] = []
    for obj in releasenum:
        datas['jobtop'].append({'value':obj[1], 'name':obj[0]})
        datas['jobtype'].append({'value':obj[1], 'name':obj[0]})

    return datas


def salary_analysis():
    datas = dict()

    with connection.cursor() as cursor:
        cursor.execute('''
            SELECT AVG(analysis_digitizedjob.salary) as salary, COUNT(analysis_job.id) as num,analysis_job.JobName
        from analysis_job
        JOIN analysis_digitizedjob
        ON analysis_digitizedjob.job_id = analysis_job.jobId
        GROUP BY analysis_job.JobName
        ORDER by num DESC,salary DESC
        LIMIT 10
        ''')
        jobs = []
        for i in range(10):
            row = cursor.fetchone()
            print(row)
            jobs.append(row)
    datas['salarytop'] = []
    Job.objects.filter()
    for obj in jobs:
        datas['salarytop'].append({'value':obj[0], 'name':obj[2]})

    # {name:value} 福利权重top10 福利数量
    datas['jobwelfare'] = []
    # {name:value} 城市 平均工资
    citys = DigitizedCity.objects.values_list('sum', 'salary', 'cityname').order_by('-sum', '-salary')[:10]
    datas['citysalary'] = []
    for obj in citys:
        datas['citysalary'].append({'value':obj[1], 'name':obj[2]})

    return datas


if __name__ == '__main__':
    getallgraph('../result/newModel2018-03-01 09:32:41.csv')
