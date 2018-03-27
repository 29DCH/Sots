import pickle

import pandas as pd
import matplotlib.pyplot as plt
import time

import redis
from jieba import analyse

from analysis.models import Keyword, Hotword
from analysis.tools.NLtool import get_dict, get_stop_words, clean_words, save_keywords, word_pseg

tfidf = analyse.extract_tags
textrank = analyse.textrank


class Words:
    def __init__(self, word_str, keyword):
        self.keyword = keyword
        self.word_str = word_str
        self.stop = get_stop_words()  # 停用词
        self.usewords = ''
        self.word_dict = {}

    # 文本处理入口函数  将文本去空白符和标点替换为空格
    def word_handle(self, keyword):
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
        Hotword.objects.filter(keyword=keyword).delete()
        for i in tmp[:20]:
            keys.append(i[0])
            vals.append(i[1])
            hotword = Hotword()
            hotword.hotword = i[0]
            hotword.heat = i[1]
            hotword.keyword = keyword
            hotword.save()

        save_keywords(keys, vals, self.keyword)

        # df = pd.DataFrame(list(vals))
        # print(df)
        # df.index = list(keys)
        # df.plot(figsize=(10.24, 7.68), kind='bar')
        #
        # plt.title(u'result:')
        # plt.show()


def words_split(path: str, keyword):
    # 加载用户字典
    starttime = time.time()

    # 从文件中获取
    x = pd.read_csv(path, low_memory=False)
    x = x[(x['keyword'] == keyword)]
    requirements = x['jobInfo']
    print('keyword ', keyword, 'shape ', x.shape)
    s = ''
    for req in requirements:
        s += str(req).strip()

    # 如果keyword不存在于数据库则创建
    try:
        Keyword.objects.get(keyword__contains=keyword)
    except BaseException as e:
        print(e)
        newkeyword = Keyword()
        newkeyword.keyword = keyword
        newkeyword.save()

    kw = Keyword.objects.get(keyword__contains=keyword)
    # 分析更新之后的关键字
    W = Words(s, keyword)
    W.word_handle(kw)
    endtime = time.time()
    print('time:', endtime - starttime)


if __name__ == '__main__':
    pass
    # words_split('../datas/data.csv')
