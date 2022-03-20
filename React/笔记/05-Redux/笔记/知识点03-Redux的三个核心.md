## 知识点03-Redux的三个核心

### 三大核心

Store：代表仓库，在这个仓库里会有state用来存放数据。你可以理解位数据容器。以前在组件内部定义state，现在可以存放Store里面state对象

Action：代表通知对象，对于仓库数据的修改，我们必须要提供一个通知对象，通知reducer对数据进行修改的时候，遵循哪些修改规则。

reducer：对仓库数据进行初始化的工作，以及接受到action通知对数据进行修改。

在项目中使用redux流程

1. 下载redux包

    redux是第三方的js库，下载这个库，引入到项目中

    单独学习redux的规范，将redux和react集合。

    ```js
    yarn add redux
    ```

2. 在你的src目录下面创建一个文件夹redux，在文件夹里面store.js

    创建仓库的时候需要用法createStore

    ```js
    /**
     *  createStore创建一个仓库，用于存放数据
     *  创建仓库时候，需要定义state 通过在函数里面设计的
     *  在函数中返回了仓库中state
     */
    const store = createStore(function(state=0){
        return state
    })
    ```

    createStore这个函数在项目启动的时候就会执行一次，就是为了将数据进行初始化。

    仓库在进行数据初始化的时候，可以是基本数据类型，也可以是对象

    ```js
    const store = createStore(function(state={id:1,username:"xiaowang"}){
        console.log("仓库数据正在加载。。。");
        return state
    })
    ```

    

3. 获取到仓库的数据

    通过仓库store对象调用getState获取到仓库里面的数据

    仓库必须要返回state，才可以同getState来获取到数据

    ```js
    console.log(store.getState());
    ```

4.  修改仓库的数据

    我们必须要提供两个额外的内容才能修改仓库的数据

    - action：通知对象，在通知对象里面提供了数据的修改方案，要修改的数据
    - reducer：修改store里面数据的唯一方式，提供一个reducer对象

    创建action通知对象

    ```js
    const action = {
        type:"addCount",
        payload:1
    }
    const action2 = {
        type:"reduceCount",
        payload:2
    }
    ```

    本质上就是一个Object对象，但是这个通知对象必须套type属性，你也可以传递其他属性，用于参数的传递。

    创建reducer对象

    ```js
    function reducer(state=0,action){
        // switch里面一定要有default默认值，返回默认state，程序初始化就会执行reducer
        switch(action.type){
            case "addCount":
                return state+action.payload
            case "reduceCount":
                return state-action.payload
            default:
                return state
        }
    }
    ```

    reducer在仓库里面只会有一个，reducer里面通过switch来判断你对哪个数据进行修改，修改的值位多少。通过派发过来action进行判断

    reducer是一个纯函数，将这个纯函数交给createStore，调用函数处理业务逻辑。

    >简单来说，一个函数的返回结果只依赖于它的参数，并且在执行过程里面没有副作用，我们就把这个函数叫做纯函数

    关于reducer里面数据修改，返回的一个newState，这个值最好就是之前state不是同一个对象。

    React里面要使用redux，如果你的对象是同一个，修改过后页面不会刷新。

    ```js
    switch (action.type) {
            case "update":
                state.username = action.payload
                return {...state}
            default:
                return state
        }
    ```

    在redux里面提供一个克隆函数，以后但凡数据又修改，可以调用一下函数完成对象克隆

    actionCreator这是提出的一个用于创建action的函数，action的创建器，就是为了产生action

    ```js
    function actionAC(type,payload){
        return {
            type,
            payload
        }
    }
    ```

    提供了一个函数，返回action对象。接受参数，设置给action动态传递数据

### 文件拆分

你在redux目录下面创建一个文件夹reducers，里面存放以后要用到reducer

```js
/**
 * 
 * @param {} state  仓库数据
 * @param {*} action  通知对象
 * @returns 
 */
export default function reducer(state = 0, action) {
    // switch里面一定要有default默认值，返回默认state，程序初始化就会执行reducer
    switch (action.type) {
        case "increment":
            return state += action.payload
        case "decrement":
            return state -= action.payload
        default:
            return state
    }
}

```

在redux目录下面在创建actions文件夹里面创建js文件

```js
export const increment = (payload)=>{
    return {
        type:"increment",
        payload
    }
}

export const decrement = (payload)=>{
    return {
        type:"decrement",
        payload
    }
}
```

在store下面只需要创建仓库

```js
import { createStore } from "redux"
import reducer from "./reducers/countReducer"
import {decrement,increment} from "./actions/countAction"

/** 第一步
 *  createStore创建一个仓库，用于存放数据
 *  创建仓库时候，需要定义state 通过在函数里面设计的
 *  在函数中返回了仓库中state
 */
const store = createStore(reducer)


// 模拟页面操作仓库数据
store.dispatch(decrement(20))
console.log(store.getState());
```



