# -*- coding: utf-8 -*-
import scrapy
from lagou.items import LagouItem
from scrapy_redis.spiders import RedisSpider
from scrapy.settings import Settings
from scrapy.conf import settings
import json
from lxml import etree
import requests
import csv


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


class LagouNewSpider(scrapy.Spider):
    name = 'lagou_new'
    allowed_domains = ['lagou.com']
    # redis_key = 'lagou:start_urls'
    url = 'http://www.lagou.com/jobs/positionAjax.json?first=true&pn={}&kd={}'

    # custom_settings = {
    #     'DOWNLOAD_DELAY': 0.5,
    #     'REDIS_ITEMS_KEY': 'python',
    # }
    headers = {
        'Cookie': 'user_trace_token=20180116103634-1c765330-7e57-4c47-a1ae-2baec502c969; __guid=237742470.6771356014501'
                  '33900.1516070194824.0908; LGUID=20180116103647-1980592f-fa66-11e7-a36a-5254005c3644; '
                  'JSESSIONID=ABAAABAACEBACDGC29B7A459BB81A4EA63539E8DD950A84; '
                  'X_HTTP_TOKEN=a4e093ddf1682f80c73918df395c4a6b; ab_test_random_num=0; _gat=1; '
                  '_putrc=94187ED27D997DCA; login=true; unick=%E6%8B%89%E5%8B%BE%E7%94%A8%E6%88%B78898; '
                  'hasDeliver=0; gate_login_token=1b6f6bd52f6393cf59f144c14ac49d1cdc39abc088eddb4b; '
                  'TG-TRACK-CODE=index_search; _gid=GA1.2.481347888.1516188304; _ga=GA1.2.478494520.1516070208; '
                  'Hm_lvt_4233e74dff0ae5bd0a3d81c6ccf756e6=1516070208; '
                  'Hm_lpvt_4233e74dff0ae5bd0a3d81c6ccf756e6=1516278388; '
                  'LGSID=20180118190228-129b1f20-fc3f-11e7-a98c-525400f775ce; '
                  'LGRID=20180118202625-cd3b2aaf-fc4a-11e7-a9fe-525400f775ce; '
                  'SEARCH_ID=0fd1b206c1b4473eb652dd56e5429d35; index_location_city=%E5%85%A8%E5%9B%BD; '
                  'monitor_count=24',
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.8",
        "Host": "www.lagou.com",
        "X-Requested-With": "XMLHttpRequest",
        "Origin": "https://www.lagou.com",
        "Referer": "https://www.lagou.com/jobs/list_Python%E7%88%AC%E8%99%AB?labelWords=&fromSearch=true&suginput=",
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36",
    }

    def __init__(self, *args, **kwargs):
        super(LagouNewSpider, self).__init__(**kwargs)
        print(args)
        print(kwargs)

        self.kw = kwargs['keyword']
        self.page_offset = 0
        self.start_page = int(kwargs['start_page']) + self.page_offset  # 初始开始页面 + 已爬取过的页面
        self.max_allow_page = int(kwargs['max_allow_page'])  # 最大允许爬取的页数，默认值为0，表示爬取所有页
        self.start_urls = [self.url.format(str(self.start_page), self.kw)]

    def start_requests(self):
        # print('keyword:', getattr(self, 'keyword', ''))
        for start_url in self.start_urls:
            print('start_url:' + start_url)
            yield scrapy.Request(url=start_url, headers=self.headers, callback=self.parse)

    def parse(self, response):
        print('\n start 第%s页' % (self.start_page + self.page_offset))
        try:
            json_data = json.loads(response.body.decode('utf-8'))

            pageNo = json_data['content']['pageNo']  # 当前页数
            results = json_data['content']['positionResult']['result']
            # print('results: ', results)
            # 将json数据解析放入item中
            for result in results:
                # print('result: ', result)
                item = LagouItem()
                item['keyword'] = self.kw
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
                lt.append(self.kw)
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
                # item_res = self.job_desc_parse(item, job_desc_url, comp_desc_url)
                # yield item_res
        except Exception as e:
            print(e)
            self.page_offset -= 1
            pageNo = self.start_page + self.page_offset

        self.page_offset += 1
        # 判断当前页是否是最大允许页数或是否已全部爬取完毕
        print(self.page_offset, '   ', self.max_allow_page)
        if self.page_offset == self.max_allow_page or pageNo == 0:
            print('totalPage:', self.page_offset)
            pageNo = self.start_page - 1  # 爬虫遇到爬取过的页面不会爬取，所以相当于是退出条件
        # 爬取下一页
        link = self.url.format(str(pageNo + 1), self.kw)
        yield scrapy.Request(url=link, headers=self.headers, callback=self.parse)

    # 解析岗位信息
    # 未使用生成器yield
    # def job_desc_parse(self, item, job_url, comp_url):
    #     print('job_url:', job_url)
    #     response = requests.get(job_url, headers=self.headers)
    #     job_info = parse_job_info(response.text)
    #     job_etree = etree.HTML(response.text)
    #     comp_home = job_etree.xpath('//ul[@class="c_feature"]/li/a/@href')  # 公司首页
    #     item['jobInfo'] = job_info
    #     item['compHome'] = comp_home
    #     return self.comp_desc_parse(item, comp_url)

    # 解析岗位信息
    # 使用生成器yield
    def job_desc_parse(self, response):
        res = response.body.decode('utf-8')
        item = response.meta['item']
        # print(res)
        job_info = parse_job_info(response.text)
        job_etree = etree.HTML(response.text)
        comp_home = job_etree.xpath('//ul[@class="c_feature"]/li/a/@href')  # 公司首页
        item['jobInfo'] = job_info
        item['compHome'] = comp_home
        yield item
        # yield scrapy.Request(url=item['compLink'], headers=self.headers, callback=self.comp_desc_parse, meta={'item': item})

    # 解析公司信息
    # 未使用生成器yield
    # def comp_desc_parse(self, item, comp_url):
    #     print('comp_url:', comp_url)
    #     response = requests.get(comp_url, headers=self.headers)
    #     item['compIntroduce'] = parse_comp_introduce(response.text)
    #     return item

    # 由于不同岗位的发布公司可能相同，所以会被scrapy的去重过滤，导致数据缺失
    # 且该页面仅公司介绍，未用到，所以放弃爬取
    # 使用生成器yield
    # def comp_desc_parse(self, response):
    #     res = response.body.decode('utf-8')
    #     item = response.meta['item']
    #     item['compIntroduce'] = parse_comp_introduce(res)
    #     yield item
