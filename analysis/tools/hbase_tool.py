import threading
import time
from time import sleep

import phoenixdb as phoenixdb

database_url = 'https://localhost:8765/'
conn = phoenixdb.connect(database_url, autocommit=True)
lock = threading.Lock()


def create_comptable():
    lock.acquire()
    cursor = conn.cursor()

    cursor.execute('''
    CREATE TABLE analysis_company (
  companyId integer primary key ,
  compName varchar(500) ,
  compSize varchar(200) ,
  compIndustry varchar(500) ,
  companyLabels varchar(500) ,
  compLink varchar(500) ,
  compIntroduce varchar ,
  contactInfo varchar(500) ,
  longitude double ,
  latitude double ,
  businessZones varchar(500) ,
  compHome varchar(2000) ,
  companyLogo varchar(500) ,
  financeStage varchar(200)
)
    ''')
    lock.release()


def create_djobtable():
    lock.acquire()

    cursor = conn.cursor()

    cursor.execute("""
    CREATE TABLE analysis_digitizedjob (
  compSize integer ,
  skill integer ,
  experience double ,
  education integer ,
  salary double ,
  job_id integer primary key ,
  keyword varchar(300) DEFAULT NULL
)

    """)
    lock.release()


def create_jobtable():
    lock.acquire()

    cursor = conn.cursor()

    cursor.execute('''
        CREATE TABLE analysis_job
    (
      jobId             Integer  PRIMARY KEY,
      jobName           VARCHAR(200)    ,
      jobPlace          VARCHAR(200)    ,
      jobSalary         VARCHAR(100)    ,
      jobAdvantage      VARCHAR(300)    ,
      releaseTime       VARCHAR(300)    ,
      jobNeed           VARCHAR(300)    ,
      educationRequire  VARCHAR(300)    ,
      experienceRequire VARCHAR(300)    ,
      skillRequire      VARCHAR(300)    ,
      jobLink           VARCHAR(500)    ,
      jobInfo           VARCHAR        ,
      jobNature         VARCHAR(200)    ,
      jobLabels         VARCHAR(300)    ,
      company_id        Integer            NULL,
      clicktimes        Integer DEFAULT 0 ,
      keyword           VARCHAR(100)    NULL
    )
        ''')
    lock.release()


def count_job():
    lock.acquire()

    cursor = conn.cursor()
    cursor.execute("select count(*) from analysis_job")
    lock.release()
    return cursor.fetchone()[0]

def count_djob():
    lock.acquire()

    cursor = conn.cursor()
    cursor.execute("select count(*) from analysis_digitizedjob")
    lock.release()
    return cursor.fetchone()[0]


def getjob_bykeyword(keyword):
    lock.acquire()

    cursor = conn.cursor()
    cursor.execute("select * from analysis_job where keyword = '" + keyword + "'")
    jobs = cursor.fetchall()
    for job in jobs:
        print(job)
    lock.release()



def getjob_byjobid(jobid):
    lock.acquire()

    cursor = conn.cursor()
    cursor.execute("select * from analysis_job where jobid = " + str(jobid))
    lock.release()
    return cursor.fetchone()


def getjobandcomp_byjobid(jobid):
    lock.acquire()

    cursor = conn.cursor()
    cursor.execute('''
    SELECT * FROM ANALYSIS_JOB AS a
    JOIN ANALYSIS_COMPANY AS c
    ON a.COMPANY_ID = c.COMPANYID
    where jobid = ''' + str(jobid))
    lock.release()
    return cursor.fetchone()

def getdjob_byjobid(jobid):
    lock.acquire()

    cursor = conn.cursor()
    cursor.execute("select * from ANALYSIS_DIGITIZEDJOB where job_id = " + str(jobid))
    lock.release()
    return cursor.fetchone()



def getjobinfo_byjobid(jobid):
    lock.acquire()

    cursor = conn.cursor()
    cursor.execute("select jobinfo from analysis_job where jobid = " + str(jobid))
    lock.release()
    return cursor.fetchone()[0]


