from django.test import TestCase

# Create your tests here.
# from analysis.tools.NLtool import get_keyword
#
#
# def test():
#     tmp = "['岗位一：初级软件工程师', '岗位职责：', '1、负责对公司相应产品的日常开发工作；', '2、处理公司产品及项目中的bug。', '任职要求：', '1、熟悉JAVA、J2EE体系结构，掌握Spring、SpringMVC、Struts2、Hibernate/Mybatis等主流开发框架，MVC设计模式；', '2、掌握HTML、javascript、css、ajax、jquery等web开发技术，熟悉HTTP协议；', '3、熟练运用Sql语言完成数据库操作，至少熟悉一种主流数据库如MySQL、SQLServer、Oracle等。', '岗位二：中级软件工程师', '岗位职责：', '1、参与需求分析、评审、设计与开发；', '2、负责对公司相应产品的日常开发工作；', '3、负责公司产品及项目中功能模块的实现。', '任职要求：', '1、精通JAVA、J2EE体系结构，熟练掌握Spring、SpringMVC、Struts2、Hibernate/Mybatis等主流开发框架，MVC设计模式，了解RESTful架构风格；', '2、熟练掌握HTML、javascript、css、ajax、jquery等web开发技术，熟悉HTTP协议；', '3、有较好的数据库设计能力，熟练运用Sql语言完成数据库操作，至少熟悉一种主流数据库如MySQL、SQLServer、Oracle等。精通Mysql尤佳；', '4、熟悉netty，mina等异步框架开发经验者优先', '5、具有良好的学习及沟通能力、抗压强、富有团队精神。', '岗位三：高级软件工程师', '岗位职责：', '1、带领团队负责公司产品的设计和研发', '2、解决公司产品及项目中的关键问题和技术难题；', '3、负责团队内部员工的绩效考评和技能培训。', '任职要求：', '1、精通JAVA、J2EE体系结构，熟练掌握Spring、SpringMVC、Struts2、Hibernate/Mybatis等主流开发框架，熟悉编程规范；', '2、精通HTML、javascript、css、ajax、jquery等web开发技术，熟悉H5尤佳；', '3、精通多线程运作机制、具备优秀的识别和设计通用框架及模块的能力；', '4、较强的数据库设计能力，至少精通一种主流数据库如MySQL、SQLServer、Oracle等。对大规模数据存储与挖掘等有较强的驾驭能力；', '5，掌握分布式系统的设计和应用，熟悉分布式、缓存、消息等机制，能对分布式常用技术进行合理应用并解决问题。精通netty，mina等异步框架开发经验者优先；', '6、熟悉ESB、EDI、云计算等相关技术优先；', '7、具备良好的沟通能力和团队精神，能够有意识的培养和辅导团队中的其他同事。']"
#     print(tmp)
#     keywords = get_keyword(tmp)
#     print(keywords)


def test1():
    # coding: utf-8

    import numpy as np
    import matplotlib.pyplot as plt
    import matplotlib.patches as mpatches

    fig, ax = plt.subplots()

    # 多边形的中心
    xy5 = np.array([0.6, 0.6])

    polygon2 = mpatches.RegularPolygon(xy5, 6, radius=1,  color="c")
    ax.add_patch(polygon2)

    # 设置图形显示的时候x轴和y轴等比例
    ax.axis("equal")

    # 添加网格
    ax.grid()

    plt.show()

def test2():
    import numpy as np
    import matplotlib.pyplot as plt
    N = 20
    theta = np.linspace(0.0, 2*np.pi, N, endpoint=False)
    redii = 10 * np.random.rand(N)
    width = np.pi / 4 * np.random.rand(N);

    ax = plt.subplot(111, projection='polar')
    bars = ax.bar(theta, redii, width=width, bottom=0.0)

    for r, bar in zip(redii,bars):
        bar.set_facecolor(plt.cm.viridis(r/10.))
        bar.set_alpha(0.5)

    plt.show()


if __name__ == '__main__':
    test2()