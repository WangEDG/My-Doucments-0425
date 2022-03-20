## 知识点06-redux的hook

在函数组件中要和redux连接，分为两个步骤

前提状态机已经主备就绪

1. 注入store到根组件

   在函数组件中，使用Provider包裹根组件，并将store注入这一步，依旧是不能少的

   ```js
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

   在类组件中，我们要获取redux中的数据，使用的方法是先引入 connect高阶函数，传入一个 mapStateToProps作为其参数，并在mapStateToProps函数中将redux中的值返回出去，以这样的的形式来获取redux中的数据。

   

   在函数组件中，提供了一种比上面使用起来更加方便的方式，也就是使用redux中的一些hook函数来实现redux中数据的获取

   useDispatch:产生一个disptach对象派发action

   useSelector:作用类似于mapStateToProps，获取到状态机state对象，对数据进行刷选

   ```js
    import {useDispatch,useSelector} from "react-redux"
    import {incrementAC,decrementAC,addCartAC} from "../../redux/actions"
   
    const dispatch = useDispatch()
    
    
    
    //使用useSelector获取到redux的数据
    const {courseList,cartList} = useSelector(state=>({
        courseList:state.shopRD.courseList,
        cartList:state.shopRD.cartList
    }))
    
    
   //使用dispatch派发action
    const addCart = (index,id)=>{
           dispatch(addCartAC(index))
    }
    <Items productList={courseList} addCart={addCart}></Items>
   ```

> 官方提供的hook：useState、useEffect、useRef、useMemo、useCallback（扩展）
>
> 第三方提供：useHistory、useParams、useLocation、useSelector、useDispatch





