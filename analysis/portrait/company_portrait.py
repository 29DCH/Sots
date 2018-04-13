from django.db import connection
from django.db.models import Count

from analysis.models import DigitizedJob, DigitizedCity, Company


def comp_scale():
    datas = dict()

    sizes = DigitizedJob.objects.values_list('compSize').annotate(sum=Count('id')).order_by('-sum')
    datas['compscalenum'] = []
    for obj in sizes:
        datas['compscalenum'].append({'value':obj[1], 'name':obj[0]})

    datas['compcitynum'] = []
    citys = DigitizedCity.objects.values_list('sum', 'cityname').order_by('-sum',)[:10]
    for obj in citys:
        datas['compcitynum'].append({'value':obj[0], 'name':obj[1]})

    datas['compsizenum'] = dict()
    datasalary = []
    datasalary.append({'value':100, 'name':'test1'})
    datasalary.append({'value':150, 'name':'test2'})
    datas['compsizenum']['datasalary']=datasalary

    datajobnum = []
    datajobnum.append({'value':100, 'name':'test10'})
    datajobnum.append({'value':150, 'name':'test20'})
    datas['compsizenum']['datajobnum'] = datajobnum

    datacitydata = []
    datacitydata.append({'value': [10,20,30], 'name': 'test10'})
    datacitydata.append({'value': [40,50,60], 'name': 'test20'})
    datacitydata.append({'value': [40,50,60], 'name': 'test30'})
    datas['compsizenum']['datacitydata'] = datacitydata

    compplace = []
    compplace.append('hahah')
    compplace.append('heheh')
    datas['compsizenum']['compplace'] = compplace

    return datas


def comp_status():
    datas = dict()
    indus = Company.objects.values_list('compIndustry').annotate(sum=Count('id')).order_by('-sum')[:15]
    datas['comptype'] = []
    for obj in indus:
        datas['comptype'].append({'value':obj[1], 'name':obj[0]})
    datas['compnature'] = []
    return datas


def corporateportrait():
    datas = dict()
    sizecont = Company.objects.values_list('compSize').annotate(sum=Count('id')).order_by('-sum')[:5]
    datas['compscale'] = []
    for obj in sizecont:
        datas['compscale'].append({'value':obj[1], 'name':obj[0]})
    datas['compscale'].reverse()
    return datas


def compkind():
    datas = dict()
    sizecont = Company.objects.values_list('compIndustry').annotate(sum=Count('id')).order_by('-sum')[:10]
    datas['compType'] = []
    for obj in sizecont:
        datas['compType'].append({'value':obj[1], 'name':obj[0]})
    datas['compType'].reverse()
    return datas


def citycompscale():
    datas = dict()
    datas['city'] = ['北京', '上海', '深圳', '广州']
    datas['comptype'] = ['中等规模公司', '小规模公司', '大规模公司']
    datas['metaDate'] = [
        [120, 140, 100],
        [200, 120, 256],
        [100, 200, 140]
    ]
    return datas


def difcompscalejobnum():
    datas = dict()
    datas['compscalejobnum'] = []
    with connection.cursor() as cursor:
        cursor.execute('''
           SELECT c.compSize, count(j.JobName) as s
            FROM analysis_company as c
            JOIN analysis_job as j on c.companyId = j.company_id
            GROUP BY compSize
            ORDER BY s DESC
            limit 10
           ''')
        for i in range(10):
            tmp = cursor.fetchone()
            datas['compscalejobnum'].append({'value': tmp[1], 'name': tmp[0]})
    return datas


def ifNone(x):
    if x is None:
        return 0
    return x


def difcompscaleedu():
    datas = dict()
    datas['edu'] = ['不限', '大专','本科','硕士','博士']
    datas['compscale'] = []
    datas['metaDate'] = [[],[],[],[],[]]
    tmpdic = dict()
    with connection.cursor() as cursor:
        cursor.execute('''
        SELECT c.compSize, j.educationRequire, count(j.jobId) as s
         FROM analysis_company as c
        JOIN analysis_job as j on c.companyId = j.company_id
        WHERE j.educationRequire in ( '不限', '大专','本科', '硕士','博士')
        GROUP BY compSize, j.educationRequire
  
           ''')
        for i in range(25):
            tmp = cursor.fetchone()
            if tmpdic.get(tmp[0]) is None:
                tmpdic[tmp[0]] = dict()
            tmpdic[tmp[0]][tmp[1]] =  tmp[2]
    keys = tmpdic.keys()
    for k in keys:
        datas['compscale'].append(k)
        datas['metaDate'][0].append(ifNone(tmpdic[k].get('不限')))
        datas['metaDate'][1].append(ifNone(tmpdic[k].get('大专')))
        datas['metaDate'][2].append(ifNone(tmpdic[k].get('本科')))
        datas['metaDate'][3].append(ifNone(tmpdic[k].get('硕士')))
        datas['metaDate'][4].append(ifNone(tmpdic[k].get('博士')))
    return datas


def difcompscaleexper():
    datas = dict()
    datas['exper'] = ['无工作经验', '1年经验', '1-3年', '3-5年', '5-10年']
    datas['compscale'] = []
    datas['metaDate'] = [[], [], [], [], []]
    tmpdic = dict()
    with connection.cursor() as cursor:
        cursor.execute('''
        SELECT c.compSize, j.experienceRequire, count(j.jobId) as s
        FROM analysis_company as c
        JOIN analysis_job as j on c.companyId = j.company_id
        WHERE j.experienceRequire in ('无工作经验', '1年经验', '1-3年', '3-5年', '5-10年')
        GROUP BY compSize, j.experienceRequire
           ''')
        for i in range(25):
            tmp = cursor.fetchone()
            if tmpdic.get(tmp[0]) is None:
                tmpdic[tmp[0]] = dict()
            tmpdic[tmp[0]][tmp[1]] = tmp[2]
    keys = tmpdic.keys()
    for k in keys:
        datas['compscale'].append(k)
        datas['metaDate'][0].append(ifNone(tmpdic[k].get('无工作经验')))
        datas['metaDate'][1].append(ifNone(tmpdic[k].get('1年经验')))
        datas['metaDate'][2].append(ifNone(tmpdic[k].get('1-3年')))
        datas['metaDate'][3].append(ifNone(tmpdic[k].get('3-5年')))
        datas['metaDate'][4].append(ifNone(tmpdic[k].get('5-10年')))
    return datas


def cityindustrycompnum():
    datas = dict()
    datas['industry'] = ['移动互联网','计算机软件', '电子商务','计算机服务']
    datas['city'] = ['上海', '深圳', '北京']
    datas['metaDate'] = [
        [363, 425, 937, 586],
        [780, 666, 574, 968],
        [440, 366, 356, 898],
    ]
    return datas