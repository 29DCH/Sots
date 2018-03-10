# -*- coding:utf-8 -*-
"""
@author:kkh
@file:test.py
@time:2018/1/2815:12
"""
import uuid
import requests
import scrapy
import json
import pandas as pd


class LagouSpider(scrapy.Spider):
    name = 'lagou'
    allowed_domains = ['lagou.com']
    start_urls = ['https://www.lagou.com/jobs/positionAjax.json?needAddtionalResult=false&isSchoolJob=0']

    def __init__(self):
        self.headers = {
            "Host":"www.lagou.com",
            "User-Agent":"Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:55.0) Gecko/20100101 Firefox/55.0",
            "Accept":"application/json, text/javascript, */*; q=0.01",
            "Accept-Language":"zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3",
            "Accept-Encoding":"gzip, deflate, br",
            "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",
            "X-Requested-With":"XMLHttpRequest",
            "X-Anit-Forge-Token":"None",
            "X-Anit-Forge-Code":"0",
            "Referer":"https://www.lagou.com/jobs/list_python?labelWords=&fromSearch=true&suginput=",
            "Cookie":"JSESSIONID=ABAAABAAADEAAFI92A54A4C6E594429E64FA38875190669; Hm_lvt_4233e74dff0ae5bd0a3d81c6ccf756e6=1509671939; Hm_lpvt_4233e74dff0ae5bd0a3d81c6ccf756e6=1509672117; _ga=GA1.2.106989967.1509671939; _gat=1; user_trace_token=20171103091550-87616eba-c034-11e7-96fc-5254005c3644; LGSID=20171103091550-87617405-c034-11e7-96fc-5254005c3644; PRE_UTM=m_cf_cpt_baidu_pc; PRE_HOST=bzclk.baidu.com; PRE_SITE=http%3A%2F%2Fbzclk.baidu.com%2Fadrc.php%3Ft%3D06KL00c00f7Ghk60yUKm0FNkUsK0sOVu00000PW4pNb00000JsWcFL.THL0oUhY1x60UWdBmy-bIy9EUyNxTAT0T1dbrH9Wn1N-mH0snj7-rAf40ZRqfYm3nbuAPjfdnHmdrH-7nYfzwRFAfRcYfW0kfHFAnjR0mHdL5iuVmv-b5Hnsn1nznjR1njfhTZFEuA-b5HDv0ARqpZwYTZnlQzqLILT8UA7MULR8mvqVQ1qdIAdxTvqdThP-5ydxmvuxmLKYgvF9pywdgLKW0APzm1Yvrjns%26tpl%3Dtpl_10085_15730_11224%26l%3D1500117464%26attach%3Dlocation%253D%2526linkName%253D%2525E6%2525A0%252587%2525E9%2525A2%252598%2526linkText%253D%2525E3%252580%252590%2525E6%25258B%252589%2525E5%25258B%2525BE%2525E7%2525BD%252591%2525E3%252580%252591%2525E5%2525AE%252598%2525E7%2525BD%252591-%2525E4%2525B8%252593%2525E6%2525B3%2525A8%2525E4%2525BA%252592%2525E8%252581%252594%2525E7%2525BD%252591%2525E8%252581%25258C%2525E4%2525B8%25259A%2525E6%25259C%2525BA%2526xp%253Did%28%252522m6c247d9c%252522%29%25252FDIV%25255B1%25255D%25252FDIV%25255B1%25255D%25252FDIV%25255B1%25255D%25252FDIV%25255B1%25255D%25252FH2%25255B1%25255D%25252FA%25255B1%25255D%2526linkType%253D%2526checksum%253D220%26wd%3D%25E6%258B%2589%25E5%258B%25BE%25E7%25BD%2591%26issp%3D1%26f%3D8%26ie%3Dutf-8%26rqlang%3Dcn%26tn%3Dbaiduhome_pg%26oq%3D%2525E8%252580%252583%2525E5%25258B%2525A4%2525E7%2525AE%2525A1%2525E7%252590%252586%2525E7%2525B3%2525BB%2525E7%2525BB%25259F%2525E8%2525AE%2525BE%2525E8%2525AE%2525A1%2525E4%2525B8%25258E%2525E5%2525AE%25259E%2525E7%25258E%2525B0%26bs%3D%25E8%2580%2583%25E5%258B%25A4%25E7%25AE%25A1%25E7%2590%2586%25E7%25B3%25BB%25E7%25BB%259F%25E8%25AE%25BE%25E8%25AE%25A1%25E4%25B8%258E%25E5%25AE%259E%25E7%258E%25B0; PRE_LAND=https%3A%2F%2Fwww.lagou.com%2F%3Futm_source%3Dm_cf_cpt_baidu_pc; LGRID=20171103091847-f166e84f-c034-11e7-96fc-5254005c3644; LGUID=20171103091550-8761760d-c034-11e7-96fc-5254005c3644; _putrc=B22CD8F50814AC15; login=true; unick=%E8%B4%BE%E5%AD%90%E5%8B%83; hasDeliver=0; showExpriedIndex=1; showExpriedCompanyHome=1; showExpriedMyPublish=1; index_location_city=%E5%85%A8%E5%9B%BD; TG-TRACK-CODE=index_search; SEARCH_ID=569b9d2a88b74b2f8cb9b93344862648",
            'Cache-Control': 'max-age=0'

        }
        self.next_page = 1

    def start_requests(self):
        yield scrapy.FormRequest(
            url='https://www.lagou.com/jobs/positionAjax.json?needAddtionalResult=false&isSchoolJob=0',
            headers=self.headers,
            callback=self.parse,
            dont_filter=True,
            formdata={
                'first': 'false',
                'pn': str(self.next_page),  # 页码,让其不断循环
                'kd': 'python'  # 关键字
            },

        )

    def parse(self, response):
        json_obj = json.loads(response.body)
        success = json_obj.pop('success',False)
        if success:
            content = json_obj.pop('content', "")
            if content:
                positionResult = content.pop('positionResult', '')
                if positionResult:
                    result = positionResult.pop('result', [])
                    for res in result:
                        print(res['positionName'])
                    if result:
                        self.next_page += 1
                        yield scrapy.FormRequest(
                            url='https://www.lagou.com/jobs/positionAjax.json?needAddtionalResult=false&isSchoolJob=0',
                            headers=self.headers,
                            callback=self.parse,
                            dont_filter=True,
                            formdata={
                                'first': 'false',
                                'pn': str(self.next_page),
                                'kd': 'python'
                            },
                        )
                else:
                    print(u'没有数据3')
            else:
                print(u'没有数据2')
        else:
            print(u'没有数据1')