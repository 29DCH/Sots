import re
from operator import itemgetter
import os
import pickle
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
import time

import redis

from analysis import csv_conf
from analysis.models import Job
from analysis.tools.NLtool import get_keyword, get_keywords
from analysis.tools.csv_to_database import persistence_djob, persistence_job


def get_skills(str):
    skills = []
    for s in str:
        skills.append(s['skillInfor'])
    return skills

skillmaxpoint = 20
placepoiont = 10
educationpoint = 5
experiencepoint = 5

def getmaxpoint():
    return skillmaxpoint+placepoiont+educationpoint+experiencepoint

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
        for skill in get_skills(skills):        # 技能匹配
            if skill in jobkeyword:
                point += 1
        if jobplace.__eq__(place):              # 地点匹配
            point+=placepoiont

        if experience>=get_experience(jobexperience):                     # 经验匹配
            point+=experiencepoint
        else:
            continue
        if education>=get_education(jobeducation):   # 学历匹配
            point+=educationpoint
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
        if len(results) > 5:
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
    point = 0
    for j in words:
        if j in keywords:
            point += 1
    return point


def get_salary(words: str):
    reg = r'[0-9]*'
    try:
        x = re.findall(reg, words)
    except TypeError:
        return 0
    sums = 0.0
    tmp = 0
    for j in x:
        if j.isnumeric():
            sums += float(j)
            tmp += 1
    if tmp > 0:
        sa = sums / tmp
    else:
        sa = 0
    return sa


def get_compSize(words: str):
    reg = r'[0-9]*'
    if words is not np.nan:
        try:
            nums = re.findall(reg, words)
        except TypeError as e:
            print("error occurred.",e)
            return 100
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
            return 1
    else:
        return 100


class Analysis:

    def __init__(self, keyword):
        # 判断文件存在
        columns = csv_conf.digital_columnsname
        mdpath = 'analysis/result/newModel.csv'
        ifexists = os.path.exists(mdpath)
        if ifexists:
            self.frame = pd.read_csv(mdpath)
        else:
            self.frame = pd.DataFrame()

        self.frame = self.frame[columns]

        r = redis.Redis()
        keyname = keyword + '_new'
        self.jobs = r.hvals(keyname)
        # len = r.llen(keyname)
        # self.jobs = r.lrange(keyname, 0, len)

        self.keyword = keyword
        # self.columns = x[['jobSalary', 'educationRequire', 'experienceRequire', 'jobInfo', 'compSize', 'jobId', 'keyword']]

    def handel(self):
        path = 'analysis/result/newModel.csv'

        # 遍历关键字相同的job
        for job in self.jobs:
            job =  pickle.loads(job)
            print('digitization : ',job)
            jobId = job['jobId']
            salary = get_salary(job['jobSalary'])
            education = get_education(job['educationRequire'])
            experience = get_experience(job['experienceRequire'])
            skill = get_skill(str(job['jobInfo']), self.keyword)
            compsize = get_compSize(job['compSize'])
            keyword = job['keyword']
            self.frame.loc[self.frame.shape[0]] = {'jobId': jobId, 'compSize': compsize, 'skill': skill, 'experience':
                experience, 'education': education,'salary': salary, 'keyword': keyword}
        print(self.frame)
        print(self.frame.shape)

        self.frame.to_csv(path)

        return path

    # def handel(self):
    #     self._get_salary()
    #     self._get_education()
    #     self._get_experience()
    #     self._get_skill()
    #     self._get_comp_size()
    #     self.frame.insert(0, 'jobId', self.columns['jobId'])
    #     self.frame.insert(self.frame.shape[1]+1, 'keyword', self.columns['keyword'])
    #     print(self.frame.head())
    #     # self.frame.plot(figsize=(10.24, 7.68))
    #     # plt.show()
    #     path = 'analysis/result/newModel.csv'
    #     self.frame.to_csv(path, encoding="utf-8")
    #     return path

    # def _get_salary(self):
    #     t = self.columns['jobSalary']
    #     salary = []
    #     # 判断是xk-yk形式  还是 xk形式
    #     for i in t:
    #         # 匹配结果便利一遍  将所有数字形式的转为float相加然后取平均数
    #         sa = get_salary(i)
    #         salary.append(sa)
    #     self.frame.insert(0, 'salary', salary)
    #
    # def _get_education(self):
    #     t = self.columns['educationRequire']
    #     education = []
    #     for i in t:
    #         education.append(get_education(i))
    #     self.frame.insert(0, 'education', education)
    #
    # def _get_experience(self):
    #     # 合法数据形式: 不限; x-y年; x年以上
    #     t = self.columns['experienceRequire']
    #     experience = []
    #     reg = r'[0-9]*'
    #     for i in t:
    #         experience.append(get_experience(i))
    #     self.frame.insert(0, 'experience', experience)
    #
    # # 将每一条记录的要求中的关键字与统计结果中的关键词匹配
    # def _get_skill(self):
    #     # 读取关键字
    #     t = self.columns['jobInfo']
    #     skill = []
    #     for i in t:
    #         skill.append(get_skill(i, ))
    #     self.frame.insert(0, 'skill', skill)
    #
    # def _get_comp_size(self):
    #     t = self.columns['compSize']
    #     compSize = []
    #     for i in t:
    #         compSize.append(get_compSize(i))
    #     self.frame.insert(0, 'compSize', compSize)


if __name__ == '__main__':
    step2 = Analysis('../datas/data.csv')
    step2.handel()
