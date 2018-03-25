

def user_data():
    datas = dict()
    # {name:value} 教育水平 数量
    datas['userEdu'] = []
    datas['userEdu'].append({ 'value': 335, 'name': '本科' })
    datas['userEdu'].append({ 'value': 310, 'name': '硕士' })
    datas['userEdu'].append({ 'value': 274, 'name': '博士' })
    datas['userEdu'].append({ 'value': 235, 'name': '其他' })
    # {name:number} 工作经验 数量
    datas['userExper'] = []
    datas['userExper'].append({ 'value': 335, 'name': '无' })
    datas['userExper'].append({ 'value': 310, 'name': '1-3年' })
    datas['userExper'].append({ 'value': 274, 'name': '4-6年' })
    datas['userExper'].append({ 'value': 235, 'name': '7-10年' })
    datas['userExper'].append({ 'value': 235, 'name': '10年以上' })
    return datas


def user_action():
    datas = dict()
    # {name:value} 用户年龄段 数量
    datas['userage'] = []
    datas['userage'].append({ 'value': 335, 'name': '20-25' })
    datas['userage'].append({ 'value': 235, 'name': '25-30' })
    datas['userage'].append({ 'value': 135, 'name': '30-35' })
    datas['userage'].append({ 'value': 35, 'name': '35-40' })
    datas['userage'].append({ 'value': 135, 'name': '其他' })

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


