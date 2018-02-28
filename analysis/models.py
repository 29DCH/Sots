from django.db import models


# Create your models here.
class Company(models.Model):
    companyId = models.IntegerField(unique=True)
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
    company = models.ForeignKey(Company, on_delete=models.CASCADE, null=True)
    clicktimes = models.IntegerField(default=0)


class DigitizedJob(models.Model):
    compSize = models.IntegerField(default=50)
    skill = models.IntegerField(default=5)
    experience = models.IntegerField(default=0)
    education = models.IntegerField(default=0)
    salary = models.FloatField(default=5)
    # Job = models.ForeignKey(Job, on_delete=models.CASCADE, null=True, unique=True)
    Job = models.OneToOneField(Job, on_delete=models.CASCADE, null=True,unique=True)

class UserInfo(models.Model):
    educationRequire = models.CharField(max_length=300)
    major = models.CharField(max_length=200)
    school = models.CharField(max_length=200)
    jobWantedPlace = models.CharField(max_length=300)
    experienceRequire = models.CharField(max_length=300)
    skill = models.CharField(max_length=300)