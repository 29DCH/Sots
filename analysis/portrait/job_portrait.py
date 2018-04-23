import time

import pickle
from datetime import datetime
from threading import Thread

import redis
from django.db import connection
from django.db.models import Count, Sum

from analysis.models import DigitizedJob, DigitizedCity, Job, Hotword, UserExpectJob
import pandas as pd

from analysis.tools import hbase_tool


def getgraph(djob: DigitizedJob):
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
    djobs = hbase_tool.getdjobs_withcity()
    for djob in djobs:
        city = djob[5]
        city = city.split('-')[0]
        digitizedcity = r.hget(keyname, city)
        if digitizedcity:
            dcity = pickle.loads(digitizedcity)
            dcity.experience += djob[0]
            dcity.experience /= 2
            dcity.skill += djob[1]
            dcity.skill /= 2
            dcity.education += djob[2]
            dcity.education /= 2
            dcity.compSize += djob[3]
            dcity.compSize /= 2
            dcity.salary += djob[4]
            dcity.salary /= 2
            dcity.sum += 1
            print(city, dcity.salary, dcity.compSize, dcity.education, dcity.skill, dcity.experience, dcity.sum)
            r.hset(keyname, city, pickle.dumps(dcity))
        else:
            dcity = DigitizedCity(cityname=city, experience=djob[0], skill=djob[1], education=djob[2],
                                  compSize=djob[3], salary=djob[4], sum=1)
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
    print('耗时：', endtime - starttime)


# TODO 时间排序
def job_need():
    datas = dict()
    # 以发布时间为组
    releasenum = Job.objects.values_list('releaseTime').annotate(num=Count('id')).order_by('-num')[:10]
    datas['jobnum'] = []
    for obj in releasenum:
        datas['jobnum'].append({'value': obj[1], 'name': obj[0]})

    skillnum = Hotword.objects.values_list('hotword').annotate(heat=Sum('heat')).order_by('-heat')[:20]
    datas['skillnum'] = []
    for obj in skillnum:
        datas['skillnum'].append({'value': obj[1], 'name': obj[0]})

    exprnum = Job.objects.values_list('experienceRequire').annotate(num=Count('id')).order_by('-num')[:5]
    datas['workskill'] = []
    for obj in skillnum:
        datas['workskill'].append({'value': obj[1], 'name': obj[0]})

    return datas


def get_cityjobsalary(city, **kwargs):
    start = kwargs.get('start')
    end = kwargs.get('end')

    if (end is None):
        start = str(start)
        with connection.cursor() as cursor:
            cursor.execute("""
                    SELECT COUNT(JOBID) AS s
                    FROM analysis_job AS j
                    JOIN analysis_digitizedjob AS d ON j.JOBID=d.job_id
                    WHERE d.salary > """ + start + """ AND j.JOBPLACE LIKE '""" + city + """%'
                """)
            result = cursor.fetchone()[0]
    else:
        start = str(start)
        end = str(end)
        with connection.cursor() as cursor:
            cursor.execute("""
                           SELECT COUNT(JOBID) AS s
                            FROM analysis_job AS j
                            JOIN analysis_digitizedjob AS d ON j.JOBID=d.job_id
                            WHERE d.salary <= """ + start + """  AND d.SALARY>""" + end + """ AND j.JOBPLACE LIKE '""" + city + """%'
    
                        """)
            result = cursor.fetchone()[0]
    print(city, start, end, result)
    return result


# 获取各个阶段的百分比
def getpercentgap(city):
    from concurrent.futures import ThreadPoolExecutor
    executor = ThreadPoolExecutor(5)
    n30 = executor.submit(get_cityjobsalary, city, start=30)
    n3015 = executor.submit(get_cityjobsalary, city, start=30, end=15)
    n1510 = executor.submit(get_cityjobsalary, city, start=15, end=10)
    n106 = executor.submit(get_cityjobsalary, city, start=10, end=6)
    n60 = executor.submit(get_cityjobsalary, city, start=6, end=0)

    # n30 = hbase_tool.get_cityjobsalary(city, start=30)
    # n3015 = hbase_tool.get_cityjobsalary(city, start=30, end=15)
    # n1510 = hbase_tool.get_cityjobsalary(city, start=15, end=10)
    # n106 = hbase_tool.get_cityjobsalary(city, start=10, end=6)
    # n60 = hbase_tool.get_cityjobsalary(city, start=6, end=0)
    n30 = n30.result()
    n3015 = n3015.result()
    n1510 = n1510.result()
    n106 = n106.result()
    n60 = n60.result()

    result = []
    all = n30 + n3015 + n1510 + n106 + n60
    result.append(int(n30 * 100 / all))
    result.append(int(n3015 * 100 / all))
    result.append(int(n1510 * 100 / all))
    result.append(int(n106 * 100 / all))
    result.append(int(n60 * 100 / all))
    return result


