# -*- coding:utf-8 -*-
"""
@author:kkh
@file:spider_or_site.py
@time:2018/2/2820:13
"""

'''爬虫名与网站名对应及转换'''


def trans(name):
    # TODO(kkh) 需改为从数据库读取
    table = {
        'lagou_start': '拉勾网',
        '拉勾': 'lagou_start',
        'zhilian': '智联招聘',
        '智联招聘': 'zhilian',
        'wuyou_first': '51job',
        '51job': 'wuyou_first',
    }
    res = ''
    for key in table.keys():
        if key == name:
            return table[key]
    return res
