# Create your tests here.
import re
from math import nan
import matplotlib.pyplot as plt
import pandas as pd
import redis
import numpy as np

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

    df = pd.read_csv('../datas/data.csv', low_memory=False)
    df.drop_duplicates('jobId')
    df = df['jobId']
    idset = set()
    for i in df:
        idset.add(i)

    print(len(idset))
    keys = r.keys(r'*_new')
    for key in keys:
        ids = r.hkeys(key)
        for id in ids:
            id = int(id.decode())
            if id in idset:
                r.hdel(key, id)
                print('delete ', id)
            else:
                print('not')