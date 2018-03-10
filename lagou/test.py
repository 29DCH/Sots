# -*- coding:utf-8 -*-
"""
@author:kkh
@file:test.py
@time:2018/2/2616:48
"""

import redis
import json

str_data = '{"node_name": "huang", "status": "ok", "projects": ["sots", "default"]}'
dict_data = json.loads(str_data)
print(dict_data['node_name'])

r = redis.Redis(host='localhost', port=6379, db=0)
# r.get('')
key = 'lagou_new:items'
print(key, r.llen(key))
for i in range(r.llen(key)):
    print(i, json.loads(r.lindex(key, i), encoding='utf-8'))
    # source, data = r.blpop([key])
    # item = json.loads(data)
    # print(item)
