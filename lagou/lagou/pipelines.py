# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: http://doc.scrapy.org/en/latest/topics/item-pipeline.html
import csv
import pymongo
from scrapy.conf import settings


def save_data_to_csv(dict_data, filename):
    with open(filename, 'a+', encoding='utf-8', newline='') as file:
        head = dict_data.keys()
        writer = csv.DictWriter(file, fieldnames=head)
        with open(filename, encoding='utf-8') as file_2:
            read = csv.DictReader(file_2)
            if read.fieldnames is None:  # 如果没有表头则添加一次表头
                writer.writeheader()
            file_2.close()
        writer.writerow(dict_data)
        file.close()


class LagouPipeline(object):

    def process_item(self, item, spider):
        print('pipeline...')
        dict_item = dict(item)
        keyword = item['jobLabels'][-1]
        filename = '%s_data.csv' % keyword
        save_data_to_csv(dict_item, filename)
        return item


class MongodbPipeline(object):
    def __init__(self):
        conn = pymongo.MongoClient(settings['MONGODB_SERVER'], settings['MONGODB_PORT'])
        db = conn[settings['MONGODB_DB']]
        self.table = db['lagou']

    def process_item(self, item, spider):
        self.table.insert_one(dict(item))
        return item