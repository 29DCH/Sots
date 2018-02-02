import re
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

from analysis.tools.NLtool import get_keyword, get_keywords


class Analysis:
    edu_point_dict = {
        '不限': 0,
        '大专': 1,
        '本科': 2,
        '硕士': 3,
        '博士': 4,
    }

    def __init__(self):
        # 得出的新模型
        self.frame = pd.DataFrame()
        x = pd.read_csv('../datas/java_data.csv')
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
        self.frame.to_csv("result/newModel.csv", encoding="utf-8")

    def _get_salary(self):
        t = self.columns['jobSalary']
        reg = r'[0-9]*'
        salary = []
        # 判断是xk-yk形式  还是 xk形式
        for i in t:
            # 匹配结果便利一遍  将所有数字形式的转为float相加然后取平均数
            x = re.findall(reg, i)
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
            salary.append(sa)
        self.frame.insert(0, 'salary', salary)

    def _get_education(self):
        t = self.columns['educationRequire']
        education = []
        for i in t:
            if i in self.edu_point_dict.keys():
                education.append(self.edu_point_dict[i])
            else:  # 非法数据
                education.append(0)
        self.frame.insert(0, 'education', education)

    def _get_experience(self):
        # 合法数据形式: 不限; x-y年; x年以上
        t = self.columns['experienceRequire']
        experience = []
        reg = r'[0-9]*'
        for i in t:
            match = re.match(reg, i)
            if not match.group():  # 全为中文,即不限
                experience.append(0)
            else:  # 含数字,取平均数
                nums = re.findall(reg, i)
                sums = 0
                num = 0
                for j in nums:
                    if j.isnumeric():
                        sums += float(j)
                        num += 1
                if num >= 1:
                    sums = sums / num
                    experience.append(sums)
                else:
                    experience.append(1)
        self.frame.insert(0, 'experience', experience)

    # 将每一条记录的要求中的关键字与统计结果中的关键词匹配
    def _get_skill(self):
        # 读取关键字
        keywords = get_keywords()
        t = self.columns['jobInfo']
        skill = []
        for i in t:
            words = get_keyword(i)
            point = 0
            for j in words:
                if j in keywords:
                    point += 1
            skill.append(point)
        self.frame.insert(0, 'skill', skill)

    def _get_comp_size(self):
        t = self.columns['compSize']
        compSize = []
        reg = r'[0-9]*'
        for i in t:
            if i is not np.nan:
                nums = re.findall(reg, i)
                sums = 0
                num = 0
                for j in nums:
                    if j.isnumeric():
                        sums += float(j)
                        num += 1
                if num >= 1:
                    sums = sums / num
                    compSize.append(sums)
                else:
                    compSize.append(1)
            else:
                compSize.append(100)
        self.frame.insert(0, 'compSize', compSize)

if __name__ == '__main__':
    step2 = Analysis()
    step2.handel()
