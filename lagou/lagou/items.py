# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class LagouItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    keyword = scrapy.Field()    # 搜索关键字
    jobId = scrapy.Field()
    jobName = scrapy.Field()  # 职位名
    jobNature = scrapy.Field()  # 职位性质
    jobPlace = scrapy.Field()  # 工作地点
    jobSalary = scrapy.Field()  # 薪资
    jobInfo = scrapy.Field()  # 职位信息
    jobNeed = scrapy.Field()  # 招聘人数
    jobLabels = scrapy.Field()
    jobLink = scrapy.Field()  # 链接
    jobAdvantage = scrapy.Field()  # 福利待遇
    releaseTime = scrapy.Field()  # 发布时间
    educationRequire = scrapy.Field()  # 学历要求
    experienceRequire = scrapy.Field()  # 经验要求
    skillRequire = scrapy.Field()  # 专业技能要求

    compId = scrapy.Field()
    compName = scrapy.Field()  # 公司名
    compNature = scrapy.Field()  # 公司性质
    compLabels = scrapy.Field()
    compSize = scrapy.Field()  # 公司规模
    compIndustry = scrapy.Field()  # 公司行业
    compIntroduce = scrapy.Field()  # 公司介绍
    compLink = scrapy.Field()  # 公司链接
    contactInfo = scrapy.Field()  # 联系方式

    longitude = scrapy.Field()  # 经度
    latitude = scrapy.Field()  # 纬度
    businessZones = scrapy.Field()  # 更具体的区域
    compHome = scrapy.Field()  # 公司首页
    compLogo = scrapy.Field()  # 公司logo
    financeStage = scrapy.Field()  # 融资阶段
