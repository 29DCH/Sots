from django.db import models
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.urls import reverse
from administrators.models import administrator



# 进入登陆页面
def land(request):
    # return render(request, 'main.html')
    return render(request, 'index.html')

# 检查账号密码
def checks( request):
    admins = administrator()
    admins.username = request.POST['username']
    admins.password = request.POST['password']
    admin_list = administrator.objects.all()
    for i in admin_list:
        # print(i.username,admins.username)
        if (i.username == admins.username) and (i.password == admins.password):

            request.session['adminUser'] = i.username
            # print(i.username, 'xxxxx')
            return redirect( 'main')
    return render(request, 'adminuser/error.html')

# 展示欢迎界面
def welcome(request):
    return render(request, 'welcome.html')

# 跳转到主界面
def show_main(request):
    return render(request, 'main.html')
    # return render(request, 'index_test.html')

# 修改密码
def repassword(request):
    return render(request, 'adminuser/repassword.html')

# 更新新密码
def update(request):
    username = request.session['adminUser']
    password = request.POST['password']
    newpassword = request.POST['newpassword']
    renewpassword = request.POST['renewpassword']
    admins = administrator.objects.all()
    for admin in admins:
        if admin.username == username:
            if password == admin.password:
                admin.password = newpassword
                admin.save()
                return render(request, 'index.html')
            break
    return render(request, 'adminuser/error.html')

# 退出登录
def exit(request):
    return render(request, 'index.html')

