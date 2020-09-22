基本数据类型: String, Number, Boolean, Null, Undifined

引用数据类型: Object



对象类型属于一种复合的基本数据类型

## 对象数据类型

### 1 分类

1.内建对象

​	\- 由ES标准定义的对象，在任何的ES的实现中都可以使用；

​	\- 比如： Math, String, Number, Boolean, Function, Object ……

2.宿主对象

​	\- 由JS运行环境提供的对象，目前来说主要指浏览器对象

​	\- 比如： Dom, Bom

3.自定义对象

​	\- 由开发人员自己创建的对象

### 2 创建对象

<!--使用new关键字调用的函数，是构造函数constructor-->

<!--构造函数是专门用来创建对象的函数-->

<!--typeof()检查一个对象是，返回object;-->

<!--如果读取对象中没有属性，返回undefined-->

<!--属性名不强制遵守标识符规范-->

> 特殊属性名写法，不建议使用
>
> obj["123"] = 678;
>
> 读取方法 obj["123"]

> 优先级最高  . > [] > new

创建对象

`var obj = new Object()`

向对象添加属性

`obj.name = "name";`

读取对象属性

`obj.属性名  obj.name`

修改属性

`obj.name = "new name"`

删除属性

`delete obj.name`

变量属性名

`obj.["name"] = "name";`

`obj.["age"] = 18;`

`var n = "name";`

`console.log(obj[n])`

输出：name    // obj["n = name"]的值

<!--属性值也可以是对象类型-->

`var obj2 = new Object();`

`var obj3 = new Object();`

`obj3.name = "icon";`

`obj2.name = obj3;`

`console.log(obj2);`

### 3 in  检查对象是否存在指定属性

> 属性名 in 对象名,返回boolean

console.log("age" in obj2);

<!--栈内存，队内存-->

基本数据类型赋值不改变赋值后的变量

var a = 123;

var b = a;  <!--变量保存的是赋值后的数值-->

a++

**输出： a:124, b:123**

对象数据类型会改变 <!--obj保存的是同一个地址-->

var obj1 = new Object();

obj1.name = "name1";

var obj2 = obj1;

ob1j.name = "name2";

**输出  obj2.name:name2   obj1.name:name2**

obj2 = null;

**输出  obj2:null   obj1:不受影响**

> 比较基本数据类型时，比较值；
>
> 比较引用数据类型时，比较的是内存地址

### 4.对象变量

var obj = new Object();  等于 var obj = {};

<!--创建对象时指定属性-->

> 属性名和属性值是一组一组的名值对结构
>
> ​	\- 名和值之间使用:链接，多个名值用,隔开；
>
> ​	\- 最后一个属性，不要写,

var obj = {

​	name:"猪八戒", 

​	age:28,

​	sex: "F"

​	test: {   <!--对象里包含对象-->

​		name: "沙和尚";

​	}

 }