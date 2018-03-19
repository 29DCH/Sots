# -*- coding: utf-8 -*-
import scrapy
from lagou.items import LagouItem
from scrapy_redis.spiders import RedisSpider
import json
from lxml import etree
from scrapy.conf import settings
from fake_useragent import UserAgent


# 整理list，将一些无用字符去除
def format_list(lt):
    res_list = []
    for res in lt:
        r = res.replace('\n', '').replace(' ', '').replace('\xa0', '')
        if len(r) != 0:
            res_list.append(r)
    return res_list


# 解析job详细信息
def parse_job_info(html):
    job_etree = etree.HTML(html)
    format_1 = job_etree.xpath('//dd[@class="job_bt"]/div[1]//p/text()')
    res_1 = format_list(format_1)  # 去除无用字符
    job_info = res_1

    if len(res_1) == 0:
        format_2 = job_etree.xpath('//dd[@class="job_bt"]/div[1]//span/text()')
        res_2 = format_list(format_2)  # 去除无用字符
        job_info = res_2
        if len(res_2) == 0:
            format_3 = job_etree.xpath('//dd[@class="job_bt"]/div[1]//strong/text()')
            res_3 = format_list(format_3)  # 去除无用字符
            job_info = res_3
    return job_info


# 解析公司详情
def parse_comp_introduce(html):
    comp_etree = etree.HTML(html)
    format_1 = comp_etree.xpath('//span[@class="company_content"]/p/text()')
    comp_introduce = format_list(format_1)  # 去除无用字符
    if len(comp_introduce) == 0:
        print('format2')
        format_2 = comp_etree.xpath('//span[@class="company_content"]/text()')
        comp_introduce = format_list(format_2)  # 去除无用字符
        if len(comp_introduce) == 0:
            print('format3')
            format_3 = comp_etree.xpath('//span[@class="company_content"]//strong/text()')
            comp_introduce = format_list(format_3)  # 去除无用字符
    return comp_introduce


# 分布式爬虫
# 主服务器运行lagou_start爬虫，根据输入的条件生成初始url存入redis
# 从服务器运行lagou_new爬虫，从redis取出url爬取该页并解析,无需去判断输入的条件等
# class LagouNewSpider(scrapy.Spider):
class LagouNewSpider(RedisSpider):
    name = 'lagou_new'
    redis_key = settings['LAGOU_REDIS_KEY']
    # allowed_domains = ['lagou.com']
    # url = 'http://www.lagou.com/jobs/positionAjax.json?first=true&pn={}&kd={}'
    headers = {
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.8",
        "Host": "www.lagou.com",
        "X-Requested-With": "XMLHttpRequest",
        "Origin": "https://www.lagou.com",
        "Referer": "https://www.lagou.com/jobs/list_Python%E7%88%AC%E8%99%AB?labelWords=&fromSearch=true&suginput=",
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        # "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36",
        "User-Agent": UserAgent().random,
    }
    custom_settings = {
        'DEFAULT_REQUEST_HEADERS': headers,  # 单独设置headers,避免与其他爬虫冲突,但会覆盖中间件的设置
    }

    def parse(self, response):
        keyword = response.url.split('kd=')[1]  # 从url中获取keyword
        pageNo = 0
        try:
            json_data = json.loads(response.body.decode('utf-8'))
            # print('json_data:', json_data)

            pageNo = json_data['content']['pageNo']  # 当前页数
            if pageNo > 0:
                print('\n start 第%s页' % str(pageNo))
            results = json_data['content']['positionResult']['result']
            # print('results: ', results)
            # 将json数据解析放入item中
            for result in results:
                # print('result: ', result)
                item = LagouItem()
                item['spider'] = self.name
                item['keyword'] = keyword
                item['jobId'] = str(result['positionId'])
                item['jobName'] = result['positionName']
                item['jobPlace'] = result['city']
                item['jobSalary'] = result['salary']
                item['jobAdvantage'] = result['positionAdvantage']  # 岗位优势(福利待遇)
                item['releaseTime'] = result['createTime']  # 发布时间
                item['educationRequire'] = result['education']  # 最低学历要求
                item['experienceRequire'] = result['workYear']  # 工作经验要求
                item['jobNature'] = result['jobNature']  # 工作性质('全职'、‘兼职’or’实习‘等)
                lt = result['positionLables']
                lt.append(keyword)
                item['jobLabels'] = lt  # 岗位标签，如：部门主管、数据分析等

                item['compId'] = str(result['companyId'])
                item['compName'] = result['companyFullName']
                item['compSize'] = result['companySize']  # 公司规模
                item['compIndustry'] = result['industryField']  # 公司所属行业
                item['compLabels'] = result['companyLabelList']  # 公司标签

                item['longitude'] = result['longitude']  # 经度
                item['latitude'] = result['latitude']  # 纬度
                item['businessZones'] = result['businessZones']  # 更具体的位置
                item['compLogo'] = result['companyLogo']  # 公司logo
                item['financeStage'] = result['financeStage']  # 公司融资阶段

                job_desc_url = 'https://www.lagou.com' + '/jobs/' + item['jobId'] + '.html'
                comp_desc_url = 'https://www.lagou.com' + '/gongsi/' + item['compId'] + '.html'
                item['jobLink'] = job_desc_url
                item['compLink'] = comp_desc_url
                yield scrapy.Request(url=job_desc_url, headers=self.headers, callback=self.job_desc_parse, meta={'item': item})
        except Exception as e:
            if pageNo == 0:
                print('超出页面范围')
            else:
                print('error_page:', pageNo)
                print('error_info:', e)

    # 解析岗位信息
    # 使用生成器yield
    def job_desc_parse(self, response):
        res = response.body.decode('utf-8')
        item = response.meta['item']
        print(item['jobLink'])
        # print(res)
        job_info = parse_job_info(res)
        job_etree = etree.HTML(res)
        comp_home = job_etree.xpath('//ul[@class="c_feature"]/li/a/@href')  # 公司首页
        item['jobInfo'] = job_info
        item['compHome'] = comp_home
        yield item
