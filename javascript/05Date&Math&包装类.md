## Date对象

### 1 Date()对象

Date 获取当前的时间

```
var d = new Date();
console.log(d);
```

创建指定时间  (月/日/年  时:分:秒)  

```
var d2 = new Date("12/03/2020 10:09:56");
console.log(d2);
```

### 2 Date对象属性

| 属性                                                         | 描述                                 |
| :----------------------------------------------------------- | :----------------------------------- |
| [constructor](https://www.w3school.com.cn/jsref/jsref_constructor_date.asp) | 返回对创建此对象的 Date 函数的引用。 |
| [prototype](https://www.w3school.com.cn/jsref/jsref_prototype_date.asp) | 使您有能力向对象添加属性和方法。     |

### 3 Date对象方法

#### 方法表

| 方法                                                         | 描述                                                   |
| :----------------------------------------------------------- | :----------------------------------------------------- |
| [Date()](https://www.w3school.com.cn/jsref/jsref_Date.asp)   | 返回当日的日期和时间。                                 |
| [getDate()](https://www.w3school.com.cn/jsref/jsref_getDate.asp) | 从 Date 对象返回一个月中的某一天 (1 ~ 31)。            |
| [getDay()](https://www.w3school.com.cn/jsref/jsref_getDay.asp) | 从 Date 对象返回一周中的某一天 (0 ~ 6)。               |
| [getMonth()](https://www.w3school.com.cn/jsref/jsref_getMonth.asp) | 从 Date 对象返回月份 (0 ~ 11)。                        |
| [getFullYear()](https://www.w3school.com.cn/jsref/jsref_getFullYear.asp) | 从 Date 对象以四位数字返回年份。                       |
| [getYear()](https://www.w3school.com.cn/jsref/jsref_getYear.asp) | 请使用 getFullYear() 方法代替。                        |
| [getHours()](https://www.w3school.com.cn/jsref/jsref_getHours.asp) | 返回 Date 对象的小时 (0 ~ 23)。                        |
| [getMinutes()](https://www.w3school.com.cn/jsref/jsref_getMinutes.asp) | 返回 Date 对象的分钟 (0 ~ 59)。                        |
| [getSeconds()](https://www.w3school.com.cn/jsref/jsref_getSeconds.asp) | 返回 Date 对象的秒数 (0 ~ 59)。                        |
| [getMilliseconds()](https://www.w3school.com.cn/jsref/jsref_getMilliseconds.asp) | 返回 Date 对象的毫秒(0 ~ 999)。                        |
| [getTime()](https://www.w3school.com.cn/jsref/jsref_getTime.asp) | 返回 1970 年 1 月 1 日至今的毫秒数。                   |
| [getTimezoneOffset()](https://www.w3school.com.cn/jsref/jsref_getTimezoneOffset.asp) | 返回本地时间与格林威治标准时间 (GMT) 的分钟差。        |
| [getUTCDate()](https://www.w3school.com.cn/jsref/jsref_getUTCDate.asp) | 根据世界时从 Date 对象返回月中的一天 (1 ~ 31)。        |
| [getUTCDay()](https://www.w3school.com.cn/jsref/jsref_getUTCDay.asp) | 根据世界时从 Date 对象返回周中的一天 (0 ~ 6)。         |
| [getUTCMonth()](https://www.w3school.com.cn/jsref/jsref_getUTCMonth.asp) | 根据世界时从 Date 对象返回月份 (0 ~ 11)。              |
| [getUTCFullYear()](https://www.w3school.com.cn/jsref/jsref_getUTCFullYear.asp) | 根据世界时从 Date 对象返回四位数的年份。               |
| [getUTCHours()](https://www.w3school.com.cn/jsref/jsref_getUTCHours.asp) | 根据世界时返回 Date 对象的小时 (0 ~ 23)。              |
| [getUTCMinutes()](https://www.w3school.com.cn/jsref/jsref_getUTCMinutes.asp) | 根据世界时返回 Date 对象的分钟 (0 ~ 59)。              |
| [getUTCSeconds()](https://www.w3school.com.cn/jsref/jsref_getUTCSeconds.asp) | 根据世界时返回 Date 对象的秒钟 (0 ~ 59)。              |
| [getUTCMilliseconds()](https://www.w3school.com.cn/jsref/jsref_getUTCMilliseconds.asp) | 根据世界时返回 Date 对象的毫秒(0 ~ 999)。              |
| [parse()](https://www.w3school.com.cn/jsref/jsref_parse.asp) | 返回1970年1月1日午夜到指定日期（字符串）的毫秒数。     |
| [setDate()](https://www.w3school.com.cn/jsref/jsref_setDate.asp) | 设置 Date 对象中月的某一天 (1 ~ 31)。                  |
| [setMonth()](https://www.w3school.com.cn/jsref/jsref_setMonth.asp) | 设置 Date 对象中月份 (0 ~ 11)。                        |
| [setFullYear()](https://www.w3school.com.cn/jsref/jsref_setFullYear.asp) | 设置 Date 对象中的年份（四位数字）。                   |
| [setYear()](https://www.w3school.com.cn/jsref/jsref_setYear.asp) | 请使用 setFullYear() 方法代替。                        |
| [setHours()](https://www.w3school.com.cn/jsref/jsref_setHours.asp) | 设置 Date 对象中的小时 (0 ~ 23)。                      |
| [setMinutes()](https://www.w3school.com.cn/jsref/jsref_setMinutes.asp) | 设置 Date 对象中的分钟 (0 ~ 59)。                      |
| [setSeconds()](https://www.w3school.com.cn/jsref/jsref_setSeconds.asp) | 设置 Date 对象中的秒钟 (0 ~ 59)。                      |
| [setMilliseconds()](https://www.w3school.com.cn/jsref/jsref_setMilliseconds.asp) | 设置 Date 对象中的毫秒 (0 ~ 999)。                     |
| [setTime()](https://www.w3school.com.cn/jsref/jsref_setTime.asp) | 以毫秒设置 Date 对象。                                 |
| [setUTCDate()](https://www.w3school.com.cn/jsref/jsref_setUTCDate.asp) | 根据世界时设置 Date 对象中月份的一天 (1 ~ 31)。        |
| [setUTCMonth()](https://www.w3school.com.cn/jsref/jsref_setUTCMonth.asp) | 根据世界时设置 Date 对象中的月份 (0 ~ 11)。            |
| [setUTCFullYear()](https://www.w3school.com.cn/jsref/jsref_setUTCFullYear.asp) | 根据世界时设置 Date 对象中的年份（四位数字）。         |
| [setUTCHours()](https://www.w3school.com.cn/jsref/jsref_setutchours.asp) | 根据世界时设置 Date 对象中的小时 (0 ~ 23)。            |
| [setUTCMinutes()](https://www.w3school.com.cn/jsref/jsref_setUTCMinutes.asp) | 根据世界时设置 Date 对象中的分钟 (0 ~ 59)。            |
| [setUTCSeconds()](https://www.w3school.com.cn/jsref/jsref_setUTCSeconds.asp) | 根据世界时设置 Date 对象中的秒钟 (0 ~ 59)。            |
| [setUTCMilliseconds()](https://www.w3school.com.cn/jsref/jsref_setUTCMilliseconds.asp) | 根据世界时设置 Date 对象中的毫秒 (0 ~ 999)。           |
| [toSource()](https://www.w3school.com.cn/jsref/jsref_tosource_boolean.asp) | 返回该对象的源代码。                                   |
| [toString()](https://www.w3school.com.cn/jsref/jsref_toString_date.asp) | 把 Date 对象转换为字符串。                             |
| [toTimeString()](https://www.w3school.com.cn/jsref/jsref_toTimeString.asp) | 把 Date 对象的时间部分转换为字符串。                   |
| [toDateString()](https://www.w3school.com.cn/jsref/jsref_toDateString.asp) | 把 Date 对象的日期部分转换为字符串。                   |
| [toGMTString()](https://www.w3school.com.cn/jsref/jsref_toGMTString.asp) | 请使用 toUTCString() 方法代替。                        |
| [toUTCString()](https://www.w3school.com.cn/jsref/jsref_toUTCString.asp) | 根据世界时，把 Date 对象转换为字符串。                 |
| [toLocaleString()](https://www.w3school.com.cn/jsref/jsref_toLocaleString.asp) | 根据本地时间格式，把 Date 对象转换为字符串。           |
| [toLocaleTimeString()](https://www.w3school.com.cn/jsref/jsref_toLocaleTimeString.asp) | 根据本地时间格式，把 Date 对象的时间部分转换为字符串。 |
| [toLocaleDateString()](https://www.w3school.com.cn/jsref/jsref_toLocaleDateString.asp) | 根据本地时间格式，把 Date 对象的日期部分转换为字符串。 |
| [UTC()](https://www.w3school.com.cn/jsref/jsref_utc.asp)     | 根据世界时返回 1970 年 1 月 1 日 到指定日期的毫秒数。  |
| [valueOf()](https://www.w3school.com.cn/jsref/jsref_valueOf_date.asp) | 返回 Date 对象的原始值。                               |

##### 3.1 获取日

```
var d3 = d.getDate();
console.log("日=" + d3);
```

#####  3.2 获取周几

```
var d3 = d.getDay();
console.log("周=" + d3);
```

##### 3.3 获取月份

```
var d3 = d.getMonth();
console.log("月=" + d3);
```

##### 3.3 获取年份

```
var d3 = d.getFullYear();
console.log("年=" + d3);
```

##### 3.4 getTime() 获取时间戳/毫秒

```
var d3 = d.getTime();
console.log(d3);
```

```
//  利用时间戳获取代码执行时间
var start = Date.now();
console.log("开始时间：" + start);
for(var i=1; i<1000; i++){
	document.write(i + "<br/>");
}
var end = Date.now();
console.log("结束时间：" + end);
console.log("执行所用的毫秒=" + (end - start) + "ms");
```



## Math() 对象

**注释：Math 对象并不像 Date 和 String 那样是对象的类，因此没有构造函数 Math()，像 Math.sin() 这样的函数只是函数，不是某个对象的方法。您无需创建它，通过把 Math 作为对象使用就可以调用其所有属性和方法。**

### 1 Math 对象属性

| 属性                                                         | 描述                                              |
| :----------------------------------------------------------- | :------------------------------------------------ |
| [E](https://www.w3school.com.cn/jsref/jsref_e.asp)           | 返回算术常量 e，即自然对数的底数（约等于2.718）。 |
| [LN2](https://www.w3school.com.cn/jsref/jsref_ln2.asp)       | 返回 2 的自然对数（约等于0.693）。                |
| [LN10](https://www.w3school.com.cn/jsref/jsref_ln10.asp)     | 返回 10 的自然对数（约等于2.302）。               |
| [LOG2E](https://www.w3school.com.cn/jsref/jsref_log2e.asp)   | 返回以 2 为底的 e 的对数（约等于 1.414）。        |
| [LOG10E](https://www.w3school.com.cn/jsref/jsref_log10e.asp) | 返回以 10 为底的 e 的对数（约等于0.434）。        |
| [PI](https://www.w3school.com.cn/jsref/jsref_pi.asp)         | 返回圆周率（约等于3.14159）。                     |
| [SQRT1_2](https://www.w3school.com.cn/jsref/jsref_sqrt1_2.asp) | 返回返回 2 的平方根的倒数（约等于 0.707）。       |
| [SQRT2](https://www.w3school.com.cn/jsref/jsref_sqrt2.asp)   | 返回 2 的平方根（约等于 1.414）。                 |

### 2 Math 对象方法

| 方法                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [abs(x)](https://www.w3school.com.cn/jsref/jsref_abs.asp)    | 返回数的绝对值。                                             |
| [acos(x)](https://www.w3school.com.cn/jsref/jsref_acos.asp)  | 返回数的反余弦值。                                           |
| [asin(x)](https://www.w3school.com.cn/jsref/jsref_asin.asp)  | 返回数的反正弦值。                                           |
| [atan(x)](https://www.w3school.com.cn/jsref/jsref_atan.asp)  | 以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值。     |
| [atan2(y,x)](https://www.w3school.com.cn/jsref/jsref_atan2.asp) | 返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间）。 |
| [ceil(x)](https://www.w3school.com.cn/jsref/jsref_ceil.asp)  | **对数进行上舍入。**                                         |
| [cos(x)](https://www.w3school.com.cn/jsref/jsref_cos.asp)    | 返回数的余弦。                                               |
| [exp(x)](https://www.w3school.com.cn/jsref/jsref_exp.asp)    | 返回 e 的指数。                                              |
| [floor(x)](https://www.w3school.com.cn/jsref/jsref_floor.asp) | **对数进行下舍入。**                                         |
| [log(x)](https://www.w3school.com.cn/jsref/jsref_log.asp)    | 返回数的自然对数（底为e）。                                  |
| [max(x,y)](https://www.w3school.com.cn/jsref/jsref_max.asp)  | 返回 x 和 y 中的最高值。                                     |
| [min(x,y)](https://www.w3school.com.cn/jsref/jsref_min.asp)  | 返回 x 和 y 中的最低值。                                     |
| [pow(x,y)](https://www.w3school.com.cn/jsref/jsref_pow.asp)  | **返回 x 的 y 次幂。**                                       |
| [random()](https://www.w3school.com.cn/jsref/jsref_random.asp) | 返回 0 ~ 1 之间的随机数。                                    |
| [round(x)](https://www.w3school.com.cn/jsref/jsref_round.asp) | 把数四舍五入为最接近的整数。                                 |
| [sin(x)](https://www.w3school.com.cn/jsref/jsref_sin.asp)    | 返回数的正弦。                                               |
| [sqrt(x)](https://www.w3school.com.cn/jsref/jsref_sqrt.asp)  | 返回数的平方根。                                             |
| [tan(x)](https://www.w3school.com.cn/jsref/jsref_tan.asp)    | 返回角的正切。                                               |
| [toSource()](https://www.w3school.com.cn/jsref/jsref_tosource_math.asp) | 返回该对象的源代码。                                         |
| [valueOf()](https://www.w3school.com.cn/jsref/jsref_valueof_math.asp) | 返回 Math 对象的原始值。                                     |

##### 2.1 Math.abs()绝对值

取绝对值

##### 2.2 Math.ceil() 向上取整

小数位大于0，向上取整

```
console.log(Math.ceil(4.0));	//4
console.log(Math.ceil(4.01));	//5
```

##### 2.3 Math.floor() 向下取整

向下取整

```
console.log(Math.floor(4.01));  //4
console.log(Math.floor(4.99));  //4
```

##### 2.4 Math.round() 四舍五入取整

四舍五入取整

```
console.log(Math.round(4.5));  //5
console.log(Math.round(4.1));  //4
```

##### 2.5 Math.random()

0-1之间的随机数

// 4.4 Math.random() 取0-1之间的随机数

> 生成x-y之间的随机数规律
>
> Math.round(Math.random() * (y-x) + x)

```
// 练习：输出1-10之间10个随机整数
for(var i=0; i<10; i++){
  var result = Math.floor(Math.random() * 10);
  console.log(result);
}
```

##### 2.6 Math.max(x, y)

返回x,y中的最大值

##### 2.7 Math.min(x, y)

返回x,y中的最小值

##### 2.8 Math.pow(x,y)

返回x的y次方



## 包装类

通过三个包装类可以将基本数据类型转为对象

> **方法和属性只能添加给对象，不能添加给基本数据类型；**
>
> 当我们对一些基本数据类型的值取调用属性和方法是，浏览器会临时使用包装类开辟新空间将其转化为对象，然后再调用对象的属性和方法，调用完以后，在将其转化为基本数据类型

String()

将基本数据类型转为String对象

```
var num = new Number(3);
console.log(typeof num);  //object
```

Number()

将基本数类型的数字转为Number对象

```
var str = new String(2);
console.log(typeof str);  //object
```

Boolean()

将基本数类型的数字转为Boolean对象

```
var bool = new Boolean(3);
console.log(typeof bool);  //object
```



```
var s1 = 123;
s1 = s1.toString();  //浏览器临时将基本数据类型number转为Number()对象类型，然后执行toString()方法
s1.name = "num";

console.log(s1);  //123
console.log(typeof s1); //string
console.log(s1.name);  //undifined


var s2 = 123;
s2 = new String(s2);  //将基本数据类型number转为Number()对象类型
s2.name = "num";      //对象类型添加name属性

console.log(s2);  //String {"123", name: "num"}
console.log(typeof s2); //object
console.log(s2.name);  //num  
```

### 1 String()对象

字符串是 JavaScript 的一种基本的数据类型。

String 对象的 length 属性声明了该字符串中的字符数。

String 类定义了大量操作字符串的方法，例如从字符串中提取字符或子串，或者检索字符或子串。

需要注意的是，JavaScript 的字符串是不可变的（immutable），String 类定义的方法都不能改变字符串的内容。像 String.toUpperCase() 这样的方法，返回的是全新的字符串，而不是修改原始字符串。

在较早的 Netscape 代码基的 JavaScript 实现中（例如 Firefox 实现中），字符串的行为就像只读的字符数组。例如，从字符串 s 中提取第三个字符，可以用 s[2] 代替更加标准的 s.charAt(2)。此外，对字符串应用 for/in 循环时，它将枚举字符串中每个字符的数组下标（但要注意，ECMAScript 标准规定，不能枚举 length 属性）。因为字符串的数组行为不标准，所以应该避免使用它。

##### 1.1 String()对象属性

| 属性                                                         | 描述                       |
| :----------------------------------------------------------- | :------------------------- |
| constructor                                                  | 对创建该对象的函数的引用   |
| [length](https://www.w3school.com.cn/jsref/jsref_length_string.asp) | 字符串的长度               |
| prototype                                                    | 允许您向对象添加属性和方法 |

##### 1.2 String()对象方法

| 方法                                                         | 描述                                                 |
| :----------------------------------------------------------- | :--------------------------------------------------- |
| [anchor()](https://www.w3school.com.cn/jsref/jsref_anchor.asp) | 创建 HTML 锚。                                       |
| [big()](https://www.w3school.com.cn/jsref/jsref_big.asp)     | 用大号字体显示字符串。                               |
| [blink()](https://www.w3school.com.cn/jsref/jsref_blink.asp) | 显示闪动字符串。                                     |
| [bold()](https://www.w3school.com.cn/jsref/jsref_bold.asp)   | 使用粗体显示字符串。                                 |
| [charAt()](https://www.w3school.com.cn/jsref/jsref_charAt.asp) | **返回在指定位置的字符。**                           |
| [charCodeAt()](https://www.w3school.com.cn/jsref/jsref_charCodeAt.asp) | 返回在指定的位置的字符的 Unicode 编码。              |
| [concat()](https://www.w3school.com.cn/jsref/jsref_concat_string.asp) | 连接字符串。                                         |
| [fixed()](https://www.w3school.com.cn/jsref/jsref_fixed.asp) | 以打字机文本显示字符串。                             |
| [fontcolor()](https://www.w3school.com.cn/jsref/jsref_fontcolor.asp) | 使用指定的颜色来显示字符串。                         |
| [fontsize()](https://www.w3school.com.cn/jsref/jsref_fontsize.asp) | 使用指定的尺寸来显示字符串。                         |
| [fromCharCode()](https://www.w3school.com.cn/jsref/jsref_fromCharCode.asp) | 从字符编码创建一个字符串。                           |
| [indexOf()](https://www.w3school.com.cn/jsref/jsref_indexOf.asp) | 检索字符串。                                         |
| [italics()](https://www.w3school.com.cn/jsref/jsref_italics.asp) | 使用斜体显示字符串。                                 |
| [lastIndexOf()](https://www.w3school.com.cn/jsref/jsref_lastIndexOf.asp) | 从后向前搜索字符串。                                 |
| [link()](https://www.w3school.com.cn/jsref/jsref_link.asp)   | 将字符串显示为链接。                                 |
| [localeCompare()](https://www.w3school.com.cn/jsref/jsref_localeCompare.asp) | 用本地特定的顺序来比较两个字符串。                   |
| [match()](https://www.w3school.com.cn/jsref/jsref_match.asp) | 找到一个或多个正则表达式的匹配。                     |
| [replace()](https://www.w3school.com.cn/jsref/jsref_replace.asp) | 替换与正则表达式匹配的子串。                         |
| [search()](https://www.w3school.com.cn/jsref/jsref_search.asp) | 检索与正则表达式相匹配的值。                         |
| [slice()](https://www.w3school.com.cn/jsref/jsref_slice_string.asp) | 提取字符串的片断，并在新的字符串中返回被提取的部分。 |
| [small()](https://www.w3school.com.cn/jsref/jsref_small.asp) | 使用小字号来显示字符串。                             |
| [split()](https://www.w3school.com.cn/jsref/jsref_split.asp) | 把字符串分割为字符串数组。                           |
| [strike()](https://www.w3school.com.cn/jsref/jsref_strike.asp) | 使用删除线来显示字符串。                             |
| [sub()](https://www.w3school.com.cn/jsref/jsref_sub.asp)     | 把字符串显示为下标。                                 |
| [substr()](https://www.w3school.com.cn/jsref/jsref_substr.asp) | 从起始索引号提取字符串中指定数目的字符。             |
| [substring()](https://www.w3school.com.cn/jsref/jsref_substring.asp) | 提取字符串中两个指定的索引号之间的字符。             |
| [sup()](https://www.w3school.com.cn/jsref/jsref_sup.asp)     | 把字符串显示为上标。                                 |
| [toLocaleLowerCase()](https://www.w3school.com.cn/jsref/jsref_toLocaleLowerCase.asp) | 把字符串转换为小写。                                 |
| [toLocaleUpperCase()](https://www.w3school.com.cn/jsref/jsref_toLocaleUpperCase.asp) | 把字符串转换为大写。                                 |
| [toLowerCase()](https://www.w3school.com.cn/jsref/jsref_toLowerCase.asp) | 把字符串转换为小写。                                 |
| [toUpperCase()](https://www.w3school.com.cn/jsref/jsref_toUpperCase.asp) | 把字符串转换为大写。                                 |
| toSource()                                                   | 代表对象的源代码。                                   |
| [toString()](https://www.w3school.com.cn/jsref/jsref_toString_string.asp) | 返回字符串。                                         |
| [valueOf()](https://www.w3school.com.cn/jsref/jsref_valueOf_string.asp) | 返回某个字符串对象的原始值。                         |

##### 1.3 支持正则表达式的String对象的方法

| 方法                                                         | 描述                             | FF   | IE   |
| :----------------------------------------------------------- | :------------------------------- | :--- | :--- |
| [search](https://www.w3school.com.cn/jsref/jsref_search.asp) | 检索与正则表达式相匹配的值。     | 1    | 4    |
| [match](https://www.w3school.com.cn/jsref/jsref_match.asp)   | 找到一个或多个正则表达式的匹配。 | 1    | 4    |
| [replace](https://www.w3school.com.cn/jsref/jsref_replace.asp) | 替换与正则表达式匹配的子串。     | 1    | 4    |
| [split](https://www.w3school.com.cn/jsref/jsref_split.asp)   | 把字符串分割为字符串数组。       | 1    | 4    |