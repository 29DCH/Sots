# -*- coding:utf-8 -*-
"""
@author:kkh
@file:test_numpy.py
@time:2018/3/320:44
"""

import numpy as np
from numpy import linalg

lst = [[1, 2, 3], [4, 5, 6]]
np_list = np.array(lst)
print(type(np_list))
print(np_list.dtype)    # 基本数据类型
np_list = np.array(lst, dtype=np.float)
print(np_list.dtype)    # 基本数据类型
print(np_list.shape)    # 形状(行数和列数)
print(np_list.ndim)     # 维度(dimension)
print(np_list.size)     # 大小

# 数组操作
print('Array:')
print(np.zeros([2, 4]))  # 返回一个两行四列的数组，初始值为0
print(np.ones([2, 2]))   # 初始值为1

# 随机数
print('Random:')
print(np.random.rand())  # 一个随机数
print(np.random.rand(2, 4))  # 两行四列个随机数
print(np.random.randint(2, 10, 3))  # 2到9的随机数，三个
print(np.random.choice([5, 10, 15, 20]))  # 在传入的列表中随机
print(np.random.randn(2, 4))  # 符合正态分布的随机数，两行四列
print(np.random.beta(5, 1, 10))  # beta分布，a/(a+b)，10个

# 常用操作
arr = np.arange(2, 12).reshape([2, 5])  # 2到11的数组，重新变成2行5列的二维数组
print(arr)
print('加减乘除平方：')
print(arr + arr)
print(arr - arr)
print(arr * arr)
print(arr / arr)
print(arr ** arr)
print('以e为底的指数函数:')
print(np.exp(arr))
print('对数函数：')
print(np.log(arr))
print('开方：')
print(np.sqrt(arr))
print('三角函数：')
print(np.sin(arr))
print('追加：')
print(np.vstack(arr))
print(np.hstack(arr))
print('分离：')
print(np.split(arr, 2))

# 线性方程



