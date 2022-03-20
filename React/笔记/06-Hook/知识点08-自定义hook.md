## 知识点08-自定义hook

Vue：如何在vue中自定义一个指令

为什么要自定义?

 如何自定义？

自定义hook作用

针对目前你的业务设计一个特殊的hook来完成操作，设置完成后，这个hook函数可以应用的很多地方，减少重复代码的开发。提取公共业务



特点：

1. 自定义hook作用就是提取公共的业务代码。所以一般不会返回jsx，一般会根据需要返回特定的值或者方法
2. 自定义hook必须以use开头，约定熟成的规范

```js
import {useState,useEffect} from "react"

/**
 * 自定义hook，将获取数据的逻辑封装在一起
 */
export default function useData(){
    const [list,setList] = useState([])
    // 模拟网络请求
    useEffect(()=>{
        setTimeout(() => {
            setList(["xiaowang","xiaozhang","xiaoli"])
        }, 2000);
    },[])
    return list
}
```

>如何自定义一个hook？









### 一、useMemo 基本用法

缓存数据，模拟 Vue 中的计算属性。

```jsx
import React, { useMemo, useState } from 'react';

export default function UseMemo() {
    const [count, setCount] = useState(0);
    // 缓存 sum 的值
    const sum = useMemo(() => {
        return count + count;
    }, [count])

    return (
        <>
            <p>父组件：{sum}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </>
    )
}
```

### 二、React.memo()

在 React 中，默认情况下，父组件更新时，无论子组件是否发生改变，子组件也会更新。

但是，我们更希望：**只要子组件用到的数据没有发生改变，即使父组件更新，子组件也不更新。**

我们可以用 React.memo 把子组件包裹起来：

```js
function Child() {

}
export default React.memo(Child);
```

**React.memo 可以用来缓存组件：memo 方法会去判断子组件中的数据（state、props）是否发生改变，只有真正当子组件内部的数据发生改变时，子组件才会更新。**

### 三、useCallback

useCallback 用来缓存函数。基本语法如下：

```jsx
import React, { useCallback } from 'react';

export default function UseMemo() {
       const sayHello = () => {
        console.log('hello')
    }
    const cbSayHello = useCallback(sayHello, [])

    return (
        // ...
    )
}
```

为什么需要缓存函数呢，这个就和 `React.memo()` 有关系了。

我们用 `React.memo()` 包裹子组件，是希望子组件能够避免一些不必要的更新。但是，如果父组件传递的 props 是一个函数，那么每次父组件重新渲染时，memo 都会判断 props 的函数是一个新的函数，因此就会更新子组件。

所以这个时候，我们就可以在父组件中通过 `useCallback()` 将函数缓存下来，再将缓存后的函数传递给子组件。

```jsx
import React, { useCallback } from 'react';

export default function UseMemo() {
       const sayHello = () => {
        console.log('hello')
    }
    const cbSayHello = useCallback(sayHello, [])

    return (
        <Child sayHello={cbSayHello}></Child>
    )
}
```

这样处理后，即使父组件发生改变，只要子组件中用到的数据或方法没有变，子组件都不会更新。
