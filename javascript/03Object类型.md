基本数据类型: String, Number, Boolean, Null, Undifined

引用数据类型: Object



对象类型属于一种复合的基本数据类型

## 对象数据类型

### 1 分类

1.内建对象

​	\- 由ES标准定义的对象，在任何的ES的实现中都可以使用；

​	\- 比如： Math, String, Number, Boolean, Functions, Object, Array, Events, RegExp, Date

2.宿主对象

​	\- 由JS运行环境提供的对象，目前来说主要指浏览器对象

​	\- 比如： Dom(Document, Element, Attribute, Event), Bom(Window, Navigator, Screen, History, Location)

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

### 3 in  检查对象属性

> 属性名 in 对象名,返回boolean

**in检查属性时，对象中没有，但原型中有，返回true**

**检查自己的属性时，使用 hasOwnPrototype("");**

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
> ​	\- 最后一个属性，不要写,

var obj = {

​	name:"猪八戒", 

​	age:28,

​	sex: "F"

​	test: {   <!--对象里包含对象-->

​		name: "沙和尚";

​	}

 }

函数

​	\- 函数也是一个对象

​	\- 函数中可以封装一些功能，在需要时调用执行

​	\- 使用typeof时，返回 function

### 5 函数对象

##### 5.1 创建函数对象

​	\- 封装的代码以字符串形式传递给构造函数

var fun = new Function("字符串");  <!--开发中很少使用构造函数来创建对象-->

​	\- 函数中的代码会在函数调用时执行

​	\- 调用函数语法: 函数对象()

​	\- 当调用函数时，函数中的代码会按照顺序执行

fun();  <!--调用时 执行字符串-->

**声明方式创建函数对象**

语法：

function 函数名(参数1, 参数2, ……){

​	语句

}

例子：

function fun2(){

}

**使用表达式创建函数**

语法：

var 变量 = function(参数*  ){

};  <!--赋值语句后有;-->

##### 5.2 函数参数

**可传参数： 基本数据类型，引用数据类型（对象），函数（对象）**

fun(sum)  <!--传入 sum函数对象， 相当于直接使用对象-->  

> 传入结果：
>
> sum(a, b){
>
> ​    var sum = a + b;
>
> ​    document.write(sum);
>
> }

fun(sum(1,2))  <!--传入3 函数返回值，相当于调用函数返回值-->

> 传入结果：
>
> function sum(a, b){
>
> ​    var sum = a + b;
>
> ​    document.write(sum);
>
> }



// 定义求和的函数

  function sum(a, b){

​    var sum = a + b;

​    document.write(sum);

  }

 <!--调用函数时，实参不会检查类型，也不会检查实参个数-->

  sum(10, 20);	<!--输出：30-->

  sum(123, 456);	 <!--输出：579-->

  sum(123, "hello");	 <!--输出：123hello-->

  sum(true, false)	<!--输出： 1-->

  sum(123)	<!--输出：NaN =>   123 && undifined-->

**传入参数过多时，将参数写成对象类型传入**

function info(o){

  document.write("我的姓名：" + o.name + ",我的年龄：" + o.age  + ",我的性别：" + o.sex + "<br/>")

  }

  var obj = {

​    name: "icon",

​    age: "18",

​    sex: "F"

  } 

  info(obj);

##### 5.3 返回值

语法：return 返回值

>  定义变量接收return返回值
>
>  在函数中，return后的语句不执行
>
>  如果return语句后不跟任何值，返回undifined
>
>  函数中不写return，返回undefined
>
>  alert无返回值，返回undefined

  function sum(a, b){

​    var sum = a + b;

​    return sum;

  }

var result = sum(1, 2);  <!--result接收返回值-->

document.write(result)

**练习**

// 定义计算圆面积的函数

  function pie(r){

​    return 3.14\*r\*r

  }

  var result2 = pie(2)

  document.writeln("圆的面积是：" + result2)

>   break，continue, return
>
>   break 退出当前循环
>
>   continue 跳过本次循环
>
>   return 结束整个函数

##### 5.4 匿名函数&执行

<!--立即执行函数，立即执行函数：定义完马上执行-->

