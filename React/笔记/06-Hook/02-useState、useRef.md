## useState

React 中提供了 `useState()` 这个函数，来解决函数组件中不能设置状态的问题。

### 一、引入

```jsx
import React, { useState } from 'react';
```

### 二、基础语法

```jsx
const [变量名，方法名] = useState(数据的初始值)

//例如
const [number，setNumber] = useState(10)
```

说明：

- `变量名`：用来接收数据的初始值，在DOM中使用值就直接使用这个变量名；
- `方法名`：用来接收修改数据的方法，该方法在使用时，直接传递最新的数据即可；
  - `注意这个修改数据的方法永远都是异步的`

### 三、计数器案例

```jsx
import React, { useState, createRef, useRef } from 'react';

export default function Counter() {
    const [count, setCount] = useState(100);
    // const inputRef = createRef();
    const inputRef = useRef();

    const decrement = () => {
        setCount(count - 1);
        console.log(count);
    }

    const inputCount = (value) => {
        setCount(value)
    }

    return (
        <>
            <h1>计数器：{count}</h1>
            <button onClick={decrement}>-1</button>
            <button onClick={() => setCount(count + 1)}>+1</button>
        
            <input type="text" onBlur={(e) => inputCount(e.target.value - 0)} />
            <input type="text" ref={inputRef} onBlur={() => inputCount(inputRef.current.value - 0)} />
        </>
    );
}
```

## useRef

说明：`useRef()` 这个 hook 方法和 `createRef()` 方法的作用和语法都是一样的。