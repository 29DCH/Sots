# 个人中心、登录注册
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from administrators.models import User as us
from analysis.models import BrowseRecords as br
from analysis.models import Job as job

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
    print(request.body)
    b = request.body.decode()
    body = eval(b)
    username = body['username']
    password = body['password']

    result = {"isOK": "No"}
    if us.objects.filter(username = username).count() != 0:
        user = us.objects.filter(username=username).get()
        #print(user.password)
        if user.password == password:
            result = {'isOK': "Yes"}
            request.session['username'] = user.username
            request.session['uid'] = user.id

    print(result['isOK'])
    return JsonResponse(result, safe=False)

def postuserName(request):
    b = request.body.decode()
    body = eval(b)
    username = body['username']
    if us.objects.filter(username=username).count() == 0:
        result = None
    else:
        result = {'usernameLike': {'errorInfor': '用户名 已经注册哦'}}
    return JsonResponse(result, safe=False)

# 将用户个人信息提交到后台
@csrf_exempt
def postPersonalInformation(request):
    username = request.session['username']
    user = us.objects.filter(username=username).get()

    print(request.body)
    b = request.body.decode()
    body = eval(b)

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
    user.state = 'SUBMITTED' # 用户填写完信息后改变状态
    user.save()
    result = body


    result['status'] = user.state
    return JsonResponse(result, safe=False)

# 前台获得个人信息
def getPersonalInformation(request):
    if 'username' not in request.session.keys():
       result = {'status':'NOTLOGIN'}
       return JsonResponse(result)
    else:
        username = request.session['username']

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
