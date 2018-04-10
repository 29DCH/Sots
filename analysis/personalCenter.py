# 个人中心、登录注册


from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt


from administrators.models import User as us
from analysis.models import BrowseRecords as br
from analysis.models import Job as job
from analysis.models import City as city


# 注册的用户名校验
@csrf_exempt
def postuserName(request):
    b = request.body.decode()
    body = eval(b)
    username = body['username']
    if us.objects.filter(username=username).count() == 0:
        result = None
    else:
        result = {'usernameLike': {'errorInfor': '用户名 已经注册哦'}}
    return JsonResponse(result, safe=False)

#注册
@csrf_exempt
def registered(request):
    print(request.body)
    b = request.body.decode()
    body = eval(b)
    username = body['username']
    password = body['password']
    # q = us.objects.filter(username=username)
    # print(q.count())
    # if q.count() == 0:
    #      result = {'isOK' : 'Yes'}
    # else:
    #     result = {'isOK' : 'No'}
    user = us(username=username, password=password, nickname=username, status='LOGIN')
    user.save()
    result = {'isOK' : 'Yes'}
    return JsonResponse(result, safe=False)

# 登录
@csrf_exempt
def login(request):
    # print(request.body)
    b = request.body.decode()
    body = eval(b)
    username = body['username']
    password = body['password']

    result = {"isOK": "No"}
    if us.objects.filter(username = username).count() != 0:
        user = us.objects.filter(username=username).get()
        #print(user.password)
        if user.password == password:
            result = {'isOK': "Yes",
                      'status': user.status,
                      'username': user.username}
    return JsonResponse(result, safe=False)

# 是否登录校验


# 前台获取性别、城市、学历、工作年限的列表信息
def personalEdit(request):
    c = city.objects.filter(level='province')
    citys = []
    for ci in c:
        citys.append(ci.name)
    personalEdit = {
        'status': 'Yes',
        'result': {
            'provinces': citys,
            'edu': ['不便透露', '大专', '本科', '硕士', '博士'],
            'sex': ['男', '女', '其他'],
            'workTimes': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
            'graduates' : ['是','否']
        }
    }
    return JsonResponse(personalEdit, safe=False)

# 根据省份查询对应的市集合
def personalCity(request):
    b = request.body.decode()
    body = eval(b)
    provinceName = body['province']

    province = city.objects.get(name=provinceName, level='province')
    adcode = province.adcode
    code = adcode[:2]
    cs = city.objects.filter(adcode__startswith=code, level='city')
    name = []
    for c in cs:
        name.append(c.name)
        #print(c.name)
    result = {'result' : {'citys':name}}

    return JsonResponse(result, safe=False)

# 将用户个人信息提交到后台
@csrf_exempt
def postPersonalInformation(request):
    b = request.body.decode()
    body = eval(b)
    username = body['username']
    user = us.objects.filter(username=username).get()

    user.settledCity = body['settledCity']
    user.degree = body['degree']
    user.email = body['email']
    user.gender = body['gender']
    user.graduatedSchool = body['graduatedSchool']
    user.graduationYear = body['graduationYear']
    user.highestEducation = body['highestEducation']
    user.majors = body['majors']
    user.name = body['name']
    user.phone = body['phone']
    user.workingTime = body['workingTime']
    user.graduates = body['graduates']
    user.state = 'SUBMITTED' # 用户填写完信息后改变状态
    user.save()
    result = {'isOK': "Yes"}
    return JsonResponse(result, safe=False)

# 前台获得个人信息
def getPersonalInformation(request):
    b = request.body.decode()
    body = eval(b)
    username = body['username']

    user = us.objects.filter(username = username).get()
    if(user.status == 'SUBMITTED'):
        result = {'settledCity': user.settledCity,'degree': user.degree,
              'email': user.email,'gender': user.gender,
              'graduatedSchool': user.graduatedSchool, 'graduationYear': user.graduationYear,
              'highestEducation': user.highestEducation, 'majors': user.majors,
              'name': user.name,'phone': user.phone,'workingTime': user.workingTime,
              'status':user.status}
    else:
        result = {'status':user.status}
    return JsonResponse(result, safe=False)

# 获取用户的浏览记录
def getBrowseRecords(request):
    uid = request.session['uid']
    brs = br.objects.filter(userId=uid, state=1)
    records = []
    for b in brs:
        jobs = job.objects.filter(id = b.id).get()
        records.append({'jobName':jobs.JobName, 'jobId':b.id})
    return JsonResponse(result={'records':records})

# 获取用户的收藏夹
def getCollention(request):
    uid = request.session['uid']
    brs = br.objects.filter(userId=uid, state=2)
    collentions = []
    for b in brs:
        jobs = job.objects.filter(id = b.id).get()
        collentions.append({'jobName':jobs.JobName, 'jobId':b.id})
    return JsonResponse(result={'records':collentions})
