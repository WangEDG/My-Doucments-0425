泛型，可以理解为更广泛的类型。也就是说我们在函数、接口、类等中，约束数据类型的时候，可以通过泛型的方式来实现类型的传参，让数据的类型也可以根据传递的类型值来控制。

也可以理解为动态的类型，数据的类型在调用的时候传递过去。  

### 一、函数中的泛型

#### 1、定义泛型函数

基础语法：

```tsx
function 函数名<类型变量>(参数名: 类型变量): 类型变量 {
    return 返回值；
}
函数名<类型>(参数)

//在调用函数的时候 会传递类型参数 也就是 <>里面的参数，然后会自己传递到定义函数时 类型变量的位置上

//在实际开发中，调用函数的时候，也可以不传递类型 会根据函数传递的参数来自己生成 类型变量 即：
fn("hello")  //不传递类型 会根据 函数参数的类型 自动生成 类型变量 即上面 类型变量的地方 会自动生成 字符串类型
```

案例代码：

```tsx
//定义泛型函数
function getValue<T>(params: T): T {
    return params;
}

getValue<string>('hello');
getValue<number>(100);
```

#### 2、定义多个泛型变量

```tsx
function getValue<T, U>(params: T, count: U): T {
    return params;
}

getValue<string, number>('hello', 100);
getValue<boolean, number>(true, 100);
```



### 二、接口中的泛型

基础语法：

```tsx
interface 接口名<类型变量> {
    属性名: 属性类型,
    属性名: 类型变量,
}


const 变量名: 接口名<类型> = ...
```

案例代码：

```tsx
//定义接口 + 泛型
interface Info<T> {
    id: number;
    name: string,
    age: T
}

//使用接口
let student: Info<number> = {
    id: 1, 
    name: '张三',
    age: 20
}

let users: Info<string> = {
    id: 1, 
    name: '王五',
    age: '30'
}
```

### 三、class 中的泛型

基础语法：

```js
class 类名<类型变量> {
    属性名：类型变量；
    
    constructor（参数名：类型变量）{
        
    }
    
    方法名（参数名：类型变量）：类型变量{
        
    }

}
```

案例代码：

```js
//常规的写法
// class Person {
//     age:string;
//     constructor(){
//         this.age = "18"
//     }
// }

class Person<T> {
    age:T;
    constructor(age:T){
        this.age = age
    }
    getAge():T{   //限制返回值
        return this.age
    }
}
new Person<number>(19);
new Person<string>("19");
```

