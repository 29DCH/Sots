from django.db import models
from django.http import HttpResponse
from django.shortcuts import render

class administrator(models.Model):
    username = models.CharField(max_length=10)
    password = models.CharField(max_length=10)

# 检查账号密码
def checks( request):
    admins = administrator()
    admins.username = request.POST['username']
    admins.password = request.POST['password']
    admin_list = administrator.objects.all()
    for i in admin_list:
        print(i.username,admins.username)
        if (i.username == admins.username) and (i.password == admins.password):
            return render(request, 'index.html')
    return render(request, 'adminuser/error.html')


