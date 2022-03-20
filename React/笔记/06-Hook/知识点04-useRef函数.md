## 知识点04-useRef函数

在类组件中获取表单节点

1. 受控组件

   ```
    <input onChange={this.changeData} value={this.state.username}>
    changeData(event){
        event.target.value
    }
   ```

2. 非受控组件

   ```
    <input ref={input=>this.element=input}>
    this.element.value
    this.ele = React.createRef()
    this.ele.current.value
   ```

函数组件中要获取到表单节点useRef的函数

```
import React,{useRef} from 'react'

export default function Subject() {

    const usernameRef = useRef()
    const passwordRef = useRef()
    const cardType = useRef()
    const login = ()=>{
        console.log(usernameRef.current.value);
        console.log(passwordRef.current.value);
        console.log(cardType.current.value);
    }
    return (
        <div>
            <input ref={usernameRef} type="text" />
            <input ref={passwordRef} type="text" />
            <select name="" id="" ref={cardType}>
                <option value="sfz">身份证</option>
                <option value="jsz">驾驶证</option>
            </select>
            <button onClick={login}>登录</button>
        </div>
    )
}
```

通过上面的案列，我们发现useRef底层就是使用React.createRef来获取到节点对象。在调用current来完成节点的获取。