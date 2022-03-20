在某些情况下，我们会比 TS 更清楚一个数据的类型。这种时候，我们就可以使用断言来告诉 TS：相信我，我知道自己在干什么。 例如下面的例子：

```js
function fn(x:number, y?:number) {
    return x + y    
}

fn(10,20)

这种情况下，由于参数 y 定义的是可选参数，表示参数y 可传可不传
那么在这种情况下，就会出现报错， 会提示 y可能未定义 
也就是说，开发工具不知道参数y 传递了 还是没有传递 所以就是有错误提示
那么这时候 就可以使用到断言 你自己比开发工具更加了解你的代码，所以需要你告诉开发工具 此时 参数y的一个情况 告诉它 参数 y 就是一个某种类型的数据 例如number
```



### 一、基础语法

断言的语法分为两种：

1. `<>` 尖括号
2. `as` 语法

### 二、尖括号

基础语法：

```tsx
<类型>变量名
```

案例：

```tsx
function add(x: number, y?: number): number {
    return x + <number>y;
}
add(1, 2);
```

### as 语法

基础语法：

```tsx
变量名 as 类型
```

案例：

```tsx
function add(x: number, y?: number): number {
    return x + (y as number);
}
add(1, 2);
```