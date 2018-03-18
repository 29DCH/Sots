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
    headers = {
        'Cookie': 'user_trace_token=20180116103634-1c765330-7e57-4c47-a1ae-2baec502c969; __guid=237742470.677135601450133900.1516070194824.0908; '
                  'LGUID=20180116103647-1980592f-fa66-11e7-a36a-5254005c3644; JSESSIONID=ABAAABAACEBACDGC29B7A459BB81A4EA63539E8DD950A84; '
                  'X_HTTP_TOKEN=a4e093ddf1682f80c73918df395c4a6b; ab_test_random_num=0; _gat=1; '
                  '_putrc=94187ED27D997DCA; login=true; unick=%E6%8B%89%E5%8B%BE%E7%94%A8%E6%88%B78898; '
                  'hasDeliver=0; gate_login_token=1b6f6bd52f6393cf59f144c14ac49d1cdc39abc088eddb4b; '
                  'TG-TRACK-CODE=index_search; _gid=GA1.2.481347888.1516188304; _ga=GA1.2.478494520.1516070208; '
                  'Hm_lvt_4233e74dff0ae5bd0a3d81c6ccf756e6=1516070208; Hm_lpvt_4233e74dff0ae5bd0a3d81c6ccf756e6=1516278388; '
                  'LGSID=20180118190228-129b1f20-fc3f-11e7-a98c-525400f775ce; LGRID=20180118202625-cd3b2aaf-fc4a-11e7-a9fe-525400f775ce; '
                  'SEARCH_ID=0fd1b206c1b4473eb652dd56e5429d35; index_location_city=%E5%85%A8%E5%9B%BD; monitor_count=24',
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
    custom_settings = {
        'DEFAULT_REQUEST_HEADERS': headers,  # 单独设置headers,避免与其他爬虫冲突
    }

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

