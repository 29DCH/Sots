import pandas as pd
import matplotlib.pyplot as plt
import time
from jieba import analyse

from analysis.tools.NLtool import get_dict, get_stop_words, clean_words, save_keywords, word_pseg

tfidf = analyse.extract_tags
textrank = analyse.textrank


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


# TODO 改为对外接收一个字符串
def step1(path:str):
    # 加载用户字典
    starttime = time.time()

    x = pd.read_csv(path)
    requirements = x['jobInfo']
    s = ''
    for i in requirements:
        s += str(i)

    W = Words(s)
    W.word_handle()
    endtime = time.time()
    print('time:', endtime - starttime)


if __name__ == '__main__':
    step1('../datas/java_data.csv')
