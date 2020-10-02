数组[Array]

- 数组也是一个对象，和普通对象类似；
- 不同的是普通对象使用字符串作为属性名，而数组使用index索引操作元素；
- 数组中的元素可以是任意数据类型，包括对象类型，函数类型，数组类型；
- 数组里也可以放数组，成二位数组

### 1 创建数组

```
//创建数组方法1
var arr = new Array(10, 20, 30);
console.log(typeof arr);  //输出：object

arr[0] = 10;	// 向数组添加元素
arr[1] = 20;
console.log(arr);
```

```
//创建数组方法2
var arr1 = [10, 20, 30];
```

```
//区别
var arr = new Array(10)	//长度为10的数组
var arr = [10]	//长度为1的数组
```

### 2 数组属性

| 属性                                                         | 描述                               |
| :----------------------------------------------------------- | :--------------------------------- |
| [constructor](https://www.w3school.com.cn/jsref/jsref_constructor_array.asp) | 返回对创建此对象的数组函数的引用。 |
| [length](https://www.w3school.com.cn/jsref/jsref_length_array.asp) | 设置或返回数组中元素的数目。       |
| [prototype](https://www.w3school.com.cn/jsref/jsref_prototype_array.asp) | 使您有能力向对象添加属性和方法。   |

**length**, constructor, prototype

##### 2.1 .length

最大索引值+1

arr.length

```
console.log(arr.length);
```

### 3 数组方法

| 方法                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [concat()](https://www.w3school.com.cn/jsref/jsref_concat_array.asp) | 连接两个或更多的数组，并返回结果。                           |
| [join()](https://www.w3school.com.cn/jsref/jsref_join.asp)   | 把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。 |
| [pop()](https://www.w3school.com.cn/jsref/jsref_pop.asp)     | 删除并返回数组的最后一个元素                                 |
| [push()](https://www.w3school.com.cn/jsref/jsref_push.asp)   | 向数组的末尾添加一个或更多元素，并返回新的长度。             |
| [reverse()](https://www.w3school.com.cn/jsref/jsref_reverse.asp) | 颠倒数组中元素的顺序。                                       |
| [shift()](https://www.w3school.com.cn/jsref/jsref_shift.asp) | 删除并返回数组的第一个元素                                   |
| [slice()](https://www.w3school.com.cn/jsref/jsref_slice_array.asp) | 从某个已有的数组返回选定的元素                               |
| [sort()](https://www.w3school.com.cn/jsref/jsref_sort.asp)   | 对数组的元素进行排序                                         |
| [splice()](https://www.w3school.com.cn/jsref/jsref_splice.asp) | 删除元素，并向数组添加新元素。                               |
| [toSource()](https://www.w3school.com.cn/jsref/jsref_tosource_array.asp) | 返回该对象的源代码。                                         |
| [toString()](https://www.w3school.com.cn/jsref/jsref_toString_array.asp) | 把数组转换为字符串，并返回结果。                             |
| [toLocaleString()](https://www.w3school.com.cn/jsref/jsref_toLocaleString_array.asp) | 把数组转换为本地数组，并返回结果。                           |
| [unshift()](https://www.w3school.com.cn/jsref/jsref_unshift.asp) | 向数组的开头添加一个或更多元素，并返回新的长度。             |
| [valueOf()](https://www.w3school.com.cn/jsref/jsref_valueof_array.asp) | 返回数组对象的原始值                                         |

##### 3.1 push()

向数组末尾添加元素，并**返回新数组的长度**

##### 3.2 pop()

删除数组最后一个元素，并**返回删除的数组元素**

##### 3.3 unshift()

数组开头添加元素，并**返回新数组的长度**

索引依次调整

##### 3.4 shift()

删除数组的第一个元素，并**返回该删除的元素**

##### 3.5 slice()

从已有数组选出某个元素，并**返回选出的数组元素，不会影响原数组**

> 参数：
>
> ​          1：必须-截取开始的索引位置；
>
> ​          2：可选-截取结束的索引位置，不包含结束索引，可以不写，意为至结束所有元素；
>
> ​      可以是负值slice(star,-end) 意为倒数第end；

##### 3.6 splice() 

删除数组中的指定元素，并**返回删除的元素，会影响原数组**

```
var arr2 = ["孙悟空", "猪八戒", "沙和尚"];
console.log("愿数组：" + arr2);

// 3.1 push  向数组末尾添加元素，并返回新数组的长度
result = arr2.push("白龙马");
console.log("push的返回值：" + result);  //4
console.log("push后：" + arr2);

arr2.push(蜘蛛精", "玉兔精");
console.log("push多个:" + arr2);

// 3.2 pop() 删除并返回数组的最后一个元素
var result = arr2.pop();	//删除并返回的是数组最后一个元素
console.log("pop的元素是：" + result);   //result="玉兔精"
console.log("pop后：" + arr2);

// 3.3 unshift() 数组开头添加元素，返回新数组的长度
var result = arr2.unshift("唐僧");
console.log("unsift的返回值：" + result);
console.log("unsift后：" + arr2);

// 3.4 shift() 删除数组的第一个元素，并返回该删除的元素
var result = arr2.shift();
console.log("shift的返回值：" + result);
console.log("shift后：" + arr2);

// 3.5 slice(star,end) 从已有数组选出某个元素，并返回选出的数组元素，不会影响原数组
/* 参数：
  1：必须-截取开始的索引位置；
  2：可选-截取结束的索引位置，不包含结束索引，可以不写，意为至结束所有元素；
  	 可以是负值slice(star,-end) 意为倒数第end；
*/ 
result = arr2.slice(1, 3)
console.log(result);
console.log("slice后：" + arr2);

// 3.6 splice() 删除数组中的指定元素，并将删除的元素作为返回值，会影响原数组
/* 参数：
  1: 必须-删除开始的索引位置；
  2: 必须-删除的元素数量；
  3: 可选-添加的元素
*/
result = arr2.splice(0,1);
console.log(result);
console.log("splice-2个参数后：" + arr2);

result = arr2.splice(0,0, "唐僧","孙悟空");
console.log(result);
console.log("splice-3个参数后：" + arr2);

//练习： 去除数组中重复数字
var arr41 = [1,2,6,3,2,1,4,5,2,6];
for(var i=0; i<arr41.length; i++){
  var curNum = arr41[i];
  for(var j=i+1; j<arr41.length; j++){
    if(curNum == arr41[j]){
      arr41.splice(j,1)
      // 当删除当前j的元素后，后面元素自动部位，需要在比较一次当前j所在的位置元素
      j--; //当删除一个元素后，前移一位
    }
  }
console.log(arr41);
}
console.log("去除重复后：" + arr41);
```

##### 3.7 concat()

连接两个或更多的数组，并**返回连接结果。不会影响原数组。**

##### 3.8 join() 

**将数组转为字符串并返回，不会影响原数组。**

可以指定字符串的连接符，默认`,`

##### 3.9 reverse()

 **翻转字符串元素,返回翻转后的数组，会改变原数组**

##### 3.10 sort()  

数组元素排序,会影响原数组,unicode编码排序；

纯数字数组也按照unicode编码排序

可以在sort() 中添加回调函数来指定排序方式

	- 回调函数中需要定义两个参数
	- 浏览器将分别使用数组中的元素作为参数去调用回调函数
	- 使用那个元素不确定，但确定的是数组中第一个参数一定在第二个之前。

浏览器根据回调函数的返回值决定元素的位置

- 返回值>0，则元素交换位置
- 返回值<0，则位置不变
- 返回值=0，则不交换

```
var arr42 = ["唐僧", "孙悟空", "猪八戒", "沙和尚", "白龙马"];
var arr43 = ["蜘蛛精", "玉兔精", "白骨精"];
var arr44 = ["太上老君", "太白金星", "二郎神"];

// 3.7 contact() 连接数组
var result = arr42.concat(arr43, arr44, "牛魔王");
console.log(result);
// result = ["唐僧", "孙悟空", "猪八戒", "沙和尚", "白龙马", "蜘蛛精", "玉兔精", "白骨精","太上老君", "太白金星", "二郎神", "牛魔王"]

// 3.8 join() 将数组转为字符串返回，不会影响原数组
var result = arr42.join("-")
console.log(result);
console.log(typeof result);

// 3.9 reverse() 翻转字符串元素,返回翻转后的数组，会改变原数组
var result = arr42.reverse();
console.log(result);
console.log(arr42);

// 3.10 sort()  数组元素排序,会影响原数组,unicode编码排序
var result = arr42.sort();
console.log(result);
console.log(arr42);

var result = arr45.sort();
console.log(result);
console.log(arr45);

// 纯数字数组也按照unicode编码排序
var result = arr46.sort();
console.log(result);
console.log(arr46);

/* 可以在sort() 中添加回调函数来指定排序方式
   - 回调函数中需要定义两个参数
   - 浏览器将分别使用数组中的元素作为参数去调用回调函数
   - 使用那个元素不确定，但确定的是数组中第一个参数一定在第二个之前。
  浏览器根据回调函数的返回值决定元素的位置
   - 返回值>0，则元素交换位置
   - 返回值<0，则位置不变
   - 返回值=0，则不交换
*/
var arr47 = [5, 4, 3, 6]
arr47.sort(function(a, b){
console.log("a = " + a);
console.log("b = " + b);
//a = 4, b = 5;
//a = 3, b = 4;
//a = 6, b = 3;
console.log(typeof a);
// if(a>b){
//   return -1;
// }
// if改进
return a-b
})
console.log(arr47);
```



### 4 数组遍历

##### 4.1 for循环

```
var arr4 = ["唐僧", "孙悟空", "猪八戒", "沙和尚", "白龙马"];
for(var i=0; i<arr4.length; i++){
	console.log(arr4[i]);
	}
```

**练习**

```
function Person(name, age){
  this.name = name;
  this.age =age;
}

//修改Person原型的toString
Person.prototype.toString = function(){
	return "Person[name:" + this.name + ",age:" + this.age + "]";
}

//创建Person对象
var per = new Person("孙悟空", 18);
var per2 = new Person("猪八戒", 28);
var per3 = new Person("沙和尚", 38);
var per4 = new Person("红孩儿", 8);

// 将对象保存在数组
var perArr = [per, per2, per3, per4];
console.log(perArr);

// 要求：提取满18岁的对象，然后封装到新数组中返回

// 实现：
function getAdult(arr){
  var arrAdult = [];
  console.log(arr);
  for(var i=0; i< arr.length; i++){
    console.log(arr[i].age);
    if(arr[i].age > 18){
      arrAdult.push(arr[i]);
      }
    }
  return arrAdult;
}

result = getAdult(perArr);
console.log(result);
```

##### 4.2 forEach方法

- 支持IE8+；
- 需要函数作为参数；
- 执行次数是元素个数，每次执行将遍历的实参作为参数传递进来；
  - 第一个参数：遍历的元素
  - 第二个参数：遍历的元素索引
  - 第三个参数：遍历的对象

```
var arr5 = ["唐僧", "孙悟空", "猪八戒", "沙和尚", "白龙马"];
arr5.forEach(function(value, index, arr){
  //console.log('西游记');
  console.log(value);
  console.log(index);
  console.log(arr);
})
```

