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


    r = redis.Redis()
    joblist = []
    names  = r.keys(r'*_new')
    for key in names:
        print(key)
    # print(df.shape)
    # df = df.drop_duplicates('jobId')
    # print(df.shape)

    # a = [1,2]
    # b = [3,4]
    # for i, j in a, b:
    #     print(i, j)