## 知识点02-useState

在函数组件中要使用hook需要引入对应hook函数。

就是使用函数来进行编程，编程方式回到函数式编程，要用什么函数导入对用函数，调用对应函数

useState这式一个非常重要的hook函数，提出这个函数的目的就是为了定义函数组件内部状态

### 基本数据类型

```
import {useState} from "react"
const [username,setUsername] = useState("xiaowang")
setUsername("xiaozhang")
```

### 引用类型

```
const [student,setStudent] = useState({
        id:1,
        username:"xiaozhang"
    })
setStudent({
            username:"xiaofeifei"
        })
```

提供的对象会覆盖原来useState定义的对象，默认不会将对象合并。

```
setStudent({...student,username:"xiaofeifei"})
```

在使用修改方法对引用数据进行修改的时候，需要扩展过后在覆盖。

还可以有一下的语法

```
setStudent(()=>{
            return {...student,username:"xiaoliu"}
        })
```

> useState同步还是异步? setXX 修改数据。同步异步？

useState这个hook没有回调，不像在类组件中的setState 可以传递一个回调来查看值的修改情况

useState在定义数据的时候，本身式同步的代码。

setState，默认是异步的方法，修改数据的时候采用异步的方式来加载。

hook中修改数据是异步的方式，要立即获取到修改过后的结果，需要配合其他hook来使用

使用useEffect这个hook函数来监控对象发生变化，发生变化可以获取到更新后的值