## 知识点06-useHistory

在类组件中要实现路由跳转

```
this.props.history.push()
this.props.history.replace()
```

组件是路由组件调用props提供路由对象来跳转

非路由组件使用withRouter对组件进行包装，history提供路由对象

在函数组件中要实现路由跳转，使用hook就完成

```
import {useHistory} from "react-router-dom"
const history = useHistory()
const forward = ()=>{
        console.log(props);
        // props.history.push("/teacher")
        history.push("/teacher")
    }
```

如果你的组件是路由组件，还可以有其他方式

```
import React,{useState} from 'react'
import {useHistory} from "react-router-dom"
import {Link} from "react-router-dom"

export default function Student(props) {
    const forward = ()=>{
        console.log(props);
        props.history.push("/teacher")
    }
    
    return (
        <div>
            <h2>hook useState {name}</h2>
            <h2>hook useState {age}</h2>
            <h2>hook useState {student.id}</h2>
            <h2>hook useState {student.username}</h2>
            <button onClick={changeData}>修改</button>
            <Link to="/teacher">跳转到教师界面</Link>
            <button onClick={forward}>按钮跳转</button>
        </div>
    )
}
```

如果路由要传递参数，我们可以使用useHistory的方式来传递

```
props.push("/teacher/1")
```

接受参数

```
const {id} = props.match.params
const {id} = useParams()
```

路由的一些

React使用的hook分类：

1. 官方提出的hook函数，useState、useEffect、useRef、useMemo、
2. 第三方提供：路由 useHistory、useParams、useLocation
3. 第三方提供：状态机：