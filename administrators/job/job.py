from django.shortcuts import render, redirect
import analysis.models as m
import pandas
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
# 展示岗位
def show(request):
    return showNext(request )

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
    jobs = m.Job.objects.all()
    if jobs.count()%10 == 0:
        pageAll = jobs.count()/10
    else:
        pageAll = int(jobs.count()/10)+1
    paginator = Paginator(jobs, 10)  # Show 25 contacts per page
    try:
        contacts = paginator.page(page)
    except PageNotAnInteger:
        # If page is not an integer, deliver first page.
        contacts = paginator.page(page)
    except EmptyPage:
        # If page is out of range (e.g. 9999), deliver last page of results.
        contacts = paginator.page(paginator.num_pages)
    result ={'jobs': contacts, 'page':page, 'pageAll':pageAll}
    return render(request, 'job/jobShow.html', result)

# 删除岗位
def delete(request):
    jid = request.GET['jid']
    print('jid', 'xxxxxxxx')
    m.Job.objects.get(id=jid).delete()
    return show(request)

# 跳转到添加岗位界面
def add(request):
    return  render(request, 'job/jobAdd.html')

# 存储岗位
def save(request):
    JobName = request.POST['JobName']
    JobPlace = request.POST['JobPlace']
    JobSalary = request.POST['JobSalary']
    JobAdvantage = request.POST['JobAdvantage']
    releaseTime = request.POST['releaseTime']
    jobNeed = request.POST['jobNeed']
    educationRequire = request.POST['educationRequire']
    experienceRequire = request.POST['experienceRequire']
    skillRequire = request.POST['skillRequire']
    jobLink = request.POST['jobLink']
    jobInfo = request.POST['jobInfo']
    jobNature = request.POST['jobNature']
    jobLabels = request.POST['jobLabels']

    job = m.Job(JobName=JobName, JobPlace=JobPlace,
             JobSalary=JobSalary,JobAdvantage=JobAdvantage,
             releaseTime=releaseTime,jobNeed=jobNeed,
             educationRequire=educationRequire,experienceRequire=experienceRequire,
             skillRequire=skillRequire,jobLink=jobLink,jobInfo=jobInfo,
             jobNature=jobNature,jobLabels=jobLabels)
    job.save()
    return show(request)

# 跳转到编辑岗位界面
def edit(request):
    jid = request.GET['jid']
    job = m.Job.objects.get(id=jid)
    return render(request, 'job/jobEditor.html', {'job' : job})

# 更新岗位
def update(request):
    jid = request.POST['jid']
    JobName = request.POST['JobName']
    JobPlace = request.POST['JobPlace']
    JobSalary = request.POST['JobSalary']
    JobAdvantage = request.POST['JobAdvantage']
    releaseTime = request.POST['releaseTime']
    jobNeed = request.POST['jobNeed']
    educationRequire = request.POST['educationRequire']
    experienceRequire = request.POST['experienceRequire']
    skillRequire = request.POST['skillRequire']
    jobLink = request.POST['jobLink']
    jobInfo = request.POST['jobInfo']
    jobNature = request.POST['jobNature']
    jobLabels = request.POST['jobLabels']

    job = m.Job.objects.get(id=jid)
    job.JobName = JobName
    job.JobPlace = JobPlace
    # job.JobSalary = JobSalary
    job.JobAdvantage = JobAdvantage
    job.releaseTime = releaseTime
    job.jobNeed = jobNeed
    job.educationRequire = educationRequire
    job.experienceRequire = experienceRequire
    job.skillRequire = skillRequire
    job.jobLink = jobLink
    job.jobInfo = jobInfo
    job.jobNature = jobNature
    job.jobLabels = jobLabels

    job.save()
    return show(request)

def readDate():
    pa = pandas.read_csv(r'D:/java_data.csv',encoding='gbk', header=None,names=['JobName',
        'JobPlace', 'JobSalary', 'JobAdvantage', 'releaseTime', 'jobNeed',
        'educationRequire', 'experienceRequire', 'skillRequire', 'jobLink',
        'jobInfo', 'jobNature', 'jobLabels'])
    # pa = pandas.read_csv(r'D:/data.txt', header=None, names=['a', 'b', 'c'])
    print(pa.head(5))
