# -*- coding:utf-8 -*-
"""
@author:kkh
@file:analysis_data.py
@time:2018/3/211:28
"""

import matplotlib.pyplot as plt
import matplotlib
import pandas as pd
import numpy as np
import jieba
from wordcloud import WordCloud
from pyecharts import Geo

# matplotlib.use('qt4agg')
# 指定默认字体
matplotlib.rcParams['font.sans-serif'] = ['SimHei']
matplotlib.rcParams['font.family']='sans-serif'

data = pd.read_csv(r'python_data.csv', encoding='utf-8')
print(data.head())
# 学历分析
data['educationRequire'].value_counts().plot(kind='barh', rot=0)
plt.show()
# 工作经验
data['experienceRequire'].value_counts().plot(kind='bar', rot=0, color='b')
plt.show()

final = ''
stopwords = ['岗位职责', '工作', '职责', '描述', '熟悉', '优先', '熟练掌握', '(', ')', '/', '。', '、', '\'']
info_str = ''
for info in data['jobInfo']:
    info_str += info
words = list(jieba.cut(info_str))
for seg in words:
    if seg not in stopwords:
        final = final + seg + ' '
# print(final)
my_wordcloud = WordCloud(font_path=r'C:\Windows\Fonts\simkai.ttf', width=1000, height=600).generate(final)
plt.imshow(my_wordcloud)
plt.axis('off')
plt.show()