### 1 组件化的基本使用

组件是可复用的 Vue 实例，且带有一个名字：在这个例子中是 `my-cpn`。我们可以在一个通过 `new Vue` 创建的 Vue 根实例中，把这个组件作为自定义元素来使用： `<my-cpn></my-cpn>`。

 **过程**：

1.创建组件构造器对象

 `template`中是组件的DOM元素内容。

2.注册组件

1. 全局注册，通过 `Vue.component `。
2. 局部注册，通过 `components:{cpnc:cpnc}`。

3.使用组件

 像使用html标签一样使用。

```
  <div id="app">
    <!-- 3.使用组件 -->
    <my-cpn></my-cpn>
    <my-cpn></my-cpn>
    <my-cpn></my-cpn>
    <cpnc></cpnc>
  </div>
```

简单的组件示例

```
<div id="app">
    <!-- 3.使用组件 -->
    <my-cpn></my-cpn>
    <my-cpn></my-cpn>
    <my-cpn></my-cpn>
    <cpnc></cpnc>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
  <script>
    // 1.创建组件构造器对象
    const cpnc = Vue.extend({
      template:`
        <div>
          <h2>标题</h2>
          <p>内容1...<p>
          <p>内容2...<p>
        </div>`
    })
    // 2.注册组件  （全局组件，可以在多个vue实例中使用）
    Vue.component('my-cpn', cpnc)
    const app = new Vue({
      el:"#app",
      data:{
      },
      components:{//局部组件创建
        cpnc:cpnc
      }
    })
  </script>
```

### 2 全局组件和局部组件

##### 2.1 全局组件

全局组件，可以在多个vue实例中使用，类似于全局变量。

 使用`Vue.component('my-cpn', cpnc)`方式注册，直接使用`<my-cpn></my-cpn>`调用。`my-cpn`是全局组件的名字，`cpnc`是定义的组件对象。

##### 2.2 局部组件

局部组件，只能在当前vue实例挂载的对象中使用，类似于局部变量，有块级作用域。

**注册方式**

```
const app = new Vue({
  el:"#app",
  components:{//局部组件创建
    cpnc:cpnc
  }
})
```

使用方式与全局变量一样，直接使用`<cpnc></cpnc>`调用。`cpnc:cpnc`第一个cpnc是给组件命名的名字，第二个是定义的组件对象。如果俩个同名也可以直接使用es6语法：

```
components:{//局部组件创建
	cpnc
}
```

### 3 父组件与子组件

组件就是一个vue实例，vue实例的属性，组件也可以有，例如data、methods、computed等。

```
	<div id="app">
  	<cpn2></cpn2>
	</div>

  <script>
    // 1.创建组件构造器对象
    const cpn1 = Vue.extend({
      template:`
        <div>
          <h2>标题1</h2>
          <p>组件1</p>
        </div>`
    })
    // 组件2中使用组件1
    const cpn2 = Vue.extend({
      template:`
        <div>
          <h2>标题2</h2>
          <p>组件2</p>
          <cpn1></cpn1>
        </div>`,
      components:{
        cpn1:cpn1
      }
    })

    const app = new Vue({
      el:"#app",
      components:{//局部组件创建
        cpn2:cpn2
      }
    })
  </script>
```

上述代码中定义了两个组件对象`cpn1`和`cpn2`，在组件`cpn2`中使用局部组件注册了`cpn1`，并在`template`中使用了注册的`cpn1`，然后在vue实例中使用注册了局部组件`cpn2`，在vue实例挂载的div中调用了`cpn2`，`cpn2`与`cpn1`形成父子组件关系。

### 4 注册组件的语法糖

注册组件时候可以不实例化组件对象，直接在注册的时候实例化。`{}`就是一个组件对象。

```
  <div id="app">
    <cpn1></cpn1>
    <cpn2></cpn2>
  </div>

  <script>
    // 1.注册全局组件语法糖
    Vue.component('cpn1', {
      template:`
        <div>
          <h2>全局组件语法糖</h2>
          <p>全局组件语法糖</p>
        </div>`
    })

    const app = new Vue({
      el:"#app",
      components:{//局部组件创建
        cpn2:{
          template:`
        <div>
          <h2>局部组件语法糖</h2>
          <p>局部组件语法糖</p>
        </div>`
        }
      }
    })
  </script>
```

