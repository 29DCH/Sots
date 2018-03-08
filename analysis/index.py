# 首页
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from administrators.models import User as us
from analysis.models import Carousel as ca

# 前台获取轮播数据
def carouselData(request):
    carousels = ca.objects.filter(state=1)
    results = []
    result = {}
    for c in carousels:
        result['id'] = c.id
        result['photo_url'] = c.photo_url
        result['content_url'] = c.content_url
        results.append(result)
    return JsonResponse(results, safe=False)