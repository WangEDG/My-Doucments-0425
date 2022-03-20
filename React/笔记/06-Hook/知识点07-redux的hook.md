## 知识点07-redux的hook

在函数组件中要和redux连接，分为两个步骤

前提状态机已经主备就绪

1. 注入store到根组件

   ```
    import store from "./redux/store"
    import { Provider } from "react-redux"
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>
      ,
      document.getElementById('root')
    );
   ```

2. 在函数组件中，需要使用第三方的hook来完成状态机获取

   useDispatch:产生一个disptach对象派发action

   useSelector:作用类似于mapStateToProps，获取到状态机state对象，对数据进行刷选

   ```
    import {useDispatch,useSelector} from "react-redux"
    import {incrementAC,decrementAC,addCartAC} from "../../redux/actions"
    const dispatch = useDispatch()
    // 获取到redux的数据
    const {courseList,cartList} = useSelector(state=>({
        courseList:state.shopRD.courseList,
        cartList:state.shopRD.cartList
    }))
    const addCart = (index,id)=>{
           dispatch(addCartAC(index))
        }
    <Items productList={courseList} addCart={addCart}></Items>
   ```

> 官方提供的hook：useState、useEffect、useRef、useMemo、useCallback（扩展）
>
> 第三方提供：useHistory、useParams、useLocation、useSelector、useDispatch