<!--匿名函数，注意{}被认为是代码块，会报错，可以用()包括整个代码块-->

<!--要被调用执行，后面加()-->

   (function (){

​     alert("我是匿名函数");

   })();

**例：**

(function(a,b){

​     var sum = a + b;

​     console.log("a+b=" + sum);

   })(1,2);

返回:  3

##### 5.5 属性

1 检查对象是否存在指定属性

 - 属性名 in 对象名,返回boolean
 - console.log("age" in obj2);

2 函数也可以作为对象的属性

​	- 如果一个函数作为对象的属性，那么我们称这个函数是这个对象的方法，调用函数就说调用对象的方法

var obj2 = {

​	name = "hell";

​	age = 18;

​	sayName = function(){    <!--属性是函数-->

​		console.log(obj2.name)

​	}

}

obj2.sayName()  <!--sayName()方法-->

### 6 枚举对象

##### 6.1 获取枚举对象中的属性

​      //  使用 for(in)语句，有几个属性循环几次

 for(var n in obj){

​	console.log(n);   <!--n输出对象中属性名-->

​	console.log(obj[n]);    <!--输出对象数值值-->

}

### 7 作用域

作用域范围

 - 作用域指一般变量的作用范围

 - 1.全局作用域

     - 在script标签中的js代码，都在全局作用域；

     - 全局作用域在页面打开时创建，在页面关闭时销毁；

     - 全局作用域中有一个**全局对象window**，代表浏览器窗口；

     - 在全局作用域中，1.创建的变量都会作为window对象的属性保存(a == window.a)； 

       ​                                2.创建的函数都会作为widow对象的方法保存

   - 全局作用域变量在任何地方都可以使用

- 2.函数作用域，也称局部作用域
  	- 调用函数时创建函数作用域，函数执行完毕后，函数作用域销毁；
  	- 每调用一次函数，就创建一个新的函数作用域，他们之间相互独立；
  	- 在函数作用域中，可以访问到全局作用域；
  	- 在函数作用域使用变量时，先在自身作用域内寻找，如果没有则在上一级中寻找（就近原则），如果全局作用域中任然没有，则会报错ReferencrError；
  	- 如果要在**函数作用域中访问全局作用域，则使用window.a**；
  	- 形参相当于在函数作用域中声明了变量

###### 变量的声明提前

>  - 使用var 声明的变量，会在所有代码执行前被声明，但不会被赋值；
>  - 但是如果声明变量是不适应var ,则声明不会被提前

```
如下：var a 提前，但赋值123则在log后执行<!--输出undefined--> 

console.log(a)
var a = 123;
```

```
如下：  报错 a is not defined

console.log(a)
a = 123
```

###### 函数声明提前

> - 使用函数声明function fun1(){}，他会在所有代码执行前被创建；
> - 使用var fun2 = function(){}，var fun2变量会提前声明，函数赋值未被提前

```
fun1()   <!--此处调用，会被执行，输出结果：fun1 -->
fun2()	<!--此处调用，变量fun2会被提前声明， 但函数未被赋值，输出结果：undefined-->
function fun1(){ <!-- 函数声明会被提前-->
	console.log("fun1")
}

var fun2 = function(){  <!-- 函数声明不会被提前-->
	console.log("fun2")
}
```

### 8 this

解析器在调用函数时每次都会想函数内部传递一个隐含的参数this 

	- this指向一个对象，这个对象成为函数执行的上下文对象；
 - 根据函数**调用方式**不同，this会指向不同的对象
   	- 以函数形式调用时，this是window；
   	- 以方法形式调用时，this是调用的object；
   	- 以构造函数形式调用时，this是新创建的对象。

### 9 工厂方法创建对象

- 通过该方法可以批量创建对象，减少重复代码;
- 创建的对象都是Object类型；
- 局限-导致无法区分多种不同类型的对象

```
function createPerson(name, age, sex){
	var obj = new Object();
	obj.name = name,
	obj.age = age,
	obj.sex = sex
	return obj;
};

var obj2 = createPerson("Hello", 18, "F");
console.log(obj2);
var obj3 = createPerson("Word", 29, "M");
console.log(obj3);
```

