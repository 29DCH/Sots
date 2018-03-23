import time

import pickle
import redis

from analysis.models import DigitizedJob, DigitizedCity
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
    # {name:value} 岗位 数量
    datas['jobnum'] = []
    # {name:value} 技能 数量
    datas['skillnum'] = []
    # {name:value} 工作经验 数量
    datas['workskill'] = []
    return datas


def job_detail():
    datas = dict()
    # {name:value} 岗位 top10
    datas['jobtop'] = []
    # {name:value} 岗位 数量
    datas['jobtype'] = []
    return datas


def salary_analysis():
    datas = dict()
    # {name:value} 薪水top10 岗位和平均薪资
    datas['jobtop'] = []
    # {name:value} 福利权重top10 福利数量
    datas['jobwelfare'] = []
    # {name:value} 城市 平均工资
    datas['citysalary'] = []
    return datas


if __name__ == '__main__':
    getallgraph('../result/newModel2018-03-01 09:32:41.csv')
