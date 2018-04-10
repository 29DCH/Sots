import re
import os
import pickle
from math import nan
from threading import Thread

import numpy as np
import pandas as pd

import redis

from analysis.models import Job, DigitizedJob
from analysis.tools import csv_conf, hbase_tool
from analysis.tools.csv_conf import didatapath, datapath
from analysis.tools.NLtool import get_keyword, get_keywords
from concurrent.futures import ThreadPoolExecutor


def get_skills(str):
    str = str.split(',')
    skills = []
    for s in str:
        skills.append(s)
    return skills


skillmaxpoint = 20
placepoiont = 10
educationpoint = 5
experiencepoint = 5


def getmaxpoint():
    return skillmaxpoint + placepoiont + educationpoint + experiencepoint


# 根据地点经验学历技能选出最佳匹配
def jobmatch(jobs, skills, experience, education, place):
    experience = float(experience)
    education = get_education(education)

    matches = {}
    for job in jobs:
        jobinfo = job.jobInfo
        jobplace = job.JobPlace
        jobkeyword = get_keyword(jobinfo)
        jobexperience = job.experienceRequire
        jobeducation = job.educationRequire
        point = 0
        for skill in get_skills(skills):  # 技能匹配
            if skill in jobkeyword:
                point += 1
        if jobplace.__eq__(place):  # 地点匹配
            point += placepoiont

        if experience >= get_experience(jobexperience):  # 经验匹配
            point += experiencepoint
        else:
            continue
        if education >= get_education(jobeducation):  # 学历匹配
            point += educationpoint
        else:
            continue
        if matches.get(point) is None:
            matches[point] = []
        matches[point].append(job)
    print(matches)
    keys = sorted(matches.keys(), reverse=True)
    print(keys)
    # 获取五个最佳匹配
    results = []
    for key in keys:
        l = matches.get(key)
        for i in l:
            result = {
                'point': key,
                'job': i
            }
            results.append(result)
        if len(results) >25:
            break
    print(results)
    return results


def get_digitaluser(skills, experience, education, compSize, keyword):
    skillstr = ''
    for skill in get_skills(skills):
        skillstr += skill + ' , '
    skillpoint = get_skill(skillstr, keyword)
    experiencepiont = get_experience(experience)
    educationpoint = get_education(education)
    user = [skillpoint, experiencepiont, educationpoint, 1250]
    return user


def get_education(words):
    # TODO 可将这个变量放入数据库
    edu_point_dict = {
        '不限': 0,
        '大专': 1,
        '本科': 2,
        '硕士': 3,
        '博士': 4,
    }
    if words in edu_point_dict.keys():
        return edu_point_dict[words]
    else:  # 非法数据
        return 0


def get_experience(words):
    reg = r'[0-9]*'
    try:
        match = re.match(reg, words)
    except TypeError as e:
        print('error occurred.', e);
        return 0
    if not match.group():  # 全为中文,即不限
        return 0
    else:  # 含数字,取平均数
        try:
            nums = re.findall(reg, words)
        except TypeError:
            return 0
        sums = 0
        num = 0
        for j in nums:
            if j.isnumeric():
                sums += float(j)
                num += 1
        if num >= 1:
            sums = sums / num
            return sums
        else:
            return sums


def get_skill(words: str, keyword):
    keywords = get_keywords(keyword)
    words = get_keyword(words)
    print(keywords)
    print(words)
    point = 0
    for j in words:
        if j in keywords:
            point += 1
    return point


def get_salary(words: str):
    reg = r'[0-9]*\.?[0-9]+'
    try:
        x = re.findall(reg, words)
    except TypeError:
        print('error')
        return 0
    sums = 0.0
    tmp = 0
    for j in x:
        sums += float(j)
        tmp += 1
    if tmp > 0:
        sa = sums / tmp
    else:
        sa = 0
    year_reg = '.*年.*'
    day_reg1 = '.*日.*'
    day_reg2 = '.*天.*'
    if re.match(day_reg1, words) or re.match(day_reg2, words):
        sa = sa*30
    elif re.match(year_reg, words):
        sa = sa/12
    wan_reg = '.*万.*'
    yuan_reg1 = '.*元.*'
    yuan_reg2 = '.*块.*'
    qian_reg1 = '.*k.*'
    qian_reg2 = '.*K.*'
    qian_reg3 = '.*千.*'
    if re.match(wan_reg, words):
        sa = sa*10
    elif re.match(yuan_reg1, words) or re.match(yuan_reg2, words):
        sa = sa/1000
    elif re.match(qian_reg1, words) or re.match(qian_reg2, words) or re.match(qian_reg3, words):
        sa =sa
    else:
        return 0

    return sa


def get_compSize(words: str):
    reg = r'[0-9]*'
    if words is not nan:
        try:
            nums = re.findall(reg, words)
        except TypeError as e:
            print("error occurred.", e)
            return 100
        sums = 0
        num = 0
        for j in nums:
            if j.isnumeric():
                sums += float(j)
                num += 1
        if num >= 1:
            sums = sums / num
            return int(sums)
        else:
            return 1
    else:
        return 100


class Analysis:
    def __init__(self):
        newidset = hbase_tool.getjobids()

        oldidset = set()
        oldcomps = Job.objects.values_list('jobId')
        for comp in oldcomps:
            oldidset.add(comp[0])

        # TODO 修改
        self.newset = newidset
        # self.newset = newidset - oldidset
        self.jobs = []


    # TODO 存入hbase
    def handel(self):
        count = 0
        # 遍历关键字相同的job
        for id in self.newset:
            # job =  pickle.loads(job)
            row = hbase_tool.getjob_byjobid(id)
            print('digitization : ', row)
            jobId = id
            keyword = row[-1]
            salary = get_salary(row[3])
            if salary == 0:
                continue
            education = get_education(row[7])
            experience = get_experience(row[8])
            # TODO 检查这里
            skill = get_skill(str(row[11]), keyword)
            compsize = get_compSize(hbase_tool.getcompsize_bycompid(row[14]))

            print(compsize)

            djob = []
            djob.append(compsize)
            djob.append(skill)
            djob.append(experience)
            djob.append(education)
            djob.append(salary)
            djob.append(jobId)
            djob.append(keyword)
            print("insert djob : ", djob)
            hbase_tool.insert_djob(djob)



if __name__ == '__main__':
    step2 = Analysis('../datas/data.csv')
    step2.handel()
