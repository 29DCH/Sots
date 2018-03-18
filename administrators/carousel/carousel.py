from django.shortcuts import render, redirect
from django.http import HttpResponse, StreamingHttpResponse
import analysis.models as m
import os
import pandas
from PIL import Image
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

# 首页轮播后台管理

def show(request):
    return showNext(request)

def showNext(request):
    if 'flag' not in request.GET.keys():
        flag = '1'
    else:
        flag = request.GET['flag']
    # print('flag='+str(flag))
    if flag == '1':# 下一页
        # print('xxxxx')
        if 'page' not in request.GET.keys():
             page = 1
        else:
            page = request.GET['page']
            # print('page='+str(page))
            page = int(page)+1
            # print(page)
    elif flag == '0':# 上一页
        page = request.GET['page']
        page = int(page) - 1
        # print(page)
    # print(page)
    carousels = m.Carousel.objects.all()
    if carousels.count()%10 == 0:
        pageAll = carousels.count()/10
    else:
        pageAll = int(carousels.count()/10)+1
    paginator = Paginator(carousels, 10)  # Show 25 contacts per page
    try:
        contacts = paginator.page(page)
    except PageNotAnInteger:
        # If page is not an integer, deliver first page.
        contacts = paginator.page(page)
    except EmptyPage:
        # If page is out of range (e.g. 9999), deliver last page of results.
        contacts = paginator.page(paginator.num_pages)
    result ={'carousels': contacts, 'page':page, 'pageAll':pageAll}
    return render(request, 'carousel/carouselShow.html', result)

def delete(request):
    cid = request.GET['cid']
    m.Carousel.objects.get(id = cid).delete()
    return show(request)

def add(request):
    return render(request, 'carousel/carouselAdd.html')

def save(request):
    # 从前台获取图片，存入临时文件夹
    photo = request.FILES.get('photo_url')

    content_url = request.POST['content_url']
    carousel = m.Carousel(content_url=content_url, photo_url=photo.name, state=1)
    carousel.save()
    path_dst_file = os.path.join('administrators/static/image/update', photo.name)
    destination = open(path_dst_file, 'wb+')  # 打开特定的文件进行二进制的写操作
    for chunk in photo.chunks():  # 分块写入文件
        destination.write(chunk)
    destination.close()
    # 在临时文件夹中修改图片大小，存入正式文件夹
    infile = 'administrators/static/image/update/' + photo.name
    outfile = 'administrators/static/image/carousel/' + photo.name
    im = Image.open(infile)
    (x, y) = im.size
    x_s = 200
    y_s = 200
    out = im.resize((x_s, y_s), Image.ANTIALIAS)
    out.save(outfile)
    # 删除临时文件夹中的图片
    os.remove(infile)

    return show(request)
    # photo = request.FILES.get('photo_url')
    # content_url = request.POST['content_url']
    # # print(photo.name)
    # # 校验是否重名
    # if m.Carousel.objects.filter(photo_url=photo.name).count() != 0:
    #     return HttpResponse("错误")
    #
    # path_dst_file = os.path.join('administrators/static/image/carousel', photo.name)
    # destination = open(path_dst_file, 'wb+')  # 打开特定的文件进行二进制的写操作
    # for chunk in photo.chunks():  # 分块写入文件
    #     destination.write(chunk)
    # destination.close()
    #
    # m.Carousel(photo_url=photo.name, content_url=content_url,state=1).save()
    # return show(request)

def edit(request):
    cid = request.GET['cid']
    carousel = m.Carousel.objects.get(id=cid)
    return render(request, 'carousel/carouselEdit.html', {'carousel':carousel})


def update(request):
    # 从前台获取图片，存入临时文件夹
    photo = request.FILES.get('photo_url')
    id = request.POST['id']
    content_url = request.POST['content_url']
    carousel = m.Carousel.objects.get(id=id)
    carousel.content_url = content_url
    carousel.photo_url = photo.name
    carousel.save()
    path_dst_file = os.path.join('administrators/static/image/update', photo.name)
    destination = open(path_dst_file, 'wb+')  # 打开特定的文件进行二进制的写操作
    for chunk in photo.chunks():  # 分块写入文件
        destination.write(chunk)
    destination.close()
    # 在临时文件夹中修改图片大小，存入正式文件夹
    infile = 'administrators/static/image/update/'+photo.name
    outfile = 'administrators/static/image/carousel/'+photo.name
    im = Image.open(infile)
    (x, y) = im.size
    x_s = 250
    y_s = 250
    out = im.resize((x_s, y_s), Image.ANTIALIAS)
    out.save(outfile)
    #删除临时文件夹中的图片
    os.remove(infile)

    return show(request)



