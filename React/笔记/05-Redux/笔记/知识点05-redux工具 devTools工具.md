## 知识点05-redux工具 devTools工具

Redux DevTools这个工具是专门用于浏览器插件，提供redux数据的管理，数据追踪。vuex数据也能追踪

首先你需要安装chrome浏览器

https://www.google.cn/intl/zh-CN/chrome/

安装好谷歌浏览器之后，下载一个“Ghelper”插件，也叫谷歌上网助手，下载地址：http://googlehelper.net/

![image-20201204102856122](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/xuchaobo/20210817233925.png)

下载好“Ghelper”插件之后将其解压，并将这个插件加载到chrome中

![image-20201204103021868](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/xuchaobo/20210817234005.png)

重启浏览器，打开这个插件。会让你进行登录。

![image-20201204103123617](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/xuchaobo/20210817234026.png)

输入用户名和密码，接这个就可以访问chrome商店。

![image-20201204103244237](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/xuchaobo/20210817234034.png)

下面就可以正常的下载并安装这个插件。



在项目中需要安装插件，才能被浏览器插件识别

1. 下载插件

    ```js
    yarn add redux-devtools-extension
    ```

2. 在代码中引入这个插件,store.js中引入

    ```js
    import {composeWithDevTools} from "redux-devtools-extension"
    
    /** 第一步
     *  createStore创建一个仓库，用于存放数据
     *  创建仓库时候，需要定义state 通过在函数里面设计的
     *  在函数中返回了仓库中state
     */
    const store = createStore(reducer,composeWithDevTools())
    
    export default store
    ```

3. 你在浏览器运行代码，就可以看到，数据变化

![image-20210928164058713](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/xuchaobo/20210928164058.png)