def getkeyword_byjobid(jobid):
    lock.acquire()

    cursor = conn.cursor()
    cursor.execute("select keyword from analysis_job where jobid = " + str(jobid))
    lock.release()
    return cursor.fetchone()[0]


def getjobids():
    lock.acquire()

    cursor = conn.cursor()
    cursor.execute("select jobid from analysis_job")
    ids = cursor.fetchall()
    newidset = set()
    for id in ids:
        newidset.add(id[0])
    lock.release()
    return newidset


def getdjobids():
    lock.acquire()

    cursor = conn.cursor()
    cursor.execute("select jobid from ANALYSIS_DIGITIZEDJOB")
    ids = cursor.fetchall()
    newidset = set()
    for id in ids:
        newidset.add(id[0])
    lock.release()
    return newidset


def getcomp_bycompid(compid):
    lock.acquire()

    cursor = conn.cursor()
    cursor.execute("select * from analysis_company where COMPANYID = " + str(compid))
    lock.release()
    return cursor.fetchone()


def getcompsize_bycompid(compid):
    lock.acquire()
    cursor = conn.cursor()
    cursor.execute("select compsize from analysis_company where COMPANYID = " + str(compid))
    lock.release()
    return cursor.fetchone()[0]


def getcompids():
    lock.acquire()
    cursor = conn.cursor()
    cursor.execute("select COMPANYID from analysis_company")
    ids = cursor.fetchall()
    newidset = set()
    for id in ids:
        newidset.add(id[0])
    lock.release()
    return newidset


def getjobinfo_bykeyword(keyword, limit=100):
    lock.acquire()
    cursor = conn.cursor()
    cursor.execute("select * from analysis_job where keyword = '" + keyword + "' limit " + limit)
    jobs = cursor.fetchall()
    result = []
    for job in jobs:
        result.append(job[0])
    lock.release()
    return result


def insert_company(com=None):
    """
    :param com: 一个包含所有company字段的元组
    :return:
    """
    if com is None:
        com = [32836, '达疆网络科技（上海）有限公司', '500-2000人', 'O2O', '[''年底双薪'', ''绩效奖金'', ''岗位晋升'', ''定期体检'']',
               'https://www.lagou.com/gongsi/32836.html',
               '[''达达-京东到家，是中国优质物流信息服务平台和生鲜商超O2O平台，同城速递信息服务平台“达达”目前已经覆盖全国360多个重要城市，拥有300多万众包配送员用户，80多万商家用户和3000万个人用户并为其提供平台信息服务，日单量峰值超过400万单。其生鲜商超O2O平台“京东到家”，包含超市便利、新鲜果蔬、零食小吃、鲜花烘焙、医药健康等业务，覆盖北京、上海、广州等22个城市，注册用户超过3000万。公司成立于2014年初，先后获得了红杉、DST、京东、沃尔玛等顶级基金和战略合作伙伴的投资，累计融资金额近7亿美金。'']',
               'nan', 0, 0, '[''东外滩'', ''八佰伴'', ''梅园'']', 'http://www.imdada.cn',
               'i/image/M00/40/E3/CgpFT1lbMmCAJyQhAAA1-lNtzeQ674.png', 'D轮及以上']

    lock.acquire()
    cursor = conn.cursor()
    cursor.execute('''
         upsert INTO analysis_company
    (companyId, compName, compSize, compIndustry, companyLabels, compLink, compIntroduce, contactInfo, longitude, latitude, businessZones, compHome, companyLogo, financeStage)
    VALUES(?, ?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?)
        ''', com)

    lock.release()

