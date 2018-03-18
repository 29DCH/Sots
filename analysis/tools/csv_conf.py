data_columnsname = ['jobId', 'jobName', 'jobPlace', 'jobSalary', 'jobAdvantage', 'releaseTime', 'jobNeed',
                   'educationRequire', 'experienceRequire', 'skillRequire', 'jobLink', 'jobInfo', 'jobNature',
                   'jobLabels', 'companyId', 'compName', 'compSize', 'compIndustry', 'companyLabels', 'compLink',
                   'compIntroduce', 'contactInfo', 'longitude', 'latitude', 'businessZones', 'compHome',
                   'companyLogo', 'financeStage', 'keyword']

digital_columnsname =  ['jobId', 'compSize', 'skill', 'experience', 'education','salary', 'keyword']

'''
            jobId = job['jobId']
            salary = get_salary(job['jobSalary'])
            education = get_education(job['educationRequire'])
            experience = get_experience(job['experienceRequire'])
            skill = get_skill(str(job['jobInfo']), job['keyword'])
            compsize = get_compSize(job['compSize'])
            keyword = job['keyword']
'''

todigital_columnsname = ['jobId', 'jobSalary', 'educationRequire', 'experienceRequire', 'jobInfo',
                         'keyword', 'compSize']

didatapath = 'analysis/result/newModel.csv'
datapath = 'datas/data.csv'