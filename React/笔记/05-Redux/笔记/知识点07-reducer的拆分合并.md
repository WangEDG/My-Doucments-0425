## 知识点07-reducer的拆分合并

### reducer拆分合并

如果将所有的业务都放在一个reducer里面，以后业务越来越复杂不容易维护。

在开发过程中将reducer进行拆分。按照业务的名字来命名

每个reducer对应就是自己的业务。

```js
/**
 * 
 * @param {} state  仓库数据
 * @param {*} action  通知对象
 * @returns 
 */
export default function reducer(state = {
    count: 10,
}, action) {
    // switch里面一定要有default默认值，返回默认state，程序初始化就会执行reducer
    switch (action.type) {
        // 计数器
        case "increment":
            return {
                ...state,
                count: state.count += action.payload
            }
        case "decrement":
            return {
                ...state,
                count: state.count -= action.payload
            }
        default:
            return state
    }
}

```

shopreducer存放购物车业务

```js
/**
 * 
 * @param {} state  仓库数据
 * @param {*} action  通知对象
 * @returns 
 */
// const state = 
export default function reducer(state = {
    cartList: [
        {
            id: 1, imgname: './images/model1.jpg',
            title: 'Python实战开发',
            content: '精通Python学习指南',
            price: 234
        },
        {
            id: 2, imgname: './images/model2.jpg',
            title: 'Java实战开发',
            content: '精通Java学习指南',
            price: 674
        },
        {
            id: 3, imgname: './images/model3.jpg',
            title: 'H5实战开发',
            content: '精通H5学习指南',
            price: 345
        },
        {
            id: 4, imgname: './images/model4.jpg',
            title: '测试框架开发',
            content: '精通测试框架学习指南',
            price: 123
        }
    ],
    shopCart: []
}, action) {
    // switch里面一定要有default默认值，返回默认state，程序初始化就会执行reducer
    switch (action.type) {
        // 购物车
        case "addCart":
            const obj = state.cartList[action.index]
            obj.num = 1;
            state.shopCart.push(obj)
            return {
                ...state,
                shopCart: [...state.shopCart]
            }
        case "addNum":
            state.shopCart[action.index].num++
            return {
                ...state,
                shopCart: [...state.shopCart]
            }
        case "reduceNum":
            state.shopCart[action.index].num--
            return {
                ...state,
                shopCart: [...state.shopCart]
            }
        default:
            return state
    }
}
```

在store.js里面需要引入一个唯一的reducer，你需要将拆分完毕的reducer合并在一起，统一加载

在redux/reducer文件夹下面创建index.js文件

```js
import {combineReducers} from "redux"
import countReducer from "./countReducer"
import shopReducer from "./shopReducer"

// 将多个reducer合并位一个reducer
export default combineReducers({
    counts:countReducer,
    shop:shopReducer
})
```

- combineReducers将所有的reducer合并起来，一定要满足合并的代码是reducer代码
- 合并过后需要给每个reducer增加一个命名空间，防止case名字重复

在store引入一个唯一的reducer

```js
import bigReducer from "./reducers"
const store = createStore(bigReducer,composeWithDevTools())
```

页面使用它reducer获取数据，需要增加命名空间

```js
const mapStateToProps = (state) => {
    console.log("state",state);
    return {
        cartList: state.shop.cartList,
        shopList: state.shop.shopCart
    }
}
```

其中shop就是你在合并reducer的时候，设置命名空间名字。

### action的合并

在action文件夹下面创建index.js文件

在里面引入action并统一暴露出去

```js
export {increment,decrement} from "./countAction"
export {addCartAC,addNumAC,reduceNumAC} from "./shopAction"
```

只要使用action，默认导入index.js文件就可以实现



