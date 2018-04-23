# Create your tests here.
import re
from math import nan

import os
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
        sa = sa * 30
    elif re.match(year_reg, words):
        sa = sa / 12
    wan_reg = '.*万.*'
    yuan_reg1 = '.*元.*'
    yuan_reg2 = '.*块.*'
    qian_reg1 = '.*k.*'
    qian_reg2 = '.*K.*'
    qian_reg3 = '.*千.*'
    if re.match(wan_reg, words):
        sa = sa * 10
    elif re.match(yuan_reg1, words) or re.match(yuan_reg2, words):
        sa = sa / 1000
    elif re.match(qian_reg1, words) or re.match(qian_reg2, words) or re.match(qian_reg3, words):
        sa = sa
    else:
        return 0

    return sa


if __name__ == "__main__":
    s = '[1,2,6,6]'

    print(s)