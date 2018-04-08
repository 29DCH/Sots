# -*- coding:utf-8 -*-
"""
@author:kkh
@file:test.py
@time:2018/2/2616:48
"""

import redis
import json
from scrapy.conf import settings
import pandas as pd
import time
import re

host = settings['REDIS_HOST']
port = settings['REDIS_PORT']
r = redis.Redis(host=host, port=port, db=0)
# key = 'lagou_new:items'
# print(key, r.llen(key))  # key的长度，即爬取的数据量
# list_datas = []
# for i in range(r.llen(key)):
#     data = json.loads(r.lindex(key, i), encoding='utf-8')
#     list_datas.append(data)
#     print(i, data)    # 打印item的具体信息

    # source, data = r.blpop([key])  # 取出并删除一条数据
    # item = json.loads(data)
    # print(item)
# print(time.time())
# # 使用pandas根据jobId去重
# frame = pd.DataFrame(list_datas)
# res = frame.drop_duplicates(['jobId'])
# print(res['jobId'].count())
# print(time.time())

datas = r.lrange('wuyou:start_urls', 0, r.llen('wuyou:start_urls'))
for data in datas:
    print(data)