# -*- coding:utf-8 -*-
"""
@author:kkh
@file:trans_date.py
@time:2018/3/114:45
"""
import time


# 返回'%Y-%m-%d %H:%M:%S'格式字符串
def to_normal(str_time):
    normal_time = str_time.split('.')[0]
    print(normal_time)
    return normal_time


# 传入'%Y-%m-%d %H:%M:%S'格式字符串
# 返回float的时间戳
def to_time_stamp(str_time):
    time_arr = time.strptime(str_time, '%Y-%m-%d %H:%M:%S')
    time_stamp = time.mktime(time_arr)
    return time_stamp


# 传入时间戳
# 返回'%Y-%m-%d %H:%M:%S'格式字符串
def to_formated_time(time_stamp):
    time_arr = time.localtime(time_stamp)
    formated_time = time.strftime('%Y-%m-%d %H:%M:%S', time_arr)
    return formated_time


to_normal('2018-03-01 10:17:54.123')
to_time_stamp('2018-03-01 10:17:54')
to_time_stamp('2018-03-01 10:16:57')
to_formated_time(1519870674.123)