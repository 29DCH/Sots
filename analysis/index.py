# 首页
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from administrators.models import User as us
from analysis.models import Carousel as ca

# 前台获取轮播数据
def carouselData(request):
    carousels = ca.objects.filter(state=1).get()
    result = {'carousels' : carousels}
    return JsonResponse(result, safe=False)