## 知识点02-Redux核心概念

### redux概念

redux是一个用来做状态管理的一个第三方的js库，redux并不是只能应用react中，你还可以把他应用在其他框架，vue也可以用。但是vue用起来肯定没有vuex方面。

如果你在项目中遇到复杂组件的通信，那你可以考虑使用redux，项目体量一般比较大。

redux学习：

- 流程复杂，初学者感觉比较麻烦的地方
- redux流程要求比较严谨，按照他的规则来设计。

哪个时候要用redux？

>当你不知道要不要用的时候，那就不要用。如果你解决不了问题，在使用redux

学习过程中，redux用起来还没有以前方便。尽量还是熟悉redux的开发流程

### 仓库集中存储

redux可以对应用中的状态进行集中管理

![1621540-a380963ba552729e.jpg](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/xuchaobo/20210928095647.png)



### redux工作流程

![timg-2](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/xuchaobo/20210928095702.jpeg)

React Components，项目中组件。

store：数据仓库

actions：通知对象，组件要完成数据修改，需要给reducer发一个通知

reducers：类似于vuex中mutation，完成仓库数据的初始化以及数据修改。

在代码学习过程中分为两步学习：

1. 如何从Store里面获取到数据。组件中要获取store的数据需要梳理流程
2. 组件中如何修改store仓库中的数据

Redux是一个第三方的js库，用来集中存储数据。redux单独使用不和react产生任何关系



