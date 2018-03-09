# 个人中心、登录注册
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from administrators.models import User as us

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

    print(result['isOK'])
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


