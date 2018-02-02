import csv

# from analysis.models import Job


# def write_job_to_mysql():
#     csv_reader = csv.reader(open('datas/java_data.csv'))
#     tmp = 0
#     for row in csv_reader:
#         if tmp == 0:
#             tmp += 1
#             continue
#         job = Job()
#         job.jobId = row[0]
#         job.JobName = row[1]
#         job.JobPlace = row[2]
#         job.JobSalary = row[3]
#         job.JobAdvantage = row[4]
#         job.releaseTime = row[5]
#         job.jobNeed = row[6]
#         job.educationRequire = row[7]
#         job.experienceRequire = row[8]
#         job.skillRequire = row[9]
#         job.jobLink = row[10]
#         job.jobInfo = row[11]
#         job.jobNature = row[12]
#         job.jobLabels = row[13]
#         print('save job :', job.jobId)
#         job.save()


def write_diJob_to_mysql():
    csv_reader = csv.reader(open('../result/newModel.csv'))
    for row in csv_reader:
        print(row)
    pass


if __name__ == '__main__':
    # write_job_to_mysql()
    write_diJob_to_mysql()