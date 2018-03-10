from sklearn import metrics
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt


# TODO 接收一个求职者的基本信息  list结构  如['20','4', '2', '2000']    处理后进行匹配
# TODO(hk): 可以在用户点击搜索页面时就将模型训练好，匹配时调用模型即可，节约时间（训练与预测分离）
def predic(user:list):
    # 读取数据
    # TODO 路径还要考虑一下是否设为参数
    data = pd.read_csv('analysis/result/newModel.csv')
    feature_cols = ['skill', 'experience', 'education', 'compSize']
    X = data[feature_cols]
    y = data['salary']

    # 划分测试集和训练集
    X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=1)

    # 线性回归拟合
    lin_reg = LinearRegression()
    model = lin_reg.fit(X_train, y_train)
    print(model)
    print(lin_reg.intercept_)

    result = zip(feature_cols, lin_reg.coef_)
    print('拟合结果')
    for i in result:
        print(i)

    df = pd.DataFrame([user])
    pred_result = lin_reg.predict(df)
    print('预测结果', pred_result)
    return pred_result


if __name__ == '__main__':
    predic()
