# -*- coding: utf-8 -*-
import scrapy
import redis
import json
from scrapy.conf import settings


# 根据输入条件生成初始url的爬虫
class LagouStartSpider(scrapy.Spider):
    name = "lagou_start"
    allowed_domains = ["www.lagou.com"]
    url = 'http://www.lagou.com/jobs/positionAjax.json?first=true&pn={}&kd={}'

    def __init__(self, *args, **kwargs):
        super(LagouStartSpider, self).__init__(**kwargs)

        self.kw = kwargs['keyword'] if 'keyword' in kwargs.keys() else ''
        self.start_page = int(kwargs['start_page']) if 'start_page' in kwargs.keys() else 1  # 初始开始页面
        self.max_allow_page = int(kwargs['max_allow_page']) if 'max_allow_page' in kwargs.keys() else 0  # 往后爬取的页数，默认值为0，表示爬取所有页
        self.start_urls = [self.url.format(self.start_page, self.kw)]

    def parse(self, response):
        pageNo = 0
        try:
            json_data = json.loads(response.body.decode('utf-8'))
            print('json_data:', json_data)

            pageNo = json_data['content']['pageNo']  # 当前页数
            totalCount = json_data['content']['positionResult']['totalCount']  # 总数
            total_page = int(totalCount / 15) + 1
            print('total_page', total_page)
            # 处理max_allow_page，使其在页面范围内
            if self.max_allow_page + self.start_page - 1 > total_page or self.max_allow_page == 0:
                self.max_allow_page = total_page - self.start_page + 1
        except Exception as e:
            if pageNo == 0:
                print('超出页面范围')
            else:
                print('error_page:', pageNo)
                print('error_info:', e)
        # 起始页未超出页面范围时,将起始页到终止页的url放入redis,供具体爬虫使用
        if pageNo != 0:
            host = settings['REDIS_HOST']
            port = settings['REDIS_PORT']
            rds = redis.Redis(host=host, port=port, db=0)
            redis_key = settings['LAGOU_REDIS_KEY']
            for p in range(self.start_page, self.start_page + self.max_allow_page):
                print('push page_url ', p)
                rds.lpush(redis_key, self.url.format(str(p), self.kw))

