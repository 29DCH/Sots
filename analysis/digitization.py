import re
from operator import itemgetter

import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
import time

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

    experience = float(experience)          # TODO 有效值检测
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


# TODO 待完成
def get_digitaluser(skills, experience, education, compSize):
    skillstr = ''
    for skill in get_skills(skills):
        skillstr += skill + ' , '
    skillpoint = get_skill(skillstr)
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
    match = re.match(reg, words)
    if not match.group():  # 全为中文,即不限
        return 0
    else:  # 含数字,取平均数
        nums = re.findall(reg, words)
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


def get_skill(words: str):
    keywords = get_keywords()
    words = get_keyword(words)
    point = 0
    for j in words:
        if j in keywords:
            point += 1
    return point


def get_salary(words: str):
    reg = r'[0-9]*'
    x = re.findall(reg, words)
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
        nums = re.findall(reg, words)
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

    def __init__(self, path: str):
        # 得出的新模型
        self.frame = pd.DataFrame()
        x = pd.read_csv(path)
        self.columns = x[['jobSalary', 'educationRequire', 'experienceRequire', 'jobInfo', 'compSize', 'jobId']]
        # self.columns = self.columns[:1000]

    def handel(self):
        self._get_salary()
        self._get_education()
        self._get_experience()
        self._get_skill()
        self._get_comp_size()
        self.frame.insert(0, 'jobId', self.columns['jobId'])
        print(self.frame.head())
        self.frame.plot(figsize=(10.24, 7.68))
        plt.show()
        now = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
        path = 'analysis/result/newModel' + str(now) + '.csv'
        self.frame.to_csv(path, encoding="utf-8")
        return path

    def _get_salary(self):
        t = self.columns['jobSalary']
        salary = []
        # 判断是xk-yk形式  还是 xk形式
        for i in t:
            # 匹配结果便利一遍  将所有数字形式的转为float相加然后取平均数
            sa = get_salary(i)
            salary.append(sa)
        self.frame.insert(0, 'salary', salary)

    def _get_education(self):
        t = self.columns['educationRequire']
        education = []
        for i in t:
            education.append(get_education(i))
        self.frame.insert(0, 'education', education)

    def _get_experience(self):
        # 合法数据形式: 不限; x-y年; x年以上
        t = self.columns['experienceRequire']
        experience = []
        reg = r'[0-9]*'
        for i in t:
            experience.append(get_experience(i))
        self.frame.insert(0, 'experience', experience)

    # 将每一条记录的要求中的关键字与统计结果中的关键词匹配
    def _get_skill(self):
        # 读取关键字
        t = self.columns['jobInfo']
        skill = []
        for i in t:
            skill.append(get_skill(i))
        self.frame.insert(0, 'skill', skill)

    def _get_comp_size(self):
        t = self.columns['compSize']
        compSize = []
        for i in t:
            compSize.append(get_compSize(i))
        self.frame.insert(0, 'compSize', compSize)


if __name__ == '__main__':
    step2 = Analysis('../datas/java_data.csv')
    step2.handel()
