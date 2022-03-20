# Redux

## 知识点01-Redux核心概念

### redux概念

`概念`：redux是一个用来做状态管理的一个第三方的js库，redux并不是只能应用react中，也可以应用在其他框架例如vue。但是vue用起来没有vuex方便。

`应用场景：`

- 项目中有复杂组件的通信、项目体量较大等场景可以使用redux。
- 当你不知道要不要用的时候，那就不要用。如果你解决不了问题，在使用redux

`redux学习：`

- 流程复杂，初学者感觉比较麻烦的地方
- redux流程要求比较严谨，按照他的规则来设计。



### 仓库集中存储

redux可以对应用中的状态进行集中管理

![1621540-a380963ba552729e.jpg](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/xuchaobo/20210928095647.png)



### redux工作流程

![timg-2](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/xuchaobo/20210928095702.jpeg)

React Components:项目中使用redux的UI组件。

store：数据仓库

actions：通知对象，组件要完成数据修改，就必须要给reducer发一个通知对象action，告知reducers按照怎么的规则来修改数据

reducers：类似于vuex中mutation，完成仓库数据的初始化以及数据修改。

在代码学习过程中分为两步学习：

1. 如何从Store里面获取到数据。组件中要获取store的数据需要梳理流程
2. 组件中如何修改store仓库中的数据

Redux是一个第三方的js库，用来集中存储数据。redux单独使用不和react产生任何关系





## 知识点02-原生使用Redux(不使用saga、umi.js、不拆分)

### 背景介绍

- 由于redux不是依赖与react，所以在其他框架也可以使用redux，依赖下载命令：

  - ```js
    yarn add redux
    ```

- 如果在react中使用，react提供了react-redux插件，供我们引入使用

  - ```js
    yarn add react-redux
    ```

### 配置及使用

- `步骤一：配置redux:`

  - 再你的项目的src目录下面创建一个文件夹redux，这个文件夹就是今后放redux的文件夹。在文件夹里面创建store.js文件，这个文件就相当于是redux的入口文件了,文件夹中配置如下(不拆分的情况，着重介绍各方法的使用，实际开发中会进行拆分)：

  - ```js
    import { createStore } from "redux"
    
    
    /** 第一步：创建仓库
     *  1、调用redux提供的createStore方法创建一个仓库，用于存放数据
     *  2、创建仓库时候，需要通过reducer初始化数据,reducer中默认返回一个state
     *  3、reducers作用是完成仓库数据的初始化以及数据修改，也是修改数据的唯一方式  类似于vuex中的mutation.
     *  4、仓库store是一个对象，返回的state是用来存放数据的
     */
    const store = createStore(reducer)
    
    
    /** 第二步：获取仓库数据
     *  1、仓库store提供了getState()方法用户获取state中的数据
     *  2、这一步只是介绍演示可以通过getState方法获取state中的数据，同时知道store方法提供了getState这个方法
     * */
    console.log(store.getState());
    
    
    /**第三步：修改仓库的数据
    *1、修改仓库必须要提供两个额外的内容才可以修改，一个是action  一个是reducer
     * action：是一个通知对象，告诉reducer按照怎样的规则来对数据进行修改。本质就是一个对象（obj）,只是其必须要有   			 type属性。
     * reducer：初始化仓库数据、修改state中的数据。本质就是一个纯函数，接受两个参数来工作：先前的状态（state）、		   action；根据通知对象action来决定执行哪种更新，并返回新的值；如果不需要更新会返回原来的状态
     */
    
    
    /**
     * 第四步：定义一个action
     * 1、action其实就是一个对象（obj）,只是其必须要有一个type属性，用于reducer识别
     * 2、可以设置payload属性，为修改reducer提供数据
    */
    const action = {
        type: "addCount",
        payload: 1
    }
    const action2 = {
        type: "reduceCount",
        payload: 2
    }
    
    /**
     * 第五步：定义一个reducer
     * 1、reducer是一个纯函数,接受两个参数来工作，第一个参数：先前的状态（state）、第二个参数：通知对象action
     * 2、根据通知对象来决定要执行那个更改，并返回新值，如果不需要更改，就返回先前的状态值
     * 3、注意reducer函数一定要有返回默认值（要默认返回一个state），因为reducer函数还有初始化仓库的作用
    */
    function reducer(state = 1, action) {
        // switch里面一定要有default默认值，返回默认state，程序初始化就会执行reducer
        switch (action.type) {
            case "addCount":
                return state + action.payload
            case "reduceCount":
                return state - action.payload
            case "cheng":
                return state * action.payload
            default:
                return state
        }
    }
    
    ```

