from json import dumps

from django.core import serializers
from django.core.serializers import json
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.contrib import auth
from django.views.decorators.csrf import csrf_exempt
from administrators.models import User as us

# 登录
@csrf_exempt
def login(request):
    username = request.POST['username']
    password = request.POST['password']
    users = us.objects.all()
    isOk = "no"
    for u in users:
        if u.username == username and u.password == u.password:
            isOk = "yes"
            return JsonResponse(isOk)
    return JsonResponse(isOk)