# TODO 关键字  存入缓存  不再次获取
def postportrait():
    from concurrent.futures import ThreadPoolExecutor
    executor = ThreadPoolExecutor(5)
    datas = dict()
    datas['salarygap'] = []
    datas['salarystatu'] = []
    datas['jobkind'] = []
    datas['salarygap'].append('>30K')
    datas['salarygap'].append('30K-15K')
    datas['salarygap'].append('15K-10K')
    datas['salarygap'].append('10K-6K')
    datas['salarygap'].append('<6K')

    tmp1 = executor.submit(getpercentgap, '上海')
    tmp2 = executor.submit(getpercentgap, '北京')
    tmp3 = executor.submit(getpercentgap, '广州')
    tmp4 = executor.submit(getpercentgap, '深圳')

    tmp1 = tmp1.result()
    tmp2 = tmp2.result()
    tmp3 = tmp3.result()
    tmp4 = tmp4.result()

    datas['salarystatu'].append({'value': tmp1, 'title': '上海'})
    datas['salarystatu'].append({'value': tmp2, 'title': '北京'})
    datas['salarystatu'].append({'value': tmp3, 'title': '广州'})
    datas['salarystatu'].append({'value': tmp4, 'title': '深圳'})

    # datas['salarystatu'].append({'value': getpercentgap('杭州'),'title': '杭州'})
    # datas['salarystatu'].append({'value': getpercentgap('武汉'),'title': '武汉'})

    datas['jobkind'].append('java')
    datas['jobkind'].append('python')

    return datas


def job_detail():
    datas = dict()
    releasenum = Job.objects.values_list('JobName').annotate(num=Count('id')).order_by('-num')[:20]
    datas['jobtop'] = []
    datas['jobtype'] = []
    for obj in releasenum[:10]:
        datas['jobtop'].append({'value': obj[1], 'name': obj[0]})
    for obj in releasenum:
        datas['jobtype'].append({'value': obj[1], 'name': obj[0]})

    return datas


# TODO????
def topsalaryjobnum():
    numcont = Job.objects.values_list('JobName').annotate(num=Count('id')).order_by('-num')[:10]
    datas = dict()
    datas['jobnumtop'] = []
    for i in numcont:
        datas['jobnumtop'].append({'value': i[1], 'name': i[0]})

    datas['jobsalarytop'] = []
    with connection.cursor() as cursor:
        cursor.execute('''
        SELECT avg(d.salary) as s, j.JobName, count(*) as c
            FROM analysis_job as j 
            JOIN analysis_digitizedjob as d 
            ON j.jobId = d.job_id
            GROUP BY  j.JobName
            HAVING c > 100
            ORDER BY s desc
            limit 10
        ''')
        for i in range(10):
            tmp = cursor.fetchone()
            datas['jobsalarytop'].append({'value': int(tmp[0]), 'name': tmp[1]})

    return datas


# TODO ???
def avgsalaryjobnum():
    datas = dict()
    numcont = DigitizedCity.objects.values_list('salary', 'sum', 'cityname').order_by('-sum', '-salary')[:5]
    datas['city'] = []
    datas['jobnum'] = []
    datas['avgsalary'] = []

    for i in numcont:
        datas['avgsalary'].append(i[0])
        datas['jobnum'].append(i[1])
        datas['city'].append(i[2])

    return datas


def factorsalary():
    datas = dict()
    datas['edu'] = []
    datas['eduS'] = []
    with connection.cursor() as cursor:
        cursor.execute('''
               SELECT educationRequire, avg(d.salary) as s
            FROM analysis_job as j 
            JOIN analysis_digitizedjob as d  on j.jobId = d.job_id 
            GROUP BY educationRequire
            ORDER BY s desc
            LIMIT 4
               ''')

    for i in range(4):
        tmp = cursor.fetchone()
        datas['edu'].append(tmp[0])
        datas['eduS'].append(tmp[1])

    datas['comp'] = []
    datas['compS'] = []
    with connection.cursor() as cursor:
        cursor.execute('''
            SELECT c.compSize, avg(d.salary) AS s 
            FROM analysis_job as j
            JOIN analysis_company as c on j.company_id = c.companyid 
            JOIN analysis_digitizedjob as d on j.jobId = d.job_id 
            GROUP BY c.compSize
            ORDER BY s DESC
            LIMIT 10
            ''')
        for i in range(5):
            tmp = cursor.fetchone()
            datas['comp'].append(tmp[0])
            datas['compS'].append(tmp[1])

    datas['exper'] = []
    datas['experS'] = []
    with connection.cursor() as cursor:
        cursor.execute('''
           SELECT experienceRequire, avg(d.salary) as s
            FROM analysis_job as j 
            JOIN analysis_digitizedjob as d  on j.jobId = d.job_id 
            GROUP BY experienceRequire
            ORDER BY s desc
            LIMIT 1, 5
            ''')
    for i in range(5):
        tmp = cursor.fetchone()
        datas['exper'].append(tmp[0])
        datas['experS'].append(tmp[1])

    datas['city'] = []
    datas['cityS'] = []
    with connection.cursor() as cursor:
        cursor.execute('''
           SELECT cityname, salary
            FROM analysis_digitizedcity
            WHERE sum > 100
            ORDER BY salary DESC
            limit 10
            ''')
    for i in range(10):
        tmp = cursor.fetchone()
        datas['city'].append(tmp[0])
        datas['cityS'].append(tmp[1])

    return datas


