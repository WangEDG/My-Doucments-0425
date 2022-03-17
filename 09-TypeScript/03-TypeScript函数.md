在 TS 中，要使用函数，要求必须约束函数参数和返回值的类型。

### 一、基础语法

#### 1、JS 中函数

函数声明式：

```js
function 函数名(参数) {
    return 返回值
}
```

函数表达式：

```js
const 变量名 = function(参数) {
    return 返回值
}
```

#### 2、TS 中的函数

函数声明式：

```tsx
function 函数名(参数: 参数类型): 返回值类型 {
    return 返回值
}

function add (x: number, y:number): number {
    return x + y
}
```

函数表达式分为以下几种写法：

**1）只定义函数参数和返回值的类型**

```tsx
const 变量名 = function(参数: 参数类型): 返回值类型 {
    return 返回值
}

const add = function(x: number, y:number): number {
    return x + y
}
```

**2）定义了变量的类型，以及函数参数和返回值的类型**

```tsx
//如果变量类似是一个函数，也就是函数表达式方式申明的函数，以下面这种方式定义
// 变量名：后面的这一截  (参数: 参数类型) => 返回值类型 都是在给这个变量定义类型  而 = 后面的   function这一截才表示函数体
//如果不给变量定义类型 那么就成了 const 变量名 = function { ...} 就跟普通函数一样了  所以中间这一截是在给变量定义数据类型

const 变量名: (参数: 参数类型) => 返回值类型 = function(参数: 参数类型): 返回值类型 {
    return 返回值
}

const add: (x: number, y:number) => number = function(x: number, y:number): number {
    return x + y
}
```

**3）只定义变量的类型**

```tsx
//这样申明 会比上面的方式简便一点
//这样后面的函数 function会自己根据前面给变量定义类型的时候推断出自己的参数 以及返回值的类型
const 变量名: (参数: 参数类型) => 返回值类型 = function(参数) {
    return 返回值
}
```

### 二、函数参数

#### 1、基本类型的参数

```tsx
function add(x: number, y: string) {
    console.log(x, y);
}
add(1, '2')
```

#### 2、引用类型的参数

数组：

```tsx
function add(params: number[]) {
    console.log(params[0], params[1]);
}
add([1, 2])
```

对象：

```tsx
function add(params: { x: number, y: string }) {
    console.log(params.x, params.y);
}
add({ x: 1, y: '2' })
```

#### 3、参数的默认值

```tsx
function add(x: number, y: number = 2) {
    console.log(x, y);
}
add(1);
```

注：带默认值的参数，建议放到所有形参的最后，即尾参数。

#### 4、可选参数

可以在形参名的后面通过 `?` 来设置参数的可选：

可选参数就是这个参数可传也可以不传递

```tsx
function add(x: number, y?: number) {
    console.log(x);
}
add(1)
```

#### 5、不定参数

```tsx
function add(x: number, ...y: number[]) {
    console.log(x, y);
    //不定参数y 打印会发现 y是一个数组 不当参数释义数组形式 存在
}
add(1, 2)
```



### 三、函数返回值

#### 1、返回值为基本数据类型

```js
function 函数名():返回值类型 {
    return 20
}

function add2():number {
    return 20
}
add2()

function add3():string {
    return "20"
}
add3()
```

#### 2、返回值为引用类型

- 没有返回值的情况

  ```js
  // void类型  就表示函数没有返回值
  function add5():void {
     
  }
  add5()
  ```



- 返回值为数组

  ```js
  function 函数名():number/string[] {
      return [20,40,60] //返回数组元素不需要做限制
  }
  
  function add3():number[] {
      return [20,40,60] //返回数组元素不需要做限制
  }
  //箭头函数的形式
  const add3 = (x:number, y:number) : number[ ]=>{
      return [ x, y]
  }
  add3()
  
  function add4():string[] {
      return ["20", "40", "60"] //返回数组元素不需要做限制
  }
  add4()
  ```

  

- 返回值为对象

  ```js
  function 函数名():{ 属性名：类型 } {
     return { 属性名：类型 }
  }
  
  //返回一个对象 id属性为数字 name属性为字符串
  function add5():{id:number, name:string} {
      return {id:123,name:"小王"}
  }
  //箭头函数的形式
  const add5 = (id:number, name:string) : {id:number,  name:string}=>{
      return {id, name}
  }
  add5()
  ```

  



### 四、箭头函数

```js
//箭头函数不定义变量的类型
const 变量 = (参数名:类型, 参数名:类型) :返回值类型 =>{
    return x + y
}

const add = (x:number, y:string) :number =>{
    return x + y
}

//箭头函数定义变量的类型
const add:(x:number, y:string) =>number= (x:number, y:string) :number =>{
    return x + y
}
//或者箭头函数简写
const add:(x:number, y:string) =>number= ( ) =>{
    return x + y
}
```