### 10 构造函数

- 构造函数是一个普通函数，创建方式和普通函数一样；

- 不同的是，构造函数习惯上首字母大写；

  区别：

  	- 调用方式不同，普通函数直接调用，构造函数使用new关键字调研。

##### 10.1构造函数执行流程

- 1.创建新的对象；
- 2.将新建的对象设置为this；在构造函数中可以使用this来引用新建的对象；
- 3.逐行执行函数中的代码；
- 4.将新建的对象作为返回值返回

###### 构造函数

```
function Persion(name, age, sex){
	this.name = name;
	this.age = age;
	this.sex = sex
	this.sayName = function(){   //此处会重复调用,创建多个
		alert("My name is " + this.name);
	}
}
var per = Persion();	//普通函数
var per = new Persion("Hell", 18, "F");  //构造函数  this == per
```

##### 10.2 构造函数共享方法

###### **构造函数的改进1**:

```
function Persion(name, age, sex){
	this.name = name;
	this.age = age;
	this.sex = sex
	this.sayName = sayNameFun(this.name);
}

//将函数定义在全局作用域中，污染了全局作用域命名空间，也很不安全  ->原型
function sayName(name){   //指向同一个sayName()
	alert("My name is " + name);
}
var per = Persion();	//普通函数
var per = new Persion("Hell", 18, "F");  //构造函数  this == per
```

> 对象 instanceof 构造函数  检查对象是否是构造函数的实例

### 11 原型对象

##### 11.1 原型 prototype

 - 创建的每个函数，解析器都会向函数中添加prototype属性[object]；

 - 当函数作为普通函数，调用prototype；

 - 当函数通过构造函数调用时，他所创建的所有对象都会有一个隐含的属性\_\_proto\_\_，通过\_\_proto\_\_来访问该属性对象(即 函数的prototype和构造函数的\_\_proto\_\_都指向原型对象)，例1；

 - 原型对象相当于一个公共的区域，所有同一个类的实例都可以访问该原型对象

   所以可以将**对象中共有的内容，统一设置到原型对象中**，例2；

- 当访问对象的属性或方法时，

  - **先在自身中寻找，如果有则直接使用，**
  - **如果没有，则在原型对象中寻找，**
  - **如果原型对象中没有，则继续在原型对象的原型中寻找，直到找到Object对象的原型，**
  - **Object对象的原型没有原型，如果在Object中依然没有找到，则返回undifined**

- 原型对象也是对象，所以他也有原型

  <img src="/Users/yuanwei/Library/Application Support/typora-user-images/image-20201001174859462.png" alt="image-20201001174859462" style="zoom: 33%;" />

```
例1:
function createPerson(){
  
};

var obj2 = createPerson();
console.log(obj2);
var obj3 = createPerson();
console.log(obj3);
var obj4 = new createPerson()
console.log(obj4);

console.log(createPerson.prototype);  /*  打印函数的原型对象 */
console.log(obj4.__proto__);  /* 打印构造函数的原型对象 */
//比较createPerson和其构造函数的原型对象
console.log(createPerson.prototype == obj4.__proto__);   //返回 ture
```

```
例2:
function createPerson(){
};
createPerson.prototype.a = 124;  //原型对象中添加a属性
var obj5 = new createPerson();
```

###### **构造函数的改进2**:

```
function Person(name, age, sex){
	this.name = name;
	this.age = age;
	this.sex = sex
	this.sayName = sayNameFun(this.name);
}

//向原型中添加sayName方法
Person.prototype.sayName= function(){
	alert("My name is " + this.name);
}

var per = Person();	//普通函数
var per = new Person("Hell", 18, "F");  //构造函数  this == per
```

#####  11.2 访问原型

**检查自己的属性时，使用 hasOwnPrototype("");**

使用console.log()返回的时该对象的原型的toString()；

修改原型里的toString()

```
function Person(name, age, sex){
	this.name = name;
	this.age = age;
	this.sex = sex
}
Person.prototype.toString = function(){
	return "Person[name=" + this.name + ",age=" + this.age + ",sex=" + this.sex +"]";
}

var per = new Person("Hill", 18, "F");
console.log(per)
```

