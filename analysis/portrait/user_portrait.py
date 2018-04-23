from django.db.models import Count, Sum

from administrators.models import User
from analysis.models import UserExpectJob


def user_data():
    datas = dict()
    # {name:value} 教育水平 数量
    educount = User.objects.values_list('highestEducation').annotate(num=Count('id')).order_by('-num')[:6]

    datas['userexper'] = []
    for i in educount:
        datas['userexper'].append({'value': i[1], 'name':i[0]})

    expcount = User.objects.values_list('workingTime').annotate(num=Count('id')).order_by('-num')[:10]
    # {name:number} 工作经验 数量
    datas['useredu'] = []
    for i in expcount:
        datas['useredu'].append({'value': i[1], 'name':i[0]})
    return datas


def userfavcity():
    datas = dict()
    citycount = User.objects.values_list('expectCity').annotate(num=Count('id')).order_by('-num')[:9]
    datas['favCity'] = []
    for i in citycount:
        datas['favCity'].append({'value': i[1], 'name':i[0]})
    return datas


def user_sex():
    datas = dict()
    datas['usersex'] = []
    sexcount = User.objects.values_list('gender').annotate(num=Count('id')).order_by('-num')[:2]
    for i in sexcount:
        datas['usersex'].append({'value': i[1], 'name':i[0]})

    return datas


def userfavjob():
    # TODO 这张表没有定期更新
    ejobs = UserExpectJob.objects.order_by('-sum')[:10]
    datas = dict()
    datas['favJob'] = []
    for i in ejobs:
        datas['favJob'].append({ 'value': i.sum, 'name': i.name })

    return datas

def user_action():
    datas = dict()
    datas['userage'] = []
    x20 = User.objects.filter(age__lt=20).count()
    datas['userage'].append({ 'value': x20, 'name': '<20' })
    x2030 = User.objects.filter(age__gte=20, age__lt=30).count()
    datas['userage'].append({ 'value': x2030, 'name': '20-30' })
    x3040 = User.objects.filter(age__gte=30, age__lt=40).count()
    datas['userage'].append({ 'value': x3040, 'name': '30-40' })
    x40 = User.objects.filter(age__gte=40).count()
    datas['userage'].append({ 'value': x40, 'name': '>=40' })

    return datas


def user_feature():
    datas = dict()
    # {name:value} 用户喜爱职位 数量
    datas['favJob'] = []
    datas['favJob'].append({ 'value': 335, 'name': 'java开发' })
    datas['favJob'].append({ 'value': 305, 'name': '前端开发' })
    datas['favJob'].append({ 'value': 225, 'name': '大数据开发' })
    datas['favJob'].append({ 'value': 201, 'name': 'php开发' })
    datas['favJob'].append({ 'value': 150, 'name': '其他开发' })
    # {name:value} 用户喜爱城市 数量
    datas['favCity'] = []
    datas['favCity'].append({ 'value': 1335, 'name': '北京' })
    datas['favCity'].append({ 'value': 980, 'name': '杭州' })
    datas['favCity'].append({ 'value': 700, 'name': '广州' })
    datas['favCity'].append({ 'value': 600, 'name': '上海' })
    datas['favCity'].append({ 'value': 500, 'name': '深圳' })
    return datas


