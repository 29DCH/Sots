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
import administrators.job.job as job
from analysis.views import access, into_mysql, write_djob, index, job_list
urlpatterns = [
    path('admin/', admin.site.urls),

    # 后台
    url(r'^$', admo.land),# 管理员登陆界面
    url(r'admin/checks', ad.checks, name='checks'),# 后台校验用户名和密码
    url(r'admin/main', ad.show_main, name='main'),# 主界面
    url(r'admin/welcome', ad.welcome, name='welcome'),#  欢迎界面
    url(r'admin/welcome', admo.welcome, name='welcome'),# 欢迎分界面
    # 用户
    url(r'admin/userShow', us.show, name='userShow'),# 用户展示
    url(r'admin/userDel*', us.delete, name='userDel'),# 用户删除
    url(r'admin/userAdd', us.add, name='userAdd'),# 跳转到添加用户界面
    url(r'admin/userSave', us.save, name='userSave'),# 用户存储
    url(r'admin/userEdit', us.edit, name='userEdit'),# 跳转到编辑用户界面
    url(r'admin/userUpdate', us.update, name='userUpdate'),# 用户更新
    # 岗位
    url(r'admin/jobShow', job.show, name='jobShow'),# 岗位展示
    url(r'admin/jobDel', job.delete, name='jobDel'),# 岗位删除
    url(r'admin/jobAdd', job.add, name='jobAdd'),# 跳转到添加岗位界面
    url(r'admin/jobSave', job.save, name='jobSave'),# 岗位存储
    url(r'admin/jobEdit', job.edit, name='jobEdit'),# 跳转到编辑岗位界面
    url(r'admin/jobUpdate', job.update, name='jobUpdate'),# 岗位更新

]
