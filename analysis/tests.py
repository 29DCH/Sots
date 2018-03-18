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
    df = pd.DataFrame([['skill', 'point']])
    fi = open('result/java_keywords')
    skills =[]
    point = []
    for line in fi.readlines()[:10]:
        ss = line.split(' ')
        skills.insert(0,ss[0])
        point.append(int(ss[1].strip()))
        df.loc[df.shape[0]] = [ss[0].strip(), ss[1].strip()]
    fi.close()
    point.reverse()
    print(df)
    y_pos = np.arange(len(skills))
    print(point, skills)

    plt.bar(skills, point)
    plt.title('java')
    plt.xticks(rotation=50)
    plt.show()