##### 4.1 组件模板的分离写法

 使用`script`标签定义组件的模板，`script`标签注意类型是`text/x-template`。

```
  <!-- 1.script标签注意类型是text/x-template -->
  <script type="text/x-template" id="cpn1">
    <div>
        <h2>组件模板的分离写法</h2>
        <p>script标签注意类型是text/x-template</p>
      </div>
  </script>
```

#####  4.2 template标签

 使用`template`标签，将内容写在标签内。

```
<!-- 2.template标签 -->
  <template id="cpn2">
    <div>
      <h2>组件模板的分离写法</h2>
      <p>template标签</p>
    </div>
  </template>
```

调用分离的模板，使用`template:'#cpn1'`

```
  <script>
    const app = new Vue({
      el: "#app",
      components: { //局部组件创建
        cpn1:{
          template:'#cpn1'
        },
        cpn2: {
          template: '#cpn2'
        }
      }
    })
  </script>
```

### 5 组件的数据

##### 5.1 数据存放

前面说过vue组件就是一个vue实例，相应的vue组件也有`data`属性来存放数据。

```
  <div id="app">
    <cpn1></cpn1>
  </div>

  <script>

    const app = new Vue({
      el: "#app",
      components: { //局部组件创建
        cpn1:{
          template:'<div>{{msg}}</div>',
          data(){
            return {
              msg:"组件的数据存放必须要是一个函数"
            }
          }
        }
      }
    })
  </script>
```

在`template`中使用组件内部的数据`msg`。

##### 5.2 组件的data为什么必须要是函数

组件的思想是复用，定义组件当然是把通用的公共的东西抽出来复用。

在复用组件的时候肯定希望，各自组件用各自的变量，如果确实需要都用一样的，可以全局组件注册，也可以是用vuex来进行状态管理。

### 6 父组件向子组件传递数据

> v-bind是 不支持使用驼峰标识的，例如`cUser`要改成`c-User`。

##### 6.1 props

```
const cpn = {
  template: "#cpn",
  props: { 
          cmessage: {
          type: String,
          default: 'zzzzz',
          required: true //在使用组件必传值
          }
  }
}
```

向cmessage对象传值

```
<div id="app">
    <cpn :cMessage="message"></cpn>
</div>
<script>    
const app = new Vue({
      el: "#app",
      data: {
        message: "你好",
        movies: ["复仇者联盟", "钢铁侠", "星际穿越", "哪吒传奇"]
      },
      components: {
        cpn
      }
    })
  </script>
```

##### 6.2 props属性使用

###### 数组写法

```
props: ['cmovies', 'cmessage']
```

###### 对象写法

```
  props: { 
          cmessage: {
          type: String,
          default: 'zzzzz',
          required: true //在使用组件必传值
          }
  }
```

###### props属性的类型限制

```
//1.类型限制(多个类使用数组)
cmovies:Array,//限制为数组类型
cmessage:String,//限制为Strin类型
cmessage:['String','Number']//限制为String或Number类型
```

###### props属性的默认值

```
// 2.提供一些默认值，以及必传值
cmessage: {
	type: String,
	default: 'zzzzz',//默认值
}
```

###### props属性的必传值

```
cmessage: {
	type: String,
	default: 'zzzzz',
	required: true //在使用组件必传值
}
```

###### 类型是Object/Array，默认值必须是一个函数

```
//类型是Object/Array，默认值必须是一个函数
cmovies: {
	type: Array,
	default () {
		return [1, 2, 3, 4]
	}
},
```

###### 自定义验证函数

```
vaildator: function (value) {
	//这个传递的值必须匹配下列字符串中的一个
	return ['zzzzz', 'ttttt', 'yyy'].indexOf(value) !== -1
}
```

###### 自定义类型

```
function Person(firstName,lastName) {
	this.firstName = firstName
	this.lastName = lastName
}
cmessage:Person//限定了cmeessage必须是Person类型
```

### 7 综合使用

