import phoenixdb as phoenixdb

database_url = 'https://localhost:8765/'
conn = phoenixdb.connect(database_url, autocommit=True)
cursor = conn.cursor()
"""
    表结构备份
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
"""


def get_jobsize():
    cursor.execute("select count(*) from analysis_job")
    return cursor.fetchone()[0]


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

    cursor.execute('''
         upsert INTO analysis_company
    (companyId, compName, compSize, compIndustry, companyLabels, compLink, compIntroduce, contactInfo, longitude, latitude, businessZones, compHome, companyLogo, financeStage)
    VALUES(?, ?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?)
        ''', com)



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

    cursor.execute('''
    upsert INTO analysis_job
(jobId, JobName, JobPlace, JobSalary, JobAdvantage, releaseTime, jobNeed, educationRequire, experienceRequire, skillRequire, jobLink, jobInfo, jobNature, jobLabels, company_id, keyword)
VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
    ''', job)


def test_phoenix():

    cursor.execute("SELECT *  FROM analysis_company ")
    all = cursor.fetchall()
    for item in all:
        print(item)



def getalljobid():
    cursor.execute('select jobId from analysis_job')
    all = cursor.fetchall()
    jobidset = set()
    for one in all:
        jobidset.add(one[0])
    return jobidset


if __name__ == '__main__':
    print(getalljobid())

'''

[97356280, '运维开发工程师', '武汉-武昌区', '0.9-1.5万/月', "['五险', '交通补贴', '餐饮补贴', '年终奖金', '专业培训', '弹性工作']", '03-23发布', None, '本科', '3-4年经验', None, 'http://jobs.51job.com/wuhan-wcq/97356280.html?s=01&t=0', "['\\r\\n\\t\\t\\t\\t\\t\\t1、3年及以上运维及相关工具开发经验; ', '2、精通Python和Shell开发,精通Django等Web框架开发，熟悉前端JS框架; ', '3、强烈的责任感和良好的沟通能力，能够承担工作压力，独立分析和解决问题; ', '4、有运维自动化、监控系统、发布系统、运营支撑系统等开发经验者优先; ', '5、熟悉Docker、Kubernetes等容器技术，SaltStack、Ansible等自动化运维工具，有分布式系统应用和开发经验者优先; ', '6、熟悉ITIL/DevOps，有独立或基于开源项目开发过构建、打包、部署、配置管理、监控报警、数据统计和分析平台等运维开发经验者优先. ', '任职要求： ', '1、熟悉shell、python其中一种，可进行运维开发； ', '2、熟悉linux系统 ', '3、熟悉MySQL,Tomcat，redis，mongodb等安装优化。\\t\\t\\t\\t\\t\\t\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t', '\\t\\t\\t\\t\\t\\t\\r\\n\\t\\t\\t\\t\\t\\t', '\\r\\n\\t\\t\\t\\t\\t\\t', '\\r\\n\\t\\t\\t\\t\\t']", None, "['技术支持/维护工程师', '网站维护工程师']", 4805341, 0, '大数据']
'''