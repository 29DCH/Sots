from analysis.digitization import Analysis
from analysis.tools.csv_to_database import persistence_job, persistence_djob
from analysis.words_split import words_split


def handle(path: str):
    words_split(path)
    diPath = Analysis(path).handel()

    persistence_job(path)
    persistence_djob(diPath)


# TODO 分析以城市为关键字的职位信息
def city():
    pass
