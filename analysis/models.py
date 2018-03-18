from django.db import models


from django.db import models


# Create your models here.
# 岗位表
class Job(models.Model):
    jobId = models.IntegerField(unique=True)
    JobName = models.CharField(max_length=200)
    JobPlace = models.CharField(max_length=200)
    JobSalary = models.CharField(max_length=100)
    JobAdvantage = models.CharField(max_length=300)
    releaseTime = models.CharField(max_length=300)
    jobNeed = models.CharField(max_length=300)
    educationRequire = models.CharField(max_length=300)
    experienceRequire = models.CharField(max_length=300)
    skillRequire = models.CharField(max_length=300)
    jobLink = models.CharField(max_length=500)
    jobInfo = models.TextField()
    jobNature = models.CharField(max_length=200)
    jobLabels = models.CharField(max_length=300)
    pass

# 招聘公司表
class Company(models.Model):
    companyId = models.IntegerField()
    compName = models.CharField(max_length=500)
    compSize = models.CharField(max_length=200)
    compIndustry = models.CharField(max_length=500)
    companyLabels = models.CharField(max_length=500)
    compLink = models.CharField(max_length=500)
    compIntroduce = models.TextField()
    contactInfo = models.CharField(max_length=500)
    longitude = models.FloatField()
    latitude = models.FloatField()
    businessZones = models.CharField(max_length=500)
    compHome = models.CharField(max_length=2000)
    companyLogo = models.CharField(max_length=500)
    financeStage = models.CharField(max_length=200)

# 岗位分析表
class DigitizedJob(models.Model):
    compSize = models.IntegerField(default=50)
    skill = models.IntegerField(default=5)
    experience = models.IntegerField(default=0)
    education = models.IntegerField(default=0)
    salary = models.FloatField(default=5)
    # Job = models.ForeignKey(Job, on_delete=models.CASCADE, null=True, unique=True)
    Job = models.OneToOneField(Job, on_delete=models.CASCADE, null=True,unique=True)
    keyword = models.CharField(max_length=300)

# 网站表
class Website(models.Model):
    url = models.CharField(max_length=50)
    name = models.CharField(max_length=20)

# 轮播表
class Carousel(models.Model):
    content_url = models.CharField(max_length=100) # 内容链接
    photo_url = models.CharField(max_length=100) # 图片链接
    state = models.IntegerField() # 是否在首页显示

# 浏览记录和收藏夹表
class BrowseRecords(models.Model):
    jobId = models.IntegerField() # 岗位Id
    userId = models.IntegerField() # 用户Id
    state = models.IntegerField() # 标识  1为浏览记录 2为收藏夹

# 分析城市
class DigitizedCity(models.Model):
    compSize = models.FloatField(default=50.0)
    skill = models.FloatField(default=5.0)
    experience = models.FloatField(default=0.0)
    education = models.FloatField(default=0.0)
    salary = models.FloatField(default=5.0)
    cityname = models.CharField(max_length=100)
    sum = models.IntegerField()

# 爬虫配置表
class SpiderConf(models.Model):
    spiderName = models.CharField(max_length=100)
    starttime = models.DateTimeField()
    keyword = models.CharField(max_length=100)
    startPage = models.IntegerField(default=1)
    maxAllowPage = models.IntegerField(default=100)


class AnalysisConf(models.Model):
    starttime = models.DateTimeField()


# TODO 添加关键字表及对应的热词表
class Keyword(models.Model):
    keyword = models.CharField(max_length=100, unique=True)


class Hotword(models.Model):
    keyword = models.ForeignKey(Keyword, on_delete=models.CASCADE, null=True)
    hotword = models.CharField(max_length=100)
    heat = models.IntegerField(default=0)