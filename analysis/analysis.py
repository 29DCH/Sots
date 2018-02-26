from analysis.digitization import Analysis
from analysis.tools.csv_to_database import persistence_job, persistence_djob
from analysis.words_split import words_split


def handle(path:str):
    words_split(path)
    diPath = Analysis('xxx.csv').handel()

    persistence_job('datas/java_data.csv')
    persistence_djob(diPath)