def insert_job(job=None):
    """
    :param job: 一个包含所有job字段的元组
    :return:
    """

    if job is None:
        job = [2390983, 'Java开发', '上海', '15k-20k', '工作日美1味三餐、半年调薪 、国外旅游', '2018/1/26 10:16', 'nan', '本科', '3-5年', '[]',
               'https://www.lagou.com/jobs/2390983.html',
               '[''岗位职责：'', ''1、负责公司产品的功能规划、需求分析设计、技术实现和用户体验；'', ''2、负责所属模块的代码开发、调试与维护工作；'', ''3、积极响应客户需求并进行开发/定制化开发和交付；'', ''4、参与公司产品的架构优化，性能优化并辅助其他模块进行技术实现；'', ''5、协助并完成其他各类技术开发任务。'', ''岗位要求：'', ''1、计算机或者相关专业，统招全日制本科及以上学历。'', ''2、良好的问题理解能力，能够理解以及处理复杂逻辑。'', ''3、具备较强的自学能力，团队精神及抗压能力。'', ''4、3年以上的Java开发及应用经验，掌握JSDK，J2EE的相关知识，精通JAVA、JSP、SERVERLET编程，熟悉多线程编程，熟练掌握AJAX，jquery；'', ''5、熟练掌握JAVASCRIPT脚本编写，了解XML，XSLT,CSS的相关知识。'', ''6、掌握数据库的相关知识，熟悉SQLSERVER及ORACLE，具备SQL、触发器、函数、存储过程的编写能力。'', ''7、具有一定的文档编写能力，了解UML。'', ''8、熟悉基本网络设置，能够应用多种操作系统，WINDOWS,LINUX等），熟悉RESIN,TOMCAT等中间件的使用'', ''1、提供有竞争力的薪资，执行相对公平合理的绩效政策和薪酬结构；'', ''2、其他福利：美味三餐、各种补贴、生日和节日福利、年休、优秀员工出国旅游等；'', ''3、作息时间：每天八小时工作制（9:00-18:00，午休1小时），双休+国家法定节假日+带薪假期。'', ''我们的诚意：'', ''-免费提供一日三餐，独立员工食堂，专业大厨亲自掌勺，保证膳食均衡；'', ''-转正既有年假，每年两次加薪机会，年终Bonus，那是必须的！'', ''-每月绩效奖金+研发奖金，用工资条上的数字体现你的技术和实力；'', ''-和你的付出相符的薪水；'', ''-每年一次国内旅游，优秀员工国外旅游，去年塞班岛，今年巴厘岛；'', ''-每年一次全面体检，关爱你的健康；'', ''-员工活动室（乒乓球、桌球），篮球场、浦东羽毛球馆常年场地，均免费；'', ''-安全舒适人体工学椅，时刻保护你的肩颈和腰椎；'', ''-每月至少一次团建，餐后水果，零食茶点免费供应；'']',
               '全职', '[''java'']', 24995, 'java']

    lock.acquire()
    cursor = conn.cursor()
    cursor.execute('''
    upsert INTO analysis_job
(jobId, JobName, JobPlace, JobSalary, JobAdvantage, releaseTime, jobNeed, educationRequire, experienceRequire, skillRequire, jobLink, jobInfo, jobNature, jobLabels, company_id, keyword)
VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
    ''', job)
    lock.release()


def insert_djob(djob=None):
    if djob is None:
        djob = [1, 1, 1, 1, 1, 1, 'asf']
    lock.acquire()
    cursor = conn.cursor()
    cursor.execute(
        '''
        UPSERT INTO ANALYSIS_DIGITIZEDJOB( COMPSIZE, SKILL, EXPERIENCE, EDUCATION, SALARY, JOB_ID, KEYWORD)
VALUES(?,?,?,?,?,?,?)
        ''',
        djob)
    lock.release()


def ntest_phoenix():
    lock.acquire()
    cursor = conn.cursor()
    cursor.execute("SELECT *  FROM analysis_company ")
    all = cursor.fetchall()
    for item in all:
        print(item)
    lock.release()


def getalljobid():
    lock.acquire()
    cursor = conn.cursor()
    cursor.execute('select jobId from analysis_job')
    all = cursor.fetchall()
    jobidset = set()
    for one in all:
        jobidset.add(one[0])
    lock.release()
    return jobidset


if __name__ == '__main__':
    # print(getjob_byjobid(1010419))
    # print(getjobandcomp_byjobid(1010419))
    print(getcompsize_bycompid(3772570))
    # for i in range(100000):
    #     print(getdjob_byjobid(1))
    # create_djobtable()