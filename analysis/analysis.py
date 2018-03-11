from analysis.digitization import Analysis
from analysis.tools.csv_to_mysql import write_job_to_mysql, write_diJob_to_mysql
from analysis.words_split import words_split


def handle(path:str):
    words_split(path)
    diPath = Analysis('xxx.csv').handel()

    write_job_to_mysql('datas/java_data.csv')
    write_diJob_to_mysql(diPath)
