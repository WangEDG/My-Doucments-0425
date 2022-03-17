## TypeScript07-命令空间和模块化

在大型项目中我们会各自负责自己的ts代码，最终整合在一起的时候可能会出现冲突。

TS提供了命令空间和模块化来解决问题

一般会配合Vue+React来使用。没有冲突的问题。

项目开发过程中。ts来写的工具包，公共的一些代码封装

### 命名空间

我们可以给每个ts文件增加一个命名空间，以后在相互调用的时候，必须通过命名空间的方式来调用函数或者类

```js
export namespace moz {
    export class Cat {
        private type: string
        constructor(type: string) {
            this.type = type
        }
        show(): void {
            console.log("类型为：" + this.type);

        }
    }
}
```

moz代表的就是命名空间名字

调用的时候也是基于模块化的方式

```js
import {moz} from "./index17-命名空间"
import {mob} from "./index18-命名空间"

new moz.Cat("美短")
new mob.Cat("折耳猫")
```

### 模块化

模块化的内容规则跟ES6是一样的使用，

在ts文件中，如果没有模块化，多个文件由相同命名冲突。

```js
export {}
```

