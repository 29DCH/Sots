from django.shortcuts import render, redirect
from django.http import HttpResponse, StreamingHttpResponse
import analysis.models as m
import os
import pandas
from PIL import Image

# 首页轮播后台管理

def show(request):
    carousels = m.Carousel.objects.all()
    return render(request, 'carousel/carouselShow.html', {'carousels': carousels})

def delete(request):
    cid = request.GET['cid']
    m.Carousel.objects.get(id = cid).delete()
    return show(request)

def add(request):
    return render(request, 'carousel/carouselAdd.html')

def save(request):
    photo = request.FILES.get('photo_url')
    content_url = request.POST['content_url']
    # print(photo.name)
    # 校验是否重名
    if m.Carousel.objects.filter(photo_url=photo.name).count() != 0:
        return HttpResponse("错误")

    path_dst_file = os.path.join('administrators/static/image/carousel', photo.name)
    destination = open(path_dst_file, 'wb+')  # 打开特定的文件进行二进制的写操作
    for chunk in photo.chunks():  # 分块写入文件
        destination.write(chunk)
    destination.close()

    m.Carousel(photo_url=photo.name, content_url=content_url).save()
    return show(request)

def edit(request):
    # # 定义文件分块下载函数
    # def file_iterator(file_name, chunk_size=512):
    #     with open(file_name, 'rb') as f:  # 如果不加‘rb’以二进制方式打开，文件流中遇到特殊字符会终止下载，下载下来的文件不完整
    #         while True:
    #             c = f.read(chunk_size)
    #             if c:
    #                 yield c
    #             else:
    #                 break
    #
    # 提供下载页面
    # response = StreamingHttpResponse(file_iterator('administrators/static/image/carousel/2.jpg'))
    # response['Content-Type'] = 'application/octet-stream'
    # response['Content-Disposition'] = 'attachment;filename="{0}"'.format(
    #     '2.jpg')  # 此处kwargs['fname']是要下载的文件的文件名称
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
    (x, y) = im.size  # read image size
    x_s = 250  # define standard width
    y_s = 250  # calc height based on standard width
    out = im.resize((x_s, y_s), Image.ANTIALIAS)  # resize image with high-quality
    out.save(outfile)
    #删除临时文件夹中的图片
    os.remove(infile)

    return show(request)



