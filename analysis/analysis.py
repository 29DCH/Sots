from analysis.digitization import Analysis
from analysis.tools.csv_to_database import persistence_job, persistence_djob
from analysis.words_split import words_split


# TODO  改为分析redis中的job  提高性能
def handle(path:str, keywords):
    for keyword in keywords:
        print(keyword, type(keyword))
        words_split(path, keyword)
        # diPath = Analysis(keyword).handel()
        # print(diPath)
    # persistence_job(path)
    # persistence_djob(diPath)


# TODO 分析以城市为关键字的职位信息
def city():
    pass
