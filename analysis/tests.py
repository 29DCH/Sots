from datetime import datetime
import pandas as pd
# Create your tests here.



if __name__ == "__main__":
    colums = {'jobId', 'compSize', 'skill', 'experience', 'education', 'salary'}
    # datacolums = {'jobId':1, 'compSize':1, 'skill':1,'experience':1,'education':1,'salary':1}
    frame = pd.DataFrame(columns=colums)
    # frame = pd.read_csv('result/newModel.csv')
    print(frame.tail())
    print(frame.shape[0])
    frame.loc[frame.shape[0]] = {'jobId':1, 'compSize':1, 'skill':1,'experience':1,'education':1,'salary':1}
    # frame.append()
    print(frame.tail())
    print(frame.shape[0])