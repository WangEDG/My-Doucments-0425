## 知识点05-useMemo

类组件中如何实现计算属性？

```
class Student extends Component{
    state = {
        price:23,
        num:10
    }
    get total(){
        return this.state.price * this.state.num
    }
}
```

函数组件中也可以计算属性，useMemo函数来实现

提供两个参数

1. 回调函数，执行的就是计算属性的业务逻辑
2. 提供一个数组，里面就要监控的数据
3. 返回一个结果，这个结果计算过后的结果

```
const [firstname, setFirstname] = useState("王二")
const [lastname, setLastname] = useState("麻子") 
// 计算属性会返回一个结果，需要接受
const fullName = useMemo(() => {
    return firstname + lastname
}, [firstname, lastname])
const changName = () => {
    setFirstname("张三")
}
```

默认也会有缓存，计算过后缓存一一遍，下次没有发生变化就获取缓存。