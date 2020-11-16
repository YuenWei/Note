## vue-router

### 简介

**什么是路由？**

- 路由就是通过互联的网络把信息用源地址传送到目的地的活动
- 路由提供了两种机制：路由和传送
  - 路由是决定数据包从来源到目的地的路径
  - 转送就是将数据转移
- 路由表
  - 路由表本质就是一个映射表，决定了数据包的指向

### 前端/后端路由

1. 后端渲染（服务端渲染） jsp技术 后端路由，后端处理URL和页面映射关系，例如springmvc中的@requestMapping注解配置的URL地址，映射前端页面
2. 前后端分离（ajax请求数据） 后端只负责提供数据 静态资源服务器（html+css+js） ajax发送网络请求后端服务器，服务器回传数据 js代码渲染dom
3. 单页面富应用（SPA页面） 前后端分离加上前端路由，前端路由的url映射表不会向服务器请求，是单独url的的页面自己的ajax请求后端，后端只提供api负责响应数据请求。改变url，页面不进行整体的刷新。 整个网站只有一个html页面。

### URL的hash和HTML5的history

##### **URL的hash**

- URL的hash是通过锚点(#)，其本质上改变的是window.location的href属性。
- 可以通过直接赋值location.hash来改变href，但是页面并不会发生刷新。

使用命令`vue init webpack 01-vue-router-vuecli2`创建新的vuecli2工程,等待创建完成后，使用`npm run dev`启动服务器，在浏览器通过 [http://localhost:8080](http://localhost:8080/) 进入工程主页。 测试通过改变hash，查看是否会刷新页面，浏览器的url地址是否改变。

> 结论

测试发现url的地址栏改变了变成了http://localhost:8080/#/zty ，通过查看network发现只有favicon.ico资源重新请求了，这个是工程的logo图标，其他资源都未请求。可以通过改变hash改变url，此时页面是未刷新的。

vue-router其实用的就是这样的机制，改变url地址，这个url地址存在一份路由映射表里面，比如`/user`代表要请求用户页面，只要配置了这个路由表（路由关系），就可以前端跳转而不刷新页面，所有的数据请求都走ajax。

##### HTML5的history模式

###### pushState

同样的使用HTML5的history模式也是不会刷新页面的,history对象栈结构，先进后出，pushState类似压入栈中，back是回退。

```
hristory.pushState({}, '', '/foo')
history.back()
```

###### replaceState

replaceState模式与pushState模式区别在于replaceState模式浏览器没有返回只是替换，不是压入栈中。

```
history.replaceState({}, '', 'home')
```

###### go

go只能在pushState模式中使用，go是前进后退到哪个历史页面。

```
history.go(-1)//回退一个页面
history.go(1)//前进一个页面
history.forward()//等价于go(1)
history.back()//等价于go(-1)
```

### 安装配置

