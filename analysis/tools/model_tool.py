import math
import random

from django.db.models import Max, Min

from administrators.models import User
from analysis.digitization import get_experience
from analysis.models import Job, DiUser


def get_random_job_id():
    max = Job.objects.aggregate(Max('id'))
    min = Job.objects.aggregate(Min('id'))
    randid = random.randint(min['id__min'], max['id__max'])
    return randid


def saveas_diuser(user:User):
    diuser = DiUser()
    edu = user.highestEducation
    exp = user.workingTime
    gender = user.gender
    age = user.age

    diuser.user = user

    diuser.exp = get_experience(exp)
    diuser.age = int(abs(age-35)/5)
    if edu == '硕士及以上':
        diuser.edu = 5
    elif edu =='本科':
        diuser.edu = 3
    elif edu == '大专':
        diuser.edu = 1
    else:
        diuser.edu = 0

    if gender == '女':
        diuser.gender = 5
    else:
        diuser.gender = 0
    print(diuser, 'saved')
    diuser.save()
