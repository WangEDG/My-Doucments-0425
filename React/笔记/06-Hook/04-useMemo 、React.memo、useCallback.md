# useMemo 、React.memo、useCallback

### 一、useMemo 基本用法

缓存数据，模拟 Vue 中的计算属性。

同样useMemo跟vue中component一样，也是有缓存的，会将结果缓存下来

```jsx
import React, { useMemo, useState } from 'react';

export default function UseMemo() {
    const [count, setCount] = useState(0);
    
    缓存 sum 的值
   useMemo  使用的时候，第二个参数是个数组，里面必须要传递所依赖的值，才可实现计算属性的功能
   例如上面此生依赖count 那么就需要把 count传递到数组里面去
   
   注意：
   1、如果第二个参数不传递，useMemo也能执行，也会实现技术属性的效果，但是建议还是传递，这样会更加准确一点
   
   2、如果依赖了两个值 比如：number1  number，但是数组里面只传递number1的话 
         如果number2 也发生变化 此时useMemo是不会执行的，因为没有传递number2告诉useMemo依赖了它
         就是说
        
    
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

| 第一个参数(回调函数)                                         | 第二个参数(依赖) |
| ------------------------------------------------------------ | :--------------: |
| 1.组件首次渲染(函数首次执行),DOM挂载前执行；2.每次组件更新前(函数重新执行),先执行useMemo，再更新DMO |        空        |
| 1.组件首次渲染(函数首次执行),DOM挂载前执行                   |        []        |
| 1.组件首次渲染(函数首次执行),DOM挂载前执行；2.每次依赖更新时，每次组件更新前(函数重新执行),先执行useMemo，再更新DMO |      [sate]      |



### 二、React.memo()

在 React 中，默认情况下，父组件更新时，无论子组件是否发生改变，子组件也会更新。

但是，我们更希望：**只要子组件用到的数据没有发生改变，即使父组件更新，子组件也不更新。**

我们可以用 React.memo 把子组件包裹起来：

```js
function Child(props) {

}
export default React.memo(Child);
```

**React.memo :**

​	**1、可以用来缓存组件：memo 方法会去判断子组件中的数据（state、props）是否发生改变，只有真正当子组件内部的数据发生改变时，子组件才会更新。**

​	**2、但是如果传递给子组件中的值有函数的情况，父组件更新，无论子组件中props的值没变化依旧会触发子组件的更新，是因为：在react函数组件中，父组件值变化，会全部更新父组件，那么就相当于传递给子组件的函数在更新的时候重新被创建了，所以React.memo此时就会检测到props中的函数发生了变化，正常触发子组件的更新。所以useCallback这个hook的作用就体现出来了 详见下面第三点**



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
