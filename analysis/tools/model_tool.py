import random

from django.db.models import Max, Min

from analysis.models import Job


def get_random_job_id():
    max = Job.objects.aggregate(Max('id'))
    min = Job.objects.aggregate(Min('id'))
    randid = random.randint(min['id__min'], max['id__max'])
    return randid