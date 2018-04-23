import re

import jieba
import jieba.posseg as pseg

from analysis.models import Keyword, Hotword

jieba.load_userdict('analysis/tools/dict')

"""
分词处理公用模块
"""


# TODO 改为后台可编辑
def get_stop_words():
    stop_words = []
    cfp = open('analysis/tools/stopwords', 'r+', encoding='utf-8')  # 停用词的txt文件
    for line in cfp:
        for word in line.split():
            stop_words.append(word)
    cfp.close()
    # print('停用词: ', stop_words)
    return stop_words


# 获取用户词典
def get_dict():
    f = open('analysis/tools/dict', 'r')
    dic = []
    for i in f.readlines():
        dic.append(i.strip())
    return dic


# 文本清理  去除换行tab标点
def clean_words(word_str):
    word_str = re.sub(r'\n+', ' ', word_str)  # 换行 to空格
    word_str = re.sub(r'\t+', ' ', word_str)  # Tab to空格
    word_str = re.sub(r"[\s+\.\!\/_,$%^*(+\"\']+|[+——；！，”。《》，。：“？、~@#￥%……&*（）【】①②③④)]+",
                      ' ', word_str)  # 标点 to空格
    word_str = re.sub(r'\s+', ' ', word_str)  # 多空格 to空格
    return word_str


# 获取每一条数据的关键字    需要加载用户字典
def get_keyword(jobinfo):
    jobinfo = clean_words(jobinfo)
    user_dict = get_dict()
    words = pseg.cut(jobinfo)
    word_list = []
    for wds in words:
        if wds.flag == 'eng' or wds.word in user_dict:
            match = re.match(r'[\u4e00-\u9fa5]+', wds.word)
            # 非中文关键字小写
            if not match:
                wo = str(wds.word).lower()
            else:
                wo = wds.word
            word_list.append(wo)
    return word_list


# 读取关键字
def get_keywords(keyword='java'):
    # f = open('analysis/result/'+keyword+'_keywords', 'r')
    # TODO 倒序查询hotword
    kw = Keyword.objects.get(keyword=keyword)
    keywords = Hotword.objects.filter(keyword=kw).values_list('hotword').order_by('-heat')[:20]
    kwset = set()
    for i in keywords:
        kwset.add(i[0])
    return kwset


# 保存关键字
def save_keywords(keywords, heat, keyword):
    f = open('analysis/result/'+keyword+'_keywords', 'w')
    index = 0
    for i in keywords:
        f.write(i+' '+str(heat[index]))
        f.write('\n')
        index+=1
    f.close()


# 根据所有文本及用户字典提取关键词及词频
def word_pseg(word_str, userdict: list):  # 特定词性提取函数
    words = pseg.cut(word_str)
    word_list = []
    word_dict = {}
    for wds in words:
        if wds.flag == 'eng' or wds.word in userdict:
            match = re.match(r'[\u4e00-\u9fa5]+', wds.word)
            # 非中文关键字小写
            if not match:
                wo = str(wds.word).lower()
            else:
                wo = wds.word
            word_list.append(wo)
            if wo not in word_dict:
                word_dict[wo] = 1
            else:
                word_dict[wo] += 1
    print(word_dict)
    return word_list, word_dict
