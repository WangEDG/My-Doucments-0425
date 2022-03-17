### 接口

- 就是把对象、函数中的一些属性的定义提取出来，成为一个公共的接口，供后续直接使用

### 一、属性的接口

属性接口，专门用来约束对象中的每一个属性。

基础语法：

```ts
interface 接口名 {
    属性名: 类型;
    属性名: 类型;
    属性名?: 类型;  //？表示该参数可选 可有可无
    // ...
}
```

案例：

```tsx
//定义接口
interface Info {
    id: number;
    name: string;
    age?: number; // 可选属性，可有可无
    sayHello?: () => void; //没有参数 没有返回值
    play:(x:string, y:string) => string //有参数 有返回值 并且是必要属性
}

//使用接口
const user: Info = {
    id: 1,
    name: 'Lee',
    age: 20,
    play:(x,y)=>{
        return  x + y
    }
}
//调用user中的方法
user.play("打","篮球")


//使用接口
const admin: Info = {
    id: 2,
    name: 'Wang',
    sayHello: () => {
        console.log('hello');
    },
    play:(x,y)=>{
        return  x + y
    }
}
```

### 二、函数的接口

函数的接口分为两种情况：

1. 函数属性接口：通过接口去约束函数参数和返回值的类型；
2. 函数类型接口：通过接口去约束函数的类型；

#### 1、函数属性接口

基础语法：

```tsx
//将函数的参数定义成接口

interface 接口名 {
    属性名：属性类型;
    属性名：属性类型;
}

function 函数名(参数名: 接口名): 返回值类型 {

}
```

案例：

```tsx
//定义接口
interface MyParams {
    x: number;
    y: number;
}

//使用接口
function add(params: MyParams): number {
    return params.x + params.y;
}
add({ x: 1, y: 2 })
```

接口除了用来定义函数的参数外，也可以用来定义`函数的返回值`。

```tsx
//定义接口
interface MyParams {
    x: number;
    y: number;
}

//使用接口
//此处参数是一个数组，数组里面是接口的数据类型，及参数是数组 数组里面是对象 对象的数据类型是接口定义的数据类型
function add( params: MyParams[ ] ): MyParams {
    return params[0];
}
add([{ x: 1, y: 2 }])
```

#### 2、函数类型接口

可以使用 interface 来定义函数的类型。

基础语法：

```tsx
interface 接口名 {
    (参数名: 参数值, 参数名: 参数值): 返回值类型
}
```

案例代码：

```tsx
//定义函数类型接口
//接受两个参数 x y类型均为number 然后函数返回值为number 
interface AddFn {
    (x: number, y: number): number
}

const add: AddFn = (x, y) => {
    return x + y;
}
add(1, 2)
```

在一个接口中，也可以使用另一个接口：

```tsx
interface MyParams {
    x: number;
    y: number;
}

interface AddFn {
    (params: MyParams): number
}

const add: AddFn = (params) => {
    return params.x + params.y;
}
add({ x: 1, y: 2 })
```

练习：

1. 定义一个数组，用来存放管理员信息（管理员分为超级管理员和普通管理员）。
2. 普通管理员的属性：`id`、`name`、`age`、`role："普通管理员"`
3. 超级管理员的属性：`id`、`name`、`age`、`role："超级管理员"`、`menus: [{ id: 1, path: '/home' }]`

定义一个方法，接收这个数组作为参数，返回所有的超级管理员

（进阶：数据中将普通管理员的 role 属性去掉，依然返回所有的超级管理员。）

在定义一个方法，接收这个数组作为参数，返回所有的管理员中年龄最小的管理员。