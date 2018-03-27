# -*- coding: utf-8 -*-
import scrapy
from scrapy.conf import settings
from lxml import etree
import re
import redis


# 51job爬虫第一部分
class A51jobSpider(scrapy.Spider):
    name = "wuyou_first"
    allowed_domains = ["51job.com"]
    url = 'http://search.51job.com/jobsearch/search_result.php?keyword={}&curr_page={}'

    def __init__(self, **kwargs):
        super(A51jobSpider, self).__init__(**kwargs)

        self.kw = kwargs['keyword'] if 'keyword' in kwargs.keys() else ''
        self.start_page = int(kwargs['start_page']) if 'start_page' in kwargs.keys() else 1  # 初始开始页面
        self.max_allow_page = int(kwargs['max_allow_page']) if 'max_allow_page' in kwargs.keys() else 0  # 往后爬取的页数，默认值为0，表示爬取所有页
        self.start_urls = [self.url.format(self.kw, 1)]

        host = settings['REDIS_HOST']
        port = settings['REDIS_PORT']
        self.rds = redis.Redis(host=host, port=port, db=0)

    # 检查用户输入数据的合法性，并爬取有效页
    def parse(self, response):
        text = etree.HTML(response.body.decode('gbk'))
        total_page_1 = text.xpath('//div[@class="p_in"]/span[1]/text()')[0]
        total_page_2 = int(re.findall('共(.*?)页', total_page_1, re.S)[0])  # 总页数
        print('总页数:', total_page_2)
        if self.max_allow_page == 0:
            self.max_allow_page = total_page_2
        if self.start_page <= total_page_2:
            if self.start_page + self.max_allow_page - 1 > total_page_2:
                self.max_allow_page = total_page_2 - self.start_page + 1
            for offset in range(0, self.max_allow_page):  # 相对开始页的偏移页数
                cur_page = self.start_page + offset
                cur_url = self.url.format(self.kw, cur_page)
                yield scrapy.Request(url=cur_url, callback=self.get_url)

    # 提取页面上的url放入redis
    def get_url(self, response):
        curr_page = response.url.split('curr_page=')[1]
        text = etree.HTML(response.body.decode('gbk'))
        infos = text.xpath('//*[@id="resultList"]/div[@class="el"]')
        redis_key = settings['WUYOU_REDIS_KEY']
        for info in infos:
            url = info.xpath('p//a/@href')[0]
            self.rds.lpush(redis_key, url)   # 将页面上每条岗位信息的url放入redis,供第二部分爬虫使用
            self.rds.hset(settings['URL_WITH_KEYWORD'], url, self.kw)  # url与keyword的对应，方便获取keyword
        print('[{}]第{}页爬取完毕,共{}条url'.format(self.kw, curr_page, len(infos)))
