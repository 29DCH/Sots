from django.db import models
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.urls import reverse

class User(models.Model):
    username = models.CharField(max_length=10)
    password = models.CharField(max_length=10)

def show(request):
    users = User.objects.all()

    return render(request, 'user/userShow.html', {'lists' : users})