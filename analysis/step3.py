from sklearn import metrics
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt


# TODO 修改模块  添加对外接口
# TODO 将访问过的数据放入redis  第二次访问的时候不重新计算
def step3():
    # 读取数据
    data = pd.read_csv('result/newModel.csv')
    # feature_cols = ['experience', 'education', 'compSize']
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
    #
    # # 预测
    # y_pred = lin_reg.predict(X_test)
    # print(y_pred)
    # print(type(y_pred))
    #
    # # 计算方差
    # RMSE = np.sqrt(metrics.mean_squared_error(y_test, y_pred))
    # print('RMSE = ', RMSE)

    # 预测 9,4.0,2,27.5
    df = pd.DataFrame([['20','4', '2', '2000']])
    pred_result = lin_reg.predict(df)
    print('预测结果', pred_result)

    # plt.figure(figsize=(10.8, 9.6))
    # plt.scatter(data.education, data.salary)
    # plt.ylabel(u"salary")  # 设定纵坐标名称
    # plt.grid(b=True, which='major', axis='y')
    # plt.title("education and salary")
    # plt.show()
    #
    # plt.figure(figsize=(10.8, 9.6))
    # plt.scatter(data.experience, data.salary)
    # plt.ylabel(u"salary")  # 设定纵坐标名称
    # plt.grid(b=True, which='major', axis='y')
    # plt.title("experience and salary")
    # plt.show()
    #
    # plt.figure(figsize=(10.8, 9.6))
    # plt.scatter(data.compSize, data.salary)
    # plt.ylabel(u"salary")  # 设定纵坐标名称
    # plt.grid(b=True, which='major', axis='y')
    # plt.title("compSize and salary")
    # plt.legend(data.compSize, loc='upper left')
    # plt.show()


if __name__ == '__main__':
    step3()
