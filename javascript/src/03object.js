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