```
	<div id="app">
    <cpn :cMovies="movies" :cMessage="message"></cpn>
  </div>
  <template id="cpn">
    <div>
      <ul>
        <li v-for="(item, index) in cmovies" :key="index">{{item}}</li>
      </ul>
      <h2>{{cmessage}}</h2>
    </div>
  </template>

  <script>
    function Person(firstName,lastName) {
      this.firstName = firstName
      this.lastName = lastName
    }
    // 父传子：props
    const cpn = {
      template: "#cpn",
      // props: ['cmovies', 'cmessage'],//数组写法
      props: { //对象写法
        // 1.类型限制(多个类使用数组)
        // cmovies:Array,
        // cmessage:String,
        // cmessage:['String','Number'],
        // 2.提供一些默认值，以及必传值
        cmessage: {
          type: String,
          default: 'zzzzz',
          required: true //在使用组件必传值
        },
        //类型是Object/Array，默认值必须是一个函数
        cmovies: {
          type: Array,
          default () {
            return [1, 2, 3, 4]
          }
        },
        // 3.自定义验证函数
        // vaildator: function (value) {
        //   //这个传递的值必须匹配下列字符串中的一个
        //   return ['zzzzz', 'ttttt', 'yyy'].indexOf(value) !== -1
        // }
        // 4.自定义类型
        // cmessage:Person,
      },
      data() {
        return {
        }
      },
      methods: {

      },
    };
    const app = new Vue({
      el: "#app",
      data: {
        message: "你好",
        movies: ["复仇者联盟", "钢铁侠", "星际穿越", "哪吒传奇"]
      },
      components: {
        cpn
      }
    })
  </script>
```

### 8 子组件向父组件传递数据$emit

子组件向父组件传值，使用自定义事件`$emit`。

1.在子组件中定义一个方法`btnClick(item)`，使用`$emit`，'itemclick'是事件名，`item`是传过去的值。

```
methods: {
	btnClick(item) {
		this.$emit('itemclick', item)
	}
},
```

2.在子组件中监听点击事件并回调此方法

```
<div>
      <button v-for="(item, index) in categoties" :key="index" @click="btnClick(item)">{{item.name}}</button>
    </div>
```

3.在父组件中定义一个方法cpnClcik(item)

```
methods: {
	cpnClcik(item) {
		console.log('cpnClick'+item.name);
	}
},
```

4.并在父组件（vue实例）中调用`<cpn @itemclick="cpnClcik"></cpn>`（*不写参数默认传递btnClick的item* ），父组件监听事件名为`itemclick`的子组件传过来的事件。

```
<cpn @itemclick="cpnClcik"></cpn>
```

### 9 父子组件通信案例

##### 9.1 父子组件的值双向绑定

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>组件通信-父子通信案例</title>
</head>

