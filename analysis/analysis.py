import redis

from analysis.digitization import Analysis
from analysis.words_split import words_split


def handle(path:str, keywords):
    r = redis.Redis()
    for keyword in keywords:
        if(not isinstance(keyword, str)):
            continue
        print(keyword, type(keyword))
        words_split(path, keyword)
        # 每一个关键字分析完之后删除缓存中的对应list
    Analysis().handel()
    for keyword in keywords:
        r.delete(keyword+"_new")


# TODO 分析以城市为关键字的职位信息
def city():
    pass
