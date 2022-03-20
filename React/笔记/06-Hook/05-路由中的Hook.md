### hook中使用 this.props中的路由

类组件中我们通过 `this.props` 获取到的关于路由的相关方法和数据，在函数组件中还是可以继续通过参数 `props` 来获取使用：

```jsx
export default function Login(prosp) {
    return (
        <button onClick={() => {
            props.history.push('/')        
        }}>登录</button>
    )
}
```

同样的，在类组件中，如果我们需要非路由组件，需要使用 `withRouter` 进行包裹处理的，在函数组件中也一样的可以使用：

```jsx
import { withRouter } from 'react-router-dom';

function TheHeader(props) {
    return (
        <button onClick={() => {
            props.history.push('/login')
        }}>登录</button>
    )
}

export default withRouter(TheHeader)
```







### 第三方 路由Hook

但是，`react-router-dom` 路由插件也给我们专门提供了第三方的 hook 来实现路由的跳转，以及参数的获取等操作：

```jsx
import { useHistory, useLocation, useParams,Link } from 'react-router-dom';
export default function TheHeader() {
    const history = useHistory();
    const location = useLocation();
    const params = useParams();
    return (
        <button onClick={() => {
            history.push('/login')
        }}>退出</button>
    )
}
```

说明：

- `useHistory()`：获取 history 对象， history 对象提供了路由的跳转方法；

  - 例如 push方法、go方法、replace方法

    

- `useLocation()`：获取 location 对象，location 对象提供了路由的一些描述相关信息；

  - 提供路由的一些描述信息，例如 路径pathName等

    

- `useParams()`：获取动态路由的参数对象；

  - 提供路由传递的一些参数
  
  - `注意只有动态路由传递的参数可以获取到，其他query等方式传递的参数 获取不到`
  
    
  
- `Link`:Link标签跳转