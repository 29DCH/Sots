# -*- coding: utf-8 -*-

# Scrapy settings for lagou project
#
# For simplicity, this file contains only settings considered important or
# commonly used. You can find more settings consulting the documentation:
#
#     http://doc.scrapy.org/en/latest/topics/settings.html
#     http://scrapy.readthedocs.org/en/latest/topics/downloader-middleware.html
#     http://scrapy.readthedocs.org/en/latest/topics/spider-middleware.html

BOT_NAME = 'lagou'

SPIDER_MODULES = ['lagou.spiders']
NEWSPIDER_MODULE = 'lagou.spiders'

LOG_ENABLED = True

# Crawl responsibly by identifying yourself (and your website) on the user-agent
# USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36'

# Obey robots.txt rules
ROBOTSTXT_OBEY = False

# Configure maximum concurrent requests performed by Scrapy (default: 16)
#CONCURRENT_REQUESTS = 32

# Configure a delay for requests for the same website (default: 0)
# See http://scrapy.readthedocs.org/en/latest/topics/settings.html#download-delay
# See also autothrottle settings and docs
DOWNLOAD_DELAY = 0.3
# CLOSESPIDER_TIMEOUT = 20  # 设置多久后关闭爬虫
# The download delay setting will honor only one of:
#CONCURRENT_REQUESTS_PER_DOMAIN = 16
#CONCURRENT_REQUESTS_PER_IP = 16

# Disable cookies (enabled by default)
COOKIES_ENABLED = False

# Disable Telnet Console (enabled by default)
#TELNETCONSOLE_ENABLED = False

# Override the default request headers:
DEFAULT_REQUEST_HEADERS = {
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

# Enable or disable spider middlewares
# See http://scrapy.readthedocs.org/en/latest/topics/spider-middleware.html
#SPIDER_MIDDLEWARES = {
#    'lagou.middlewares.LagouSpiderMiddleware': 543,
#}

# Enable or disable downloader middlewares
# See http://scrapy.readthedocs.org/en/latest/topics/downloader-middleware.html
#DOWNLOADER_MIDDLEWARES = {
#    'lagou.middlewares.MyCustomDownloaderMiddleware': 543,
#}

# Enable or disable extensions
# See http://scrapy.readthedocs.org/en/latest/topics/extensions.html
#EXTENSIONS = {
#    'scrapy.extensions.telnet.TelnetConsole': None,
#}

# Configure item pipelines
# See http://scrapy.readthedocs.org/en/latest/topics/item-pipeline.html
ITEM_PIPELINES = {
   # 'lagou.pipelines.LagouPipeline': 300,
   'scrapy_redis.pipelines.RedisPipeline': 300
   # 'lagou.pipelines.MongodbPipeline': 300,
}

# Enable and configure the AutoThrottle extension (disabled by default)
# See http://doc.scrapy.org/en/latest/topics/autothrottle.html
#AUTOTHROTTLE_ENABLED = True
# The initial download delay
#AUTOTHROTTLE_START_DELAY = 5
# The maximum download delay to be set in case of high latencies
#AUTOTHROTTLE_MAX_DELAY = 60
# The average number of requests Scrapy should be sending in parallel to
# each remote server
#AUTOTHROTTLE_TARGET_CONCURRENCY = 1.0
# Enable showing throttling stats for every response received:
#AUTOTHROTTLE_DEBUG = False

# Enable and configure HTTP caching (disabled by default)
# See http://scrapy.readthedocs.org/en/latest/topics/downloader-middleware.html#httpcache-middleware-settings
#HTTPCACHE_ENABLED = True
#HTTPCACHE_EXPIRATION_SECS = 0
#HTTPCACHE_DIR = 'httpcache'
#HTTPCACHE_IGNORE_HTTP_CODES = []
#HTTPCACHE_STORAGE = 'scrapy.extensions.httpcache.FilesystemCacheStorage'

# 指定使用scrapy-redis的调度器
SCHEDULER = "scrapy_redis.scheduler.Scheduler"
# 指定使用scrapy-redis的去重
DUPEFILTER_CLASS = 'scrapy_redis.dupefilter.RFPDupeFilter'
# 指定排序爬取地址时使用的队列，
# 默认的 按优先级排序(Scrapy默认)，由sorted set实现的一种非FIFO、LIFO方式。
SCHEDULER_QUEUE_CLASS = 'scrapy_redis.queue.SpiderPriorityQueue'
# 可选的 按先进先出排序（FIFO）
# SCHEDULER_QUEUE_CLASS = 'scrapy_redis.queue.SpiderQueue'
# 可选的 按后进先出排序（LIFO）
# SCHEDULER_QUEUE_CLASS = 'scrapy_redis.queue.SpiderStack'
# 在redis中保持scrapy-redis用到的各个队列，从而允许暂停和暂停后恢复，也就是不清理redis queues
SCHEDULER_PERSIST = False
# 只在使用SpiderQueue或者SpiderStack是有效的参数，指定爬虫关闭的最大间隔时间
SCHEDULER_IDLE_BEFORE_CLOSE = 5
# 序列化项目管道作为redis Key存储
# REDIS_ITEMS_KEY = '%(spider)s:items'
# REDIS_ITEMS_KEY = 'lagou02:items'

# REDIS_HOST = 'localhost'
REDIS_HOST = '127.0.0.1'
REDIS_PORT = 6379
LAGOU_REDIS_KEY = 'lagou_new:start_urls'
# REDIS_URL = 'redis://192.168.0.61:6379'


MONGODB_SERVER = 'localhost'
MONGODB_PORT = 27017
MONGODB_DB = 'sots'