def industrycitycompnum():
    ejobs = UserExpectJob.objects.order_by('-sum')[:10]
    datas = dict()
    datas['industry'] = []
    for i in ejobs:
        datas['industry'].append({'name': i.sum, 'value': i.name})

    datas['city'] = ['北京', '上海', '广州', '深圳']
    datas['metaDate'] = [
        [1521, 539, 1356, 1602, 1341, 614, 1221, 1137, 566, 1330],
        [722, 1741, 1400, 1675, 1112, 1612, 1791, 1024, 1205, 1265],
        [1399, 1974, 1164, 1564, 1628, 1682, 970, 756, 1539, 1821],
        [956, 896, 1230, 461, 1465, 1677, 1568, 888, 902, 1340]
    ]
    return datas


def factorjobnum():
    datas = dict()

    educont = Job.objects.values_list('educationRequire').annotate(num=Count('id')).order_by('-num')[:6]
    datas['edu'] = []
    datas['eduS'] = []
    for i in educont:
        datas['edu'].append(i[0])
        datas['eduS'].append(i[1])

    datas['comp'] = []
    datas['compS'] = []
    with connection.cursor() as cursor:
        cursor.execute('''
        SELECT c.compSize, COUNT(*) AS s 
        FROM analysis_job as j
        JOIN analysis_company as c on j.company_id = c.companyid 
        GROUP BY c.compSize
        ORDER BY s DESC
        LIMIT 5
        ''')
        for i in range(5):
            tmp = cursor.fetchone()
            datas['comp'].append(tmp[0])
            datas['compS'].append(tmp[1])

    expcont = Job.objects.values_list('experienceRequire').annotate(num=Count('id')).order_by('-num')[:5]
    print(expcont)
    datas['exper'] = []
    datas['experS'] = []
    for i in expcont:
        datas['exper'].append(i[0])
        datas['experS'].append(i[1])

    return datas


def welfaresalaryfactor():
    datas = dict()
    datas['welfare'] = []
    allw = dict()
    with connection.cursor() as cursor:
        cursor.execute('''
        SELECT JobAdvantage, count(*) as s
        FROM analysis_job
        GROUP BY JobAdvantage
        order by s desc
        limit 10
        ''')
        for i in range(10):
            t = cursor.fetchone()
            tmp = t[0]
            num = t[1]
            tmp = tmp[1:-1]
            tmp = tmp.split(',')
            for j in tmp:
                j = j.strip()[1:-1]
                if j == '':
                    continue
                if allw.get(j) is None:
                    allw[j] = 0
                allw[j] += num

    print(allw)
    keys = allw.keys()
    for k in keys:
        datas['welfare'].append({'value': allw[k], 'name': k})

    datas['salaryfactory'] = []
    datas['salaryfactory'].append({'value': 335, 'name': '工作经验'})
    datas['salaryfactory'].append({'value': 254, 'name': '教育水平'})
    datas['salaryfactory'].append({'value': 123, 'name': '城市'})
    datas['salaryfactory'].append({'value': 876, 'name': '公司规模'})
    return datas


# TODO 浮点数  职位数量  排序
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
        datas['salarytop'].append({'value': obj[0], 'name': obj[2]})

    # {name:value} 福利权重top10 福利数量
    datas['jobwelfare'] = []
    # {name:value} 城市 平均工资
    citys = DigitizedCity.objects.values_list('sum', 'salary', 'cityname').order_by('-sum', '-salary')[:10]
    datas['citysalary'] = []
    for obj in citys:
        datas['citysalary'].append({'value': obj[1], 'name': obj[2]})

    return datas

# TODO加缓存
if __name__ == '__main__':
    getallgraph('../result/newModel2018-03-01 09:32:41.csv')
