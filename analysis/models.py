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

# 网站表
class Website(models.Model):
    url = models.CharField(max_length=50)
    name = models.CharField(max_length=20)

# 轮播表
class Carousel(models.Model):
    content_url = models.CharField(max_length=50) # 内容链接
    photo_url = models.CharField(max_length=50) # 图片链接
    state = models.IntegerField() # 是否在首页显示

# 浏览记录和收藏夹表
class BrowseRecords(models.Model):
    jobId = models.IntegerField() # 岗位Id
    userId = models.IntegerField() # 用户Id
    state = models.IntegerField() # 标识  1为浏览记录 2为收藏夹