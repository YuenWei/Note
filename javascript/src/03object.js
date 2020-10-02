var obj = new Object;
obj.name = "icon";
obj.age = 18;
obj.sex = 'F';

// 读取object
console.log(obj.name);

// 属性值也可以是对象类型
var obj2 = new Object();
var obj3 = new Object();
obj3.name = "icon";
obj2.name = obj3;
console.log(obj2);
console.log(obj2.name);

// 检查对象是否存在指定属性
// 属性名 in 对象名,返回boolean
console.log("age" in obj2);


// 定义求和的函数
function sum(a, b){
  var sum = a + b;
  // document.write(sum + "<br>");
  return sum;
}
var result = sum(10, 20);
document.write(result + "<br>");
var result = sum(123, 456);
document.write(result + "<br>");
var result = sum(123, "hello");
document.write(result + "<br>");

// 函数方式判断是否偶数
function isOu(num){
  if(num % 2 ==0){
    document.write(num + "是偶数" + "<br/>")
  }else{
    document.write(num + "是奇数" + "<br/>")
  }
}
var result1 = isOu(199);

// 定义计算圆面积的函数
function pie(r){
  return 3.14*r*r
}
var result2 = pie(2)
document.write("圆的面积是：" + result2 + "<br/>")

// 传入参数过多时，将参数写成对象类型传入
function info(o){
   document.write("我的姓名：" + o.name + ",我的年龄：" + o.age  + ",我的性别：" + o.sex + "<br/>")
}
var obj = {
  name: "icon",
  age: "18",
  sex: "F"
} 
info(obj);

//立即执行函数：定义完马上执行
//匿名函数，注意{}被认为是代码块，会报错，可以用()包括整个代码块
//  要被调用执行，后面加（）
 (function (){
   alert("我是匿名函数");
 })();
//  比如
 (function(a,b){
   var sum = a + b;
   document.write("a+b=" + sum);
 })(1,2);


//工厂模式创建对象
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

var obj4 = new createPerson("icon", 38, "F")
console.log(obj4);

console.log(createPerson.prototype);  /*  打印函数的原型对象 */
console.log(obj4.__proto__);  /* 打印构造函数的原型对象 */
//比较createPerson和其构造函数的原型对象
console.log(createPerson.prototype == obj4.__proto__);



// 原型对象
function createPerson(){
  
};
var obj2 = createPerson();
console.log(obj2);
var obj3 = createPerson();
console.log(obj3);
var obj4 = new createPerson()
console.log(obj4);

console.log(createPerson.prototype);
// console.log(obj2.__proto__);
console.log(obj4.__proto__);
//比较createPerson和其构造函数的原型对象
console.log(createPerson.prototype == obj4.__proto__);   //返回 ture

// 11.2
//**检查自己的属性时，使用 hasOwnPrototype("");**
//使用console.log()返回的时该对象的原型的toString()；
//修改函数对象原型里的toString()
createPerson.prototype.toString = function(){
	return "Person[name=" + this.name + ",age=" + this.age + ",sex=" + this.sex +"]";
}

// 12 arguments
/* 在调用函数时，浏览器每次都会传递两个隐含的参数
   1. 函数的上下文对象this;
   2. 封装实参的对象arguments
      - arguments 是一个 类数组对象，可以通过索引获取数据，也可以获取长度
      - 在调用函数时，传递的实参都会在arguments中保存
   3. arguments.callee对应的函数对象是当前指向的函数对象
*/

function fun(){
  console.log(arguments instanceof Array);
  console.log(Array.isArray(arguments));
  console.log(arguments);
  console.log(arguments.callee);
  console.log(arguments.length);
}
fun(1, 2);