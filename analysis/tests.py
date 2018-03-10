from datetime import datetime
import json
import pickle
import os
import pandas as pd
# Create your tests here.
import re
import redis

if __name__ == "__main__":
    colums = ['jobId', 'compSize', 'skill', 'experience', 'education', 'salary', 'keyword']
    # frame = pd.DataFrame(columns=colums)
    frame = pd.read_csv('../datas/data.csv')
    frame = frame[colums]
    print(frame.tail())
    frame.loc[frame.shape[0]] = {'jobId': 1, 'compSize': 1, 'skill': 1, 'experience': 1, 'education': 1,
                                     'salary': 1, 'keyword': 'java'}
    print(frame.tail())