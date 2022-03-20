## 知识点03-useEffect函数

函数组件没有生命周期钩子函数。

hook中提出了useEffect这个hook函数来弥补函数组件没有生命周期钩子函数的缺陷。

使用useEffect来模拟生命周期钩子函数

可以将useEffect这个函数看成是componentDidMount、componentDidUpdate、componentShouldUpdate、componenWillUnmout结合体

useEffect接受两个参数：

1. 回调函数，可以称为effect函数，重要作用就是执行你的业务逻辑
2. 数组，数组里面填写的内容就是你要监控的对象

### 使用useEffect实现componentDidMount

```
const [name,setName] = useState("xiaowang")
    // 通过useEffect函数来实现componentDidMount
    useEffect(()=>{
        console.log("componentDidMount");
        console.log(name);
    },[])
```

当你传递的参数为空数组的时候，表示页面加载完毕后执行这段代码。相当于componentDidMount的功能

### 使用useEffect实现组件更新阶段

```
useEffect(()=>{
    console.log("componentDidMount2");
    console.log(name);
})
const changeData = ()=>{
    setName("xiaozhang")
}
const changeData2 = ()=>{
    setClasses({
        ...classes,
        name:"六年级"
    })
}
```

useEffect如果不传递数组，那默认是相当于组件更新阶段，实现数据修改的监控。

不管什么数据发生变化都要执行一次useEffect

### 使用useEffect实现监控指定数据

```
useEffect(()=>{
        console.log("useEffect指定监控某个数据");
        console.log(name);
    },[name])
    useEffect(()=>{
        console.log("useEffect指定监控班级数据");
        console.log(name);
    },[classes.id])
```

你需要在数组里面提供一个监控对象，一旦发生变化才会执行钩子函数。钩子不执行

一旦修改数据成功过后，要获取到修改内容，你可以使用上面的方案来解决。

### 使用useEffect实现销毁监听

```
import React,{useEffect} from 'react'
export default function Teacher() {
    useEffect(()=>{
        // 清除函数
        return ()=>{
            console.log("Teacher组件正在销毁");
        }
    },[])
    return (
        <div>
            <h2>教师界面</h2>
        </div>
    )
}
```

当useEffect回调函数里面返回了一个清除函数的时候，这个函数就是在组件销毁的时候才会执行。

没有return的时候，默认只能表示componentDidMount

使用useEffect可以一次性表示两个阶段，componentDidMount也可以是componentWillUnmount