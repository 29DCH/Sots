import pandas as pd
import matplotlib.pyplot as plt
import time
from jieba import analyse

from analysis.tools.NLtool import get_dict, get_stop_words, clean_words, save_keywords, word_pseg

tfidf = analyse.extract_tags
textrank = analyse.textrank

'''
思路:
    将矩阵中工作描述的一列抽出来
    # 一个一个分析:
    合成一个整的字符串,或者一个一个分析将结果存入dataframe
        先去掉空白字符和标点
        然后进行单词划分出来
        然后将停用词去除,将动词和其他别的关键词不需要的词去除
        英文全部变成小写
        然后词频统计(画个图直观的看一看也是可以的)
        然后将统计后的关键词存入新的矩阵的一列
        然后预测(先从最简单的线性回归开始,实现了再说难的东西)

    数字化后的csv:
        1. Y薪水: 1-2万/月->取平均数15000,还要处理/月/年
        2. X1学历: 不限(0), 大专(1), 本科(2), 硕士(3), 博士(4)
        3. X2工作经验: 无工作经验:(0), X年工作经验->X, X-Y年工作经验->(X-Y)
        4. X3专业技能: 取排序后的前20个, 每个+1(试试看准不准,不准再换)
        线性预测模型: Y = Θ0+Θ1X1+Θ2X2+Θ3X3
'''


class Words:
    def __init__(self, word_str):
        self.word_str = word_str
        self.stop = get_stop_words()  # 停用词
        self.usewords = ''
        self.word_dict = {}

    # 文本处理入口函数  将文本去空白符和标点替换为空格
    def word_handle(self):
        word_str = clean_words(self.word_str)
        self.usewords, self.word_dict = word_pseg(word_str, get_dict())

        # 去掉停用词
        stoped_list = []
        for i in self.word_dict.keys():
            if i in self.stop:
                stoped_list.append(i)
        for i in stoped_list:
            print('delete key ', i)
            self.word_dict.pop(i)

        tmp = sorted(self.word_dict.items(), key=lambda x: x[1], reverse=True)
        keys = []
        vals = []
        for i in tmp[:20]:
            keys.append(i[0])
            vals.append(i[1])

        save_keywords(keys)
        df = pd.DataFrame(list(vals))
        print(df)
        df.index = list(keys)
        df.plot(figsize=(10.24, 7.68), kind='bar')

        plt.title(u'result:')
        plt.show()


def step1():
    # 加载用户字典
    starttime = time.time()

    x = pd.read_csv('../datas/java_data.csv')
    requirements = x['jobInfo']
    s = ''
    for i in requirements[0:1000]:
        s += str(i)

    W = Words(s)
    W.word_handle()
    endtime = time.time()
    print('time:', endtime - starttime)


if __name__ == '__main__':
    step1()

'''
测试结果:
    1. 读取全部数据然后拼字符串然后分词统计: 1000条60秒
    2. 先处理好字符串然后直接读取统计: 1000条50秒
    差不多
    3. 使用自带jieba自带的关键字统计算法TF-IDF: 1000条12秒(MMP)
    4. 旷师傅自研for循环算法: 1000条10秒
'''
