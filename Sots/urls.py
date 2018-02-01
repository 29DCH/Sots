"""Sots URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from django.urls import path
import administrators.adminuser.adminuser as ad
import administrators.models as admo
import administrators.user.user as us

urlpatterns = [
    path('admin/', admin.site.urls),

    # 后台
    url(r'^$', admo.land),# 管理员登陆界面
    url(r'checks', ad.checks),# 后台校验用户名和密码
    url(r'main', ad.show_main),# 主界面
    url(r'welcome', ad.welcome, name='welcome'),#  欢迎界面
    url(r'welcome', admo.welcome),# 欢迎分界面
    # 用户
    url(r'userShow', us.show),# 用户展示
    url(r'userDel*', us.delete),# 用户删除
    url(r'userAdd', us.add),# 跳转到添加用户界面
    url(r'userSave', us.show),#用户存储
]
