# Create your tests here.
import re
from math import nan

import pandas as pd
import redis


# from analysis import csv_conf
# from analysis.csv_conf import datapath


def get_compSize(words: str):
    reg = r'[0-9]*'
    if words is not nan:
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


def del_all_key():
    r = redis.Redis()
    keys = r.keys()
    for key in keys:
        res = r.delete(key)
        print(res)


if __name__ == "__main__":
    # del_all_key()
    # df = pd.read_csv('../datas/data.csv')
    df = pd.read_csv('result/newModel.csv')

    data_columnsname = ['jobId', 'jobName', 'jobPlace', 'jobSalary', 'jobAdvantage', 'releaseTime', 'jobNeed',
                        'educationRequire', 'experienceRequire', 'skillRequire', 'jobLink', 'jobInfo', 'jobNature',
                        'jobLabels', 'companyId', 'compName', 'compSize', 'compIndustry', 'companyLabels', 'compLink',
                        'compIntroduce', 'contactInfo', 'longitude', 'latitude', 'businessZones', 'compHome',
                        'companyLogo', 'financeStage', 'keyword']

    print(df.shape)
    df = df.drop_duplicates('jobId')
    print(df.shape)
    # name = 'java_new'
    # jobs = r.hvals(name)
    # keys = r.hkeys(name)
    # for key in keys:
    #     job = r.hget(name, key)
    #     job = pickle.loads(job)
    #     print(job)
