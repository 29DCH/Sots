from django.db.models import Count

from analysis.models import DigitizedJob, DigitizedCity, Company


def comp_scale():
    datas = dict()

    sizes = DigitizedJob.objects.values_list('compSize').annotate(sum=Count('id')).order_by('-sum')
    datas['compscalenum'] = []
    for obj in sizes:
        datas['compscalenum'].append({'value':obj[1], 'name':obj[0]})

    datas['compcitynum'] = []
    citys = DigitizedCity.objects.values_list('sum', 'cityname').order_by('-sum',)[:10]
    for obj in citys:
        datas['compcitynum'].append({'value':obj[0], 'name':obj[1]})

    datas['compsizenum'] = dict()
    datasalary = []
    datasalary.append({'value':100, 'name':'test1'})
    datasalary.append({'value':150, 'name':'test2'})
    datas['compsizenum']['datasalary']=datasalary

    datajobnum = []
    datajobnum.append({'value':100, 'name':'test10'})
    datajobnum.append({'value':150, 'name':'test20'})
    datas['compsizenum']['datajobnum'] = datajobnum

    datacitydata = []
    datacitydata.append({'value': [10,20,30], 'name': 'test10'})
    datacitydata.append({'value': [40,50,60], 'name': 'test20'})
    datacitydata.append({'value': [40,50,60], 'name': 'test30'})
    datas['compsizenum']['datacitydata'] = datacitydata

    compplace = []
    compplace.append('hahah')
    compplace.append('heheh')
    datas['compsizenum']['compplace'] = compplace

    return datas


def comp_status():
    datas = dict()
    indus = Company.objects.values_list('compIndustry').annotate(sum=Count('id')).order_by('-sum')[:15]
    datas['comptype'] = []
    for obj in indus:
        datas['comptype'].append({'value':obj[1], 'name':obj[0]})
    datas['compnature'] = []
    return datas