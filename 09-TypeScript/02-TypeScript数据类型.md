TS 中也和 JS 一样，将所有的数据类型都分为“基本（原始）数据类型”和“引用数据类型”。

### 一、基本数据类型

- number
- string
- boolean
- null
- undefined
- void
- symbol
- bigint

#### 1、TS 中使用基本数据类型

基础语法：

首先在 TS 中，创建变量时，`var`、`let`、`const` 还是和 JS 中的使用方式一样，但是，在声明变量时需要约束变量的数据类型：

```js
var 变量名: 类型 = 值;
```

示例代码：

```tsx
var a: number = 1;
let b: string = 'hello';
const c: boolean = true;
let e: undefined = undefined;
let f: null = null;
```

#### 2、void

void 在 TS 中用来表示没有任何数据类型。通常，当一个函数没有返回值的时候，我们会将返回值的类型设置为 `void`。





### 二、特殊类型

#### any

any 在 TS 中用来表示任意数据类型。通常，只有当值来自于一些动态的内容，我们在一开始确定不了值的类型，可以选择使用 any。其他情况下都不推荐使用 any：

```tsx
let g: any = true;
```





### 三、引用数据类型

- object：是下面三类的父类
- array：数组
- tuple：元组
- enum：枚举

#### 1、数组 array

TS 中要求数组中的每一项必须是同一个数据类型。

基础语法：

```tsx
const 变量名: 数组中数据的类型[] = 数组值;
const 变量名: Array<数组中数据的类型> = 数组值;
```

示例代码：

```tsx
const arr1: number[] = [1, 2, 3];
const arr2: Array<string> = ['1', '2']
```

如果在实际开发中，确实需要在数组中保存任意类型的数据，可以将数组的类型设置为 any：

```tsx
const arr3: any[] = [1, 2, '3'];
```

#### 2、元组 tuple

元组中，允许一个数组中保存多个类型的数据。

但是，要求数组中的值与元组类型必须：数量要对应、位置要对应、类型要对应。

```tsx
const arr4: [string, number] = ['1', 2];
```

#### 3、对象 object

我们在 TS 中定义对象时，需要定义出对象中有哪些属性，每一个属性的值是什么类型。

```tsx
const student: { id: number, name: string } = { id: 1, name: 'Li' };
```

#### 4、枚举 enum

```tsx
// 定义性别：0 表示女性，1 表示男性
enum Gender {
    male = 1,
    female = 0
}
// 定义订单状态：0 表示订单失败、1 表示订单成功、2 表示订单超时
enum OrderState {
    fail = 0,
    success = 1,
    timeout = 2
}

const student: { id: number, name: string, gender: Gender } = { id: 1, name: 'lee', gender: Gender.female }

const myOrder: { id: number, state: OrderState } = { id: 1, state: OrderState.timeout }
```