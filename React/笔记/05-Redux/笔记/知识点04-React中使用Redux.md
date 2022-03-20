##  知识点04-React中使用Redux

为了方便 开发，redux作者提供了一个插件react-redux，让我们能够在react非常方便集成redux

要将组件和redux产生关联，获取数据

组件要进行分类：

UI组件：只代表UI页面的呈现，不涉及到业务逻辑设计。没有状态

容器组件：负责管理数据和业务逻辑，有状态。

使用redux流程：

1. 下载依赖包

    ```js
    yarn add react-redux
    ```

2. 将仓库暴露出去，在index.js文件引入仓库

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
    
    export default store
    ```

    index.js引入仓库

    ```js
    import store from "./redux/store"
    ```

3. react-redux这个包提供了一个容器组件Provider组件

    ```js
    import { Provider } from "react-redux"
    
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    );
    ```

    React-redux这个库里面提供了一个组件provider组件，这个组件是一个容器组件。用于注入一个store，包含所有子组件才具备了从仓库里面获取数据的能力。你可以理解位Vue中 store注入

    ```js
    new Vue({
        store:store
    })
    ```

    在开发中一般会在根组件最外层添加Provider组件。

4. 在组件中要使用conncet高阶组件来react组件和redux连接

    ```js
    import React, { Component } from 'react'
    import {connect} from "react-redux"
    
    class Main extends Component {
        componentDidMount(){
            console.log(this.props);
        }
        render() {
            return (
                <div>
                    Main组件
                </div>
            )
        }
    }
    export default connect()(Main)
    
    ```

    在props对象里面会多出一个disptach的函数，这个函数可以用于派发action，请求reducer修改仓库数据

    要获取到redux里面state的数据需要给connect传递一个回调函数。自己定义接受数据的时候，名字

    ```js
    import React, { Component } from 'react'
    import {connect} from "react-redux"
    
    class Main extends Component {
        componentDidMount(){
            console.log(this.props);
        }
        render() {
            return (
                <div>
                    Main组件
                    redux数据：{this.props.number}
                </div>
            )
        }
    }
    // 将redux里面的state数据，放在props对象身上
    const mapStateToProp = (state)=>{
        return {
            number:state
        }
    }
    export default connect(mapStateToProp)(Main)
    
    ```

    connect的使用：

    React提供的一个高阶函数，将UI组件变为容器组件（只有容器组件才具备获取redux数据能力），就可以在组件内部接受外部数据，redux来获取的数据。你也能获取到一个dispatch函数，通过这个函数我们能实现对redux数据的修改。

    

