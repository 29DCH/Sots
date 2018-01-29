from django.db import models
from django.http import HttpResponse
from django.shortcuts import render

class Admin(models.Model):
    username = ''
    password = ''
    def check(self, request):
        self.username = request.POST['username']
        self.password = request.POST['password']
        if self.objects.get(username=self.username) == None :
            render(request, 'error.html')
