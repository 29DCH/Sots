import re
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
import time

from analysis.tools.NLtool import get_keyword, get_keywords
from analysis.tools.csv_to_mysql import write_diJob_to_mysql, write_job_to_mysql


def get_education(words):
    # TODO 可将这个变量添加到参数列表供调用者改变
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
        now = time.time()
        path = 'result/newModel'+now+'.csv'
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
