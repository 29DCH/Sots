import redis

from analysis.digitization import Analysis
from analysis.tools.csv_to_database import persistence_job, persistence_djob, persistence_company
from analysis.words_split import words_split


def handle(path:str, keywords):
    r = redis.Redis()
    for keyword in keywords:
        if(not isinstance(keyword, str)):
            continue
        print(keyword, type(keyword))
        words_split(path, keyword)
        diPath = Analysis(keyword).handel()
        print(diPath)
        # 每一个关键字分析完之后删除缓存中的对应list
        r = r.delete(keyword+"_new")
    persistence_company(path)
    persistence_job(path)
    persistence_djob(diPath)


# TODO 分析以城市为关键字的职位信息
def city():
    pass
