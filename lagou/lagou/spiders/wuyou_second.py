# -*- coding: utf-8 -*-
from scrapy.conf import settings
from scrapy_redis.spiders import RedisSpider
import re
from lagou.items import LagouItem


# 51job爬虫第二部分,从redis取出详情页的url,并爬取
class WuyouSecondSpider(RedisSpider):
    name = "wuyou_second"
    redis_key = settings['WUYOU_REDIS_KEY']

    def parse(self, response):
        item = LagouItem()  # 格式需要和lagou网的数据一致
        try:
            item['spider'] = self.name
            item['jobLink'] = response.url
            item['jobName'] = response.xpath('/html/body/div[3]/div[2]/div[2]/div/div[1]/h1/text()').extract()[0]
            item['jobId'] = response.xpath('//*[@id="hidJobID"]/@value').extract()[0]
            item['jobPlace'] = response.xpath('/html/body/div[3]/div[2]/div[2]/div/div[1]/span/text()').extract()[0]
            item['jobSalary'] = response.xpath('/html/body/div[3]/div[2]/div[2]/div/div[1]/strong/text()').extract()[0]
            item['jobLabels'] = response.xpath('/html/body/div[3]/div[2]/div[3]/div[2]/div/div[1]/p[1]/span[2]/text()').extract()[0]
            item['jobInfo'] = response.xpath('/html/body/div[3]/div[2]/div[3]/div[2]/div/p/text()').extract()
            if len(item['jobInfo']) == 0:
                item['jobInfo'] = response.xpath('/html/body/div[3]/div[2]/div[3]/div[2]/div/text()').extract()
                if len(item['jobInfo']) == 0:
                    item['jobInfo'] = response.xpath('/html/body/div[3]/div[2]/div[3]/div[2]/div/div/text()').extract()

            spans = response.xpath('/html/body/div[3]/div[2]/div[3]/div[1]/div/div/span')
            for span in spans:
                data = span.xpath('text()').extract()[0]
                class_attr = span.xpath('em/@class').extract()[0]
                if class_attr == 'i1':
                    item['experienceRequire'] = data
                elif class_attr == 'i2':
                    item['educationRequire'] = data
                elif class_attr == 'i3':
                    item['jobNeed'] = data
                elif class_attr == 'i4':
                    item['releaseTime'] = data

            # 福利待遇
            advantages = response.xpath('/html/body/div[3]/div[2]/div[3]/div[1]/div/p')
            adv_list = []
            if advantages is not None:
                adv_list = advantages.xpath('span/text()').extract()
            item['jobAdvantage'] = adv_list

            item['compName'] = response.xpath('/html/body/div[3]/div[2]/div[2]/div/div[1]/p[1]/a/text()').extract()[0]
            item['compLink'] = response.xpath('/html/body/div[3]/div[2]/div[2]/div/div[1]/p[1]/a/@href').extract()[0]
            item['compId'] = re.findall('/co(.*?).html', item['compLink'])[0]
            item['businessZones'] = response.xpath('/html/body/div[3]/div[2]/div[3]/div[3]/div/p/text()').extract()[1]

            merge_info = response.xpath('/html/body/div[3]/div[2]/div[2]/div/div[1]/p[2]/text()').extract()[0]
            split_info = merge_info.split('|')
            item['compNature'] = split_info[0].replace('\t', '').replace('\r\n', '').replace(' ', '').replace('\xa0', '')
            item['compSize'] = split_info[1].replace('\t', '').replace('\r\n', '').replace(' ', '').replace('\xa0', '')
            item['compIndustry'] = split_info[2].replace('\t', '').replace('\r\n', '').replace(' ', '').replace('\xa0', '')
            yield item
            # print('item信息：\n', item)
        except Exception as e:
            print(e)