- `步骤二：在ui组将中使用Redux（获取值、修改数据）：`

  - 1、首先需要使用react-redux提供的provider高阶组件对项目的根组件进行包裹并注入store。

    - 在项目根目录下的index.js对立面的根组件进行包裹

    - ```js
      import React from 'react';
      import ReactDOM from 'react-dom';
      import App from './App';
      import store from "./redux/store"
      import { Provider } from "react-redux"
      
      ReactDOM.render(
        // 使用react-redux提供的Provider容器组件包裹根组件，并注入store
        // 在开发中一般会在根组件最外层添加Provider组件
        // 这样项目中所有的子组件才具备从store中获取数据的能力，也不用每个子组件都去使用Provider包裹
        <Provider store={store}>
          <App />
        </Provider>,
        document.getElementById('root')
      );
      ```

  - 2、连接UI组件与Redux并在组件中使用redux

    - 以项目src/components/user.jsx组件为例

    - ```js
      //若组件为类组件 使用方法如下
      
      import React, { Component } from 'react'
      import {connect} from "react-redux"
      import {getAllUser} from "../api/user"
      
      class User extends Component {
          async componentDidMount(){
            
              //修改state中的数据
              this.props.dispatch({
                   type:"updateUser",
                   payload:[{id:1}]
               })
              
          }
          
          render() {
              return (
                  <div>
            		//获取redex中的数据      
                      {this.props.users.length}
                  </div>
              )
          }
      }
      
      
      /**
       * 第二步：定义一个函数作为connect高阶组件的回调
       * 说明：
       * 1、将redux里面的state数据，放在UI组件props对象身上
       * 2、这样后续获取store中的方法或数据就可通过props获取
       * 3、这里加了一个键名users：xxxx，那么后续使用就会通过.user获取
       * 4、获取pispatch方法：this.props.dispatch
       * 5、获取某个数据：this.props.users
       * 
      */
      const mapStateToProps = (state)=>{
          return {
              users:state.user.users
          }
      }
      
      
      /**
       * 第一步：连接Redux（类组件）
       * 说明：
       * 1、在进行该步之前，还需要使用react-redux提供的Provider容器组件包裹根组件并注入store，这一步在根目录的index.js（项目入口文件）中进行，详见该文件
       * 2、使用Provider包裹后的组件才具备从store中获取数据的能
       * 3、使用react-redux插件提供的connect高阶函数包裹UI组件，使UI组件变为容器组件，实现redux与UI组件的连接（只有容器组件才具有获取store中数据的能力）
       * 4、这时候在组件的props对象里面就会多出一个disptach的函数，这个函数可以用于派发action，请求reducer修改仓库数据
       * 5、如果需要获取state中的数据需要给connect传递一个回调函数，详见第二步
       * 
      */
      
      
      // 如果不需要获取state中的数据，只修改state中数据或其他操作，可不给connect传递回调函数
      // export default connect()(User)
      
      // 如果需要获取state中数据，需要给connect高阶函数传递一个回调
      export default connect(mapStateToProps)(User)
      ```

    - ```js
      //若组件为函数组件使用方法如下
      
      import React from 'react'
      //引入两个hook来使用redux
      //useDispatch实现dispatch的作用
      //useSelector获取state中的数据
      import {useDispatch, useSelector} from 'react-redux'
      
      export default function Header() {
          const dispatch = useDispatch()
          
          //获取state中的数据
          const users = useSelector((state) => {
              return state.users
          })
          
          const changeUsers = ()=> {
              
              //修改state中的数据
              dispatch({
                   type:"updateUser",
                   payload:[{id:1}]
               })
          }
          return (
              <div>
                  子组件
                  <h3>{users}</h3>
                  <button onClick={changeUsers}>修改current</button>
              </div>
          )
      }
      ```







