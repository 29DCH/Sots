# 首页
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from administrators.models import User as us

# 提交轮播数据
def carouselData(request):
    pass