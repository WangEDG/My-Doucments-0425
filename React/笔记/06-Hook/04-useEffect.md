# useEffect

useEffect 是 React 中针对函数组件没有生命周期的问题，给出的解决方案。

### 一、没有第二个参数

当 useEffect 没有传递第二个参数时，组件挂载完成和组件更新时都会执行，可以看作是类组件中 `componentDidMount` 和 `componentDidUpdate` 的结合：

```js
useEffect(() => {
    console.log('useEffect 没有传递第二个参数');
})
```

### 二、第二个参数是空数组

当 useEffect 的第二个参数是一个空数组时，会在组件挂载完成后执行。可以看作是类组件中 `componentDidMount` 。

```js
useEffect(() => {
    console.log('useEffect 第二个参数是空数组');
}, [])
```

### 三、第二个参数是非空数组

当 useEffect 的第二个参数是一个非空数组时，`会在组件挂载完成后执行一次`，`后续当数组中的任意数据发生改变时，都会重新执行`。

类似于 Vue 中 watch 搭配立即侦听,并且如果是引用数据类型，也可以轻松实现监听。

```js
useEffect(() => {
    console.log('useEffect 第二个参数是非空数组');
}, [num])
```

### 四、第一个参数中返回函数

当 useEffect 的第一个参数中，返回了一个函数。返回的这个函数会在当前组件销毁前执行。模拟类组件 `componentWillUnmount`：

```js
useEffect(() => {
    return () => {
        console.log('useEffect 第一个参数返回一个函数');
    }
}, [])
```