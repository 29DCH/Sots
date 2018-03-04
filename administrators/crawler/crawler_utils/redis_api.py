# -*- coding:utf-8 -*-
"""
@author:kkh
@file:redis_api.py
@time:2018/2/2820:42
"""
import redis
import json

'''redis的一些用法，与scrapyd相关'''


class RedisAPI:
    def __init__(self):
        host = 'localhost'
        port = 6379
        db = 0
        self.r = redis.Redis(host=host, port=port, db=db)

    # 根据爬虫jobid和爬虫名查数据量
    def get_len_by_id(self, spider_name, job_id):
        keyword = self.get_value(job_id)
        all_data = self.get_data(spider_name)
        # format_datas = json.loads(all_data)
        num = 0
        for data in all_data:
            str_data = json.loads(data, encoding='utf-8')
            if str_data['keyword'] == keyword:
                num += 1
        print('%s爬取%s的数量：' % (spider_name, keyword), num)
        return num

    # 爬虫spider_name在redis中的数据
    def get_data(self, spider_name):
        key_name = spider_name + ':items'
        datas = self.r.lrange(key_name, 0, self.r.llen(key_name))
        return datas

    def set_key(self, key, name):
        self.r.set(key, name)

    def get_value(self, key):
        value = self.r.get(key)
        return value.decode('utf-8') if value is not None else ''
