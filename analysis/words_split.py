
from jieba import analyse

from analysis.models import Keyword, Hotword, Job
from analysis.tools import hbase_tool
from analysis.tools.NLtool import get_dict, get_stop_words, clean_words, save_keywords, word_pseg
from concurrent.futures import ThreadPoolExecutor
executor = ThreadPoolExecutor(50)

tfidf = analyse.extract_tags
textrank = analyse.textrank

stop = get_stop_words()

class Words:
    def __init__(self, word_str):
        self.word_str = word_str
        self.usewords = ''
        self.word_dict = {}

    # 文本处理入口函数  将文本去空白符和标点替换为空格
    def word_handle(self, keyword):
        word_str = clean_words(self.word_str)
        self.usewords, self.word_dict = word_pseg(word_str, get_dict())

        # 去掉停用词
        stoped_list = []
        for i in self.word_dict.keys():
            if i in stop:
                stoped_list.append(i)
        for i in stoped_list:
            print('delete key ', i)
            self.word_dict.pop(i)

        tmp = sorted(self.word_dict.items(), key=lambda x: x[1], reverse=True)

        # Hotword.objects.filter(keyword=keyword).delete()
        # TODO 存储所有到数据库
        for i in tmp:
            # 查询是否存在
            if Hotword.objects.filter(hotword=i[0], keyword=keyword).exists():
                hotword = Hotword.objects.filter(keyword=keyword).get(hotword=i[0])
                hotword.heat += int(i[1])
                hotword.save()
            else:
                # keys.append(i[0])
                # vals.append(i[1])
                hotword = Hotword()
                hotword.hotword = i[0]
                hotword.heat = i[1]
                hotword.keyword = keyword
                hotword.save()

keywords = {}
ct = 0

def thread_deal(s, keyword):
    global ct
    global keywords
    W = Words(s)
    W.word_handle(keywords.get(keyword))
    ct+=1
    print(ct, " count words : ", keyword, s)
    del W


def words_split():
    global keywords

    # mysql 中的ids
    oldids = Job.objects.values_list('jobId')
    oldidset = set()
    for comp in oldids:
        oldidset.add(comp[0])
    # hbase 中的 ids
    try:
        newidset = hbase_tool.getalljobid()
    except BrokenPipeError as e:
        print(e.strerror)
        return

    # TODO 修改
    # newset = newidset
    newset = newidset - oldidset

    print("start split words")
    # 缓存keyword对象
    allkw = Keyword.objects.all()
    for kw in allkw:
        keywords[kw.keyword] = kw
    for id in newset:
        keyword = hbase_tool.getkeyword_byjobid(id)
        s = hbase_tool.getjobinfo_byjobid(id)
        s = str(s).strip()

        # 判断缓存中是否存在
        if(keywords.get(keyword) is None):
            print("new keyword : ", keyword)
            newkeyword = Keyword()
            newkeyword.keyword = keyword
            newkeyword.save()
            kw = Keyword.objects.get(keyword__contains=keyword)
            keywords[keyword] = kw
        executor.submit(thread_deal, s, keyword)

if __name__ == '__main__':
    pass