## 知识点03-原生结合sage+拆分合并

### 背景介绍

- redux本身无法直接发送异步请求，需要使用到第三方的插件，也称为中间价。

     1.中间件有很多：logger、redux-thunk、redux-saga

     2.redux-saga使用了generator编程，较多框架都是基于sage来封装的。比如后面的dva、umi都是基于saga来封装。

     3.所以我们着重介绍sage的学习

  

- redux中异步请求发送可以由两种方案：
  1. 在组件里面发送异步请求。将获取到结果，保存状态机，其他组件可以使用
  2. 在redux中通过中间件的方式来发送异步请求

### 配置及使用

- `步骤一：配置并拆分redux:`

  - 再你的项目的src目录下面创建一个文件夹redux，这个文件夹就是今后放redux的文件夹。在redux文件夹里面创建store.js文件，这个文件就相当于是redux的入口文件了；在redux文件夹里面新建actions文件夹，用于放拆分的action模块；在redux文件夹里面新建reducers文件夹，用于放拆分的reducer模块；再在redux文件夹里面新建一个saga用于存放saga的配置文件：

  - 那么此时文件层级就是：

    - src/redux/store.js
    - src/redux/actions/xxx.js
    - src/redux/reducers/xxx.js
    - src/redux/saga/xxx.js

  - 第一步：`新建仓库:`

    - 在redux/store.js文件中创建数据仓库并配置

    - ```js
      import { createStore,applyMiddleware } from "redux"
      import bigReducer from "./reducers" //引入合并的reducer，具体合并的方式见后面介绍
      import {composeWithDevTools} from "redux-devtools-extension"//如果需要使用DevTools工具就引入
      import createSagaMiddeleware from "redux-saga"// 引入saga中间件创建器
      import saga from "./saga/index"// 引入sage配置文件，具体配置方式见后面介绍
      
      
      // 第一步：创建仓库，如果要使用浏览器的Devtools工具，就在上面引入composeWithDevTools，并包裹后面的函数
      const store = createStore(bigReducer,composeWithDevTools(applyMiddleware(reduxLogger,sagaMiddeleware)))
      // 第一步：创建仓库，如果不使用浏览器的Devtools工具，就不需要composeWithDevTools包裹
      // const store = createStore(bigReducer,applyMiddleware(reduxLogger,sagaMiddeleware))
      
      // 第二步：调用createSagaMiddeleware（sage中间创建器）函数生成saga中间件
      const sagaMiddeleware = createSagaMiddeleware()
      
      // 第三步：加载saga配置文件，注意：一定要在仓库创建后加载saga配置文件
      sagaMiddeleware.run(saga)
      
      // 第四步：UI组件中使用引入了saga的redux  详见components/User
      
      export default store
      
      
      //说明：
      1、在实际开发中均会进行拆分，会将action、reduce等配置或模块提取出去方便管理
      2、所以现在的store.js 文件中就没有上面知识点02中介绍的在store.js 中进行action reducer的配置代码了
      3、会提取出去拆分之后在合并到一个文件 在需要的地方引入 比如上面的第二行 引入了合并的reducer文件
      ```

  - 第二步：`新建sage配置文件:`

    - 在redux/saga下新建index.js（也可以是其他名字，例如main.js 等等）

    - ```js
      import {call,put,takeEvery} from "redux-saga/effects" //引入redux-saga/effects提供的三个方法，作用后面有介绍
      //因为saga中发送异步请求获取到数据后需要对state中的数据进行修改，所以这里需要引入拆分合并之后的某一个action，具体的拆分合并详见后面介绍
      import {InitUserAC} from "../actions"
      import {getAllUser} from "../../api/user" //引入saga中需要发送的网络请求
      
      
      // saga使用generator编程 定义generator执行器 *表示generator生成器
      // 生成器可以根据需求定义多个，比如这里定义的checkItem用户获取所有用户
      // 你也可以定义其他的生成器完成其他的需求，例如再定义一个getStudentList用户获取学生列表
      function *checkItem(){
      
          // 第一步：发送异步，获取所有用户
          const res = yield call(getAllUser)
          console.log("saga配置中",res.data.data);
      
          // 第二步：异步请求获取到结果后，调用put方法将结果派发给reducer修改state中的数据
          // 说明：1、put封装了dispatch，通过put相当于继续执行dispatch去修改state
          //      2、put跟dispatch一样也是接受一个通知对象action工作，但是这里是一个函数InitUserAC
          //      3、是因为这个InitUserAC函数有返回值，返回一个对象，所以这里写函数不会报错
          //      4、如果你随便写一个函数，函数没有返回值，是会报错的
          yield put(InitUserAC(res.data.data))
      }
      
      function *getStudentList(){
      
          // 获取学生列表业务逻辑
      
      }
      
      
      
      
      // 这段代码，可以根据前台UI组件调用dispatch传递过来键，映射到对应的generator生成器，并执行里面的代码
      export default function *index(){
          yield takeEvery("getUser",checkItem)
      }
      ```

  - 第三步:`拆分合并action、reducer`
  
    - 在redu文件夹下新建actions文件夹，用于拆分action  再在该文件夹下面新建模块文件 
  
    - 接下来以 redux/actions/userActions.js     redux/actions/countAction.js   redux/actions/index.js(合并的文件) 为例子
  
    - ```js
      //userActin.js文件
      
      
      //说明:
      1、userAction.js文件里面就写与user有关的代码
      2、因为action本质是一个对象，但是必须要有type属性 
      3、所以将action写成函数的形式必须要以一个返回值且为对象的形式  并将函数暴露出去
      4、同时函数接受一个参数payload 用于将新数值传递到reducer中去
      
      export const InitUserAC = (payload)=>{
          return {
              type:"updateUser",
              payload
          }
      }
      ```
  
    - ```js
      //countAction.js
      
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
  
    - ```js
      //index.js
      
      说明:
      1、一般拆分基本都是在模块文件夹下新建一个 index.js 文件来进行合并   
      2、在这个文件中将暴露出来的其他action统一引入再暴露出去
      3、其他需要使用action的地方就不用在一个个去引入了，直接引入这个 index.js 即可
      2、合并代码如下：
      
      
      export {addCartAC,addNumAC,reduceNumAC} from "./shopAction"
      export {InitUserAC} from "./userAction"
      
      
      ```
  
    - 在redu文件夹下新建reducers文件夹，用于拆分reducer   再在该文件夹下面新建模块文件 
  
    - 接下来以 redux/reducers/userReducer.js   redux/reducers/countReducer.js   redux/reducers/index.js为例子
  
    - ```js
      //userReducers.js
      说明：
      1、还是跟未拆分一样 reducer是一个纯函数，接受两参数 state  action来工作
      2、必须要默认返回一个state出去 因为在创建仓库的时候 需要reducer对仓库进行初始化
      
      
       export default function reducer(state = { users: [] },  action) {
           
          switch (action.type) {
              // 获取到数组，将数据更新state仓库
              case "updateUser":
                  return {
                      ...state,
                      users:action.payload
                  }
                  
               // switch里面一定要有default默认值，返回默认state，程序初始化就会执行reducer
              default:
                  return state
          }
      }
      ```
      
    - ```js
      //countReducers.js
      
      
      export default function reducer(state = 10, action) {
          switch (action.type) {
              case "increment":
                  return {
                      ...state,
                      count: state += action.payload
                  }
              case "decrement":
                  return {
                      ...state,
                      count: state -= action.payload
                  }
              default:
                  return state
          }
      }
      ```
    
    - ```js
      //index.js
      说明：
      1、在index.js 中对拆分的reducer进行合并
      2、与action合并不同的是 action合并相当于是把分散暴露的文件引入到一起暴露出去
      3、而reducer合并redux专门提供了 combineReducers 函数来进行合并
      
      
      import {combineReducers} from "redux"//引入redux提供的combineReducers函数
      import countReducer from "./countReducer"
      import userReducer from "./userReducer"
      
      /** 
       * 合并reducer
       * 1、使用redux提供的combineReducers方法将多个reducer合并成一个reducer，并暴露出去
       * 2、将合并的reducer以combineReducers的名字暴露出去
      */
      export default combineReducers({
          counts:countReducer,
          user:userReducer
      })
      ```
    
  - 第四步：`在UI组件中使用redux`
  
    - 此处以src/components/User.jsx组件为例
  
    - 跟原生使用一样，同样也需要使用react-redux提供的Provider容器组件包裹根组件并注入store
  
    - 并在使用redux的组件使用connect高阶组件包裹UI组件，并为connect函数提供一个回调，在回调中将state加在props上
  
    - ```js
      import React, { Component } from 'react'
      import {connect} from "react-redux"
      import {getAllUser} from "../api/user"
      
      class User extends Component {
          async componentDidMount(){
              // const res = await getAllUser()
              // console.log(res);
              // this.props.dispatch({
              //     type:"updateUser",
              //     payload:[{id:1}]
              // })
      
              //通过pispatch派发action到saga中发送异步请求
              this.props.dispatch({
                  type:"getUser"
                  payload:[{id:1}]
              })
          }
          render() {
              return (
                  <div>
                  	
                     //获取数据
                      {this.props.users.length}
                  
                  </div>
              )
          }
      }
      
      
      /**
       * 第二步：定义一个函数作为connect高阶组件的回调
       * 说明：
       * 1、将redux里面的state数据，放在UI组件props对象身上
       * 2、这样后续获取store中的方法或数据就可通过props获取
       * 3、这里加了一个键名users：xxxx，那么后续使用就会通过.user获取
       * 4、获取pispatch方法：this.props.dispatch
       * 5、获取某个数据：this.props.users
       * 
      */
      const mapStateToProps = (state)=>{
          return {
              users:state.user.users
          }
      }
      
      
      /**
       * 第一步：连接Redux（类组件）
       * 说明：
       * 1、在进行该步之前，还需要使用react-redux提供的Provider容器组件包裹根组件并注入store，这一步在根目录的index.js（项目入口文件）中进行，详见该文件
       * 2、使用Provider包裹后的组件才具备从store中获取数据的能
       * 3、使用react-redux插件提供的connect高阶函数包裹UI组件，使UI组件变为容器组件，实现redux与UI组件的连接（只有容器组件才具有获取store中数据的能力）
       * 4、这时候在组件的props对象里面就会多出一个disptach的函数，这个函数可以用于派发action，请求reducer修改仓库数据
       * 5、如果需要获取state中的数据需要给connect传递一个回调函数，详见第二步
       * 
      */
      
      
      // 如果不需要获取state中的数据，只修改state中数据或其他操作，可不给connect传递回调函数
      // export default connect()(User)
      
      // 如果需要获取state中数据，需要给connect高阶函数传递一个回调
      export default connect(mapStateToProps)(User)
      
      
      
      
      //说明：
      1、以上的是类组件的使用方式
      2、如果是函数组件，跟上面原生使用的函数组件使用方式介绍的一致
      3、函数组件通过hook来使用redux
      ```







## 知识点04-umi.js结合dva使用redux

### 背景介绍:

- umi.js结合dva使用redux，是真实项目开发中实际用到的方式，上面几种方式可能在实际中使用的比较少，但是上面的几种方式是redux的基础。
- dva是一个轻量级的框架，它里面内置了redux和saga，已经封装好了并命名为model文件夹。使用中只需要在项目根目录下的src文件夹新建一个model文件夹，并管理model文件就能够实现redux状态管理与异步请求。
- 由于umi.js中又内置了dva，所以在实际React项目开发中，一般使用的是umi.js，状态机的话使用的是dva的状态机模式，两者结合使用。并且一般会使用在函数组件进行开发，所以后面介绍的也是基于函数组件来进行的。

### 配置及使用

- 第一步：`配置redux`

  - umi.js + dva 的配置就相对于上面的几种配置方式要简单得多，没有什么saga的配置也没有什么拆分合并，dva已经帮我们做好了这些

  - 直接在src文件夹下新建model文件夹，再在该文件夹新新建各个模块处理各自的逻辑。

  - 注意：一定要是名字为model的文件夹

  - 另外umi.js还为我们处理了在reducer中修改引用数据类型赋值引用地址不改变的问题，只需要在项目根目录下的.umirc.ts文件中设置如下语句开启

  - ```js
      // redux数据引用类型处理
      dva: {
        immer: true
      },
    ```

- 第二步：`model中各模块代码配置`

  - 下面以category.js模块为例   在model文件夹下新建category.js  这样状态机中就有一个category模块了

  - ```js
    import {login} from "../api/discover" //引入网络请求
    
    export default {
        
         namespace:"category",//开启命名空间
        
        //数据仓库state
        state:{
            user:"测试"
        },
        
        //reducer 修改state中数据
        //里面是各种修改state的函数，例如 update 函数
        //函数同样接受两个参数来工作 state 跟 action
        reducers:{
            
            updateUser( state, {payload} ) {
                console.log(payload);
                console.log(333);
                state.user = payload
                // user.banner = payload
                return state
            }
        },
        
        
        //异步请求必须要在effects中进行
        effects:{
            
            // 同样需要 * 来生成generator执行器
            //生成器接收第一个参数为通知对象action
            //这里为了方便直接从action中结构出payload参数
            
            *login({payload},{call,put}){
                console.log(payload);
                const res = yield call(login)
                console.log(res);
                
                // 修改数据
              if (res) {
                  //如果res有值就通过put继续派发action修改state中的值
                yield put( {type:"updateUser" ,  payload:res} )
              }
                
               //也可以将异步的结果return出去 这样在前台的UI组件在调用dispatch函数的时候就可以直接获取到异步请求的数据
              return res
                
            }
        }
    }
    ```

- 第三步：`UI组件中使用`

  - 下面以src/pages/category.jsx函数组件为例

  - ```js
    // 使用umi.js提供的方法来使用状态机,   引入下面两个方法
    // 一个是派发action 一个是获取状态机数据
    //useDispatch：派发action    useSelector：获取数据
    import { useDispatch, useSelector } from "umi"
    
    
    export default function category() {
      // 定义一个dispatch 方便后续使用状态机
      const dispatch = useDispatch();
        
      // 使用umi提供的useSelector方法获取状态机数据
      //由于一般一个模块中可能不止一个数据 所以一般都是从对象中解构出来，而不是在state.category后面再 .XXX
      //这里就解构一个user出来
      const { user } = useSelector(state => {
          
        //  return state.命名空间/模块文件名
        return state.category
      });
        
        
       // 生命周期函数
      useEffect(async () => {    
        // 使用状态机发送网络请求，获取数据 
        dispatch(
          {
          // dispatch必须要传递一个action过去，并且必须要有type属性
          // type属性如果models文件夹里面对应的模块设置了 namespace属性 即namespace:"category",  那么type后面就是 category/effects对象里面要发送的请求
          // 如果没有开启命名空间，那么就是模块的文件名称，例如：categoryModel
          // type: "categoryModel/getCategoryList",
    
          type: "category/getCategoryList",
          payload: { name }
    
        }).then(res => {
           //由于在model里面返回了异步的值 这里就可以直接得到异步的请求结果
        })
    
    
      }, []);
    }    
    ```