<body>
  <!-- 父组件 -->
  <div id="app">

    <cpn :number1='num1' :number2='num2' @num1change="num1Change" @num2change="num2Change"></cpn>

    <h2>父组件{{num1}}</h2>
    <input type="text" v-model="num1" >
    <h2>父组件{{num2}}</h2>
    <input type="text" v-model="num2">

  </div>

  <!-- 子组件 -->
  <template id="cpn">

    <div>
      <h2>{{number1}}</h2>
      <h2>{{dnumber1}}</h2>
      <input type="text" :value="dnumber1" @input="num1input">
      <h2>{{number2}}</h2>
      <input type="text" :value="dnumber2" @input="num2input">
    </div>
  </template>

  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>

  <script>
    // 父传子：props
    const cpn = {
      template: "#cpn",
      data() {
        return {
          dnumber1:this.number1,
          dnumber2:this.number2
        }
      },
      props:{
        number1:[Number,String],
        number2:[Number,String],
      },
      methods: {
        num1input(event){
          this.dnumber1 = event.target.value
          this.$emit('num1change',this.dnumber1)
        },
        num2input(event){
          this.dnumber2 = event.target.value
          this.$emit('num2change',this.dnumber2)
        }
      },
    };
    const app = new Vue({
      el: "#app",
      data() {
        return {
          num1:1,
          num2:2,
        }
      },
      methods: {
        num1Change(value){
          this.num1=value
        },
        num2Change(value){
          this.num1=value
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



##### 9.2 使用watch实现。

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>组件通信-父子通信案例(watch实现)</title>
</head>

<body>
  <!-- 父组件 -->
  <div id="app">

    <cpn :number1='num1' :number2='num2' @num1change="num1Change" @num2change="num2Change"></cpn>

    <h2>父组件{{num1}}</h2>
    <input type="text" v-model="num1" >
    <h2>父组件{{num2}}</h2>
    <input type="text" v-model="num2">

  </div>

  <!-- 子组件 -->
  <template id="cpn">

    <div>
      <h2>{{number1}}</h2>
      <input type="text" v-model="dnumber1">
      <h2>{{number2}}</h2>
      <input type="text" v-model="dnumber2">
    </div>
  </template>

  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>

  <script>
    // 父传子：props
    const cpn = {
      template: "#cpn",
      data() {
        return {
          dnumber1:this.number1,
          dnumber2:this.number2
        }
      },
      props:{
        number1:[Number,String],
        number2:[Number,String],
      },
      watch: {
        dnumber1(newValue){
          this.dnumber1 = newValue * 100
          this.$emit('num1change',newValue)
        },
        dnumber2(newValue){
          this.dnumber1 = newValue * 100
          this.$emit('num2change',newValue)
        }
      },
    };
    const app = new Vue({
      el: "#app",
      data() {
        return {
          num1:1,
          num2:2,
        }
      },
      methods: {
        num1Change(value){
          this.num1=value
        },
        num2Change(value){
          this.num1=value
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

### 10 父访问子

##### 10.1 $children方式

使用`this.$children`直接获取**当前实例的直接子组件，需要注意 `$children` 并不保证顺序，也不是响应式的。**如果你发现自己正在尝试使用 `$children` 来进行数据绑定，考虑使用一个数组配合 `v-for` 来生成子组件，并且使用 Array 作为真正的来源



##### 10.2 $refs方式

先定义子组件,直接调用

```
<cpn ref="aaa"></cpn>
```



父组件访问子组件，有时候我么你需要直接操作子组件的方法，或是属性，此时需要用到`$children`和`$ref`。

```
<!-- 父组件 -->
  <div id="app">
    <cpn></cpn>
    <cpn></cpn>
    <cpn ref="aaa"></cpn>
    <button @click="btnClick" >按钮</button>
  </div>
  <!-- 子组件 -->
  <template id="cpn">
    <div>
      我是子组件
    </div>
  </template>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
  <script>
    // 父传子：props
    const cpn = {
      template: "#cpn",
      data() {
        return {
          name:"我是子组件的name"
        }
      },
      methods: {
        showMessage(){
          console.log("showMessage");
        }
      },
    };
    const app = new Vue({
      el: "#app",
      data() {
        return {
          message:"hello"
        }
      },
      methods: {
        btnClick(){
          // 1.children
          // console.log(this.$children[0].showMessage)
          // for (let cpn of this.$children) {
          //   console.log(cpn.showMessage)
          // }
          // 2.$ref
          console.log(this.$refs.aaa.name)
        }
      },
      components: {
        cpn
      },
    })
  </script>
```

 

### 11 子访问父parent

```
<body>
  <!-- 父组件 -->
  <div id="app">
    <cpn></cpn>
    <cpn></cpn>
    <cpn ref="aaa"></cpn>
  </div>

  <!-- 子组件 -->
  <template id="cpn">
    <div>
      子组件消息：{{message}}
      <button @click="btnClick" >子组件按钮</button>
    </div>
  </template>


  <script>
    // 父传子：props
    const cpn = {
      template: "#cpn",
      data() {
        return {
          message:"我是子组件的name"
        }
      },
      methods: {
        btnClick(){
          console.log("子组件按钮被点击")
          // 1.访问父组件$parent
          this.message = this.$parent.message
          // 2.访问根组件$root
          console.log(this.$root)
          console.log(this.$root.message)
        }
      },
    };
    const app = new Vue({
      el: "#app",
      data() {
        return {
          message:"我是父组件消息"
        }
      },
      methods: {

      },
      components: {
        cpn
      },
    })
  </script>
</body>
```

