# 组件化高级

> **在 2.6.0 中，我们为具名插槽和作用域插槽引入了一个新的统一的语法 (即 `v-slot` 指令)。它取代了 `slot` 和 `slot-scope` 这两个目前已被废弃但未被移除且仍在[文档中](https://cn.vuejs.org/v2/guide/components-slots.html#废弃了的语法)的 attribute。新语法的由来可查阅这份 [RFC](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0001-new-slot-syntax.md)。**

### slot基本使用

我们在使用组件的时候有时候希望，在组件内部定制化内容，

如京东等app顶部，这两个都是导航栏，组件的思想是可以复用的，把这个导航栏看做一个组件。

这个组件都可以分成三个部分，左边中间右边，如果可以分割组件，就可以定制化组件内容了。

### 插槽内容

简单使用插槽，定义template时候使用`slot`

```
  <!-- 子组件 -->
  <template id="cpn">
    <div>
      <div>
        {{message}}
      </div>
      <!-- 插槽默认值 -->
      <slot><button>button</button></slot>
    </div>
  </template>
```

插槽可以使用默认值，`<button>button</button>`就是插槽的默认值。

```
<cpn></cpn>
<cpn><span style="color:red;">这是插槽内容222</span></cpn>
//使用插槽，`<span style="color:red;">这是插槽内容222</span>`将替换插槽的默认值
```



### 编译作用域

组件都有自己的作用域，自己组件的作用在自己组件内。

### 具名插槽

具名插槽，就是可以让插槽按指定的顺序填充，而没有具名的插槽是按照你填充的顺序排列的，而具名插槽可以自定义排列。

> 没有具名的插槽排在最后，因为在定义组件的时候，排在了最后，如果有多个按顺序排列。具名插槽按照自定义的顺序排列。

> 定义具名插槽，使用`name`属性，给插槽定义一个名字。

```
<!-- 父组件 -->
  <div id="app">
    <cpn>
      <span>没具名</span>
      <span slot="left">这是左边具名插槽</span>
      <!-- 新语法 -->
      <template v-slot:center>这是中间具名插槽</template>
      <!-- 新语法缩写 -->
      <template #right>这是右边具名插槽</template>
    </cpn>
  </div>

  <!-- 插槽的基本使用使用<slot></slot> -->
  <!-- 子组件 -->
  <template id="cpn">
    <div>
      <slot name="left">左边</slot>
      <slot name="center">中间</slot>
      <slot name="right">右边</slot>
      <slot>没有具名的插槽</slot>
    </div>
  </template>
```

### 作用域插槽

父组件替换插槽的标签，但是内容是由子组件来提供。

 当组件需要在多个父组件多个界面展示的时候，将内容放在子组件插槽中，父组件只需要告诉子组件使用什么方式展示界面。

组件中使用`slot-scope="slot"`**（2.6.0已经废弃）**给插槽属性命名，在通过`slot`调用绑定在插槽上的属性。也可以使用`v-slot="slot"`。

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>作用域插槽案例</title>
</head>
<body>
  <!-- 父组件 -->
  <div id="app">
    <cpn></cpn>
    <!-- 目的是获取子组件数据 -->
    <cpn>
      <!-- 2.5以下必须使用template -->
      <template slot-scope="slot">
        <!-- <span v-for="(item, index) in slot.data" :key="index">{{item}}-</span> -->
        <span>{{slot.data.join(' - ')}}</span>
      </template>
    </cpn>
    <cpn>
        <!-- 2.5以下必须使用template -->
        <template slot-scope="slot">
          <!-- <span v-for="(item, index) in slot.data" :key="index">{{item}}*</span> -->
          <span>{{slot.data.join(' * ')}}</span>
        </template>
      </cpn>
  </div>

<!-- 插槽的基本使用使用<slot></slot> -->
  <!-- 子组件 -->
  <template id="cpn">

    <div>
      <slot :data="pLanguage">
          <ul>
              <li v-for="(item, index) in pLanguage" :key="index">{{item}}</li>
            </ul>
      </slot>

    </div>
  </template>

  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>

  <script>
    const cpn = {
      template: "#cpn",
      data() {
        return {
          isShwo:false,
          pLanguage:['JavaScript','Java','C++','C']
        }
      },
    }
    const app = new Vue({
      el: "#app",
      data() {
        return {
          isShow:true
        }
      },
      components: {
        cpn
      },
    })
  </script>
</body>

</html>
```