

## 则表达式

### 1.创建 RegExp 对象

语法：

```
var reg = new RegExp(pattern, attributes);
var reg = /正则表达式/匹配模式
```

##### 1.1 参数

参数 *pattern* 是一个字符串，指定了正则表达式的模式或其他正则表达式。

参数 *attributes* 是一个可选的字符串，包含属性 "g"、"i" 和 "m"，分别用于指定全局匹配、区分大小写的匹配和多行匹配。ECMAScript 标准化之前，不支持 m 属性。如果 *pattern* 是正则表达式，而不是字符串，则必须省略该参数。

##### 1.2 返回值

一个新的 RegExp 对象，具有指定的模式和标志。如果参数 *pattern* 是正则表达式而不是字符串，那么 RegExp() 构造函数将用与指定的 RegExp 相同的模式和标志创建一个新的 RegExp 对象。

如果不用 new 运算符，而将 RegExp() 作为函数调用，那么它的行为与用 new 运算符调用时一样，只是当 *pattern* 是正则表达式时，它只返回 *pattern*，而不再创建一个新的 RegExp 对象。

##### 1.3 抛出

SyntaxError - 如果 *pattern* 不是合法的正则表达式，或 *attributes* 含有 "g"、"i" 和 "m" 之外的字符，抛出该异常。

TypeError - 如果 *pattern* 是 RegExp 对象，但没有省略 *attributes* 参数，抛出该异常。

##### 1.4  修饰符

| 修饰符                                                    | 描述                                                     |
| :-------------------------------------------------------- | :------------------------------------------------------- |
| [i](https://www.w3school.com.cn/jsref/jsref_regexp_i.asp) | 执行对大小写不敏感的匹配。                               |
| [g](https://www.w3school.com.cn/jsref/jsref_regexp_g.asp) | 执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。 |
| m                                                         | 执行多行匹配。                                           |

### 2 RegExp对象方法

##### 2.1 .test()

检查是否符合规则

###### 构造函数方法创建

```
var reg = new RegExp("a");

var str = "abd";
var result = reg.test(str);
console.log(result);	//true

var str = "Abd";	//严格区分大小写
var result = reg.test(str);
console.log(result);	//false

var reg = new RegExp("a", "i")  //i不区分大小写
var str = "Abd";	
var result = reg.test(str);	
console.log(result);	//true
```

###### 变量方法创建

```
var reg = /a/g;
var str = "abc";
var result = reg.test(str);
console.log(result);	//true
```

##### 2.2 | 或

```
reg = /a|b|c/;
```

##### 2.3 [] 或

```
reg = /[ab]/
```

##### 2.4 - 至

```
var reg = /[a-z]/	//小写a到小写z
var reg = /[A-z]/	//大写A到小写z，任意字母
```

练习：检查是否有abc/adc/aec/   //a开头，c结尾，中间是a|b|c

```
var reg = /a[bde]c/
```

##### 2.5 ^ 除了

```
var reg = /[^ab]/	//除了a或b
```

##### 2.6 支持RegExp的String对象的方法

###### 2.6.1 split()

字符串拆分成数组

```
var str = "1a2b3c4d5e6f";
var result = str.split(/[A-z]/);  //任意字母拆分
console.log(result);
```

###### 2.6.2 search()

检索与表达式相匹配的值

- 有返回首次出现索引值
- 没有返回-1

```
var str = "abcdefg";
var result = str.search(/[A-z]/)
console.log(result);	//0

var result = str.search(/[0-9]/)
console.log(result);	//-1

// 检查是否有abc/adc/aec/ 
var str = "012abcdefg";
var result = str.search(/a[bcd]c/)
console.log(result);	//3
```

###### 2.6.3 match()

找到一个或多个正则表达式的匹配

- 默认只会找到第一个即停止

- 正则表达式可以设置参数匹配全局 /[]/gi  全局忽略大小写

```
var str = "1a2b3c4d5e6f";
var result = str.match(/[A-z]/g); //提取出字母
console.log(Array.isArray(result)); //true
console.log(result);
```

###### 2.6.4 replace()

替换匹配符合的内容

```
var str = "1a2b3c4d5e6f";
var result = str.replace(/[A-z]/g, "@");  //全局任意字母替换为@
console.log(result);
```

##### 2.7 量词

| 量词                                                         | 描述                                        |
| :----------------------------------------------------------- | :------------------------------------------ |
| [n+](https://www.w3school.com.cn/jsref/jsref_regexp_onemore.asp) | 匹配任何包含至少一个 n 的字符串。           |
| [n*](https://www.w3school.com.cn/jsref/jsref_regexp_zeromore.asp) | 匹配任何包含零个或多个 n 的字符串。         |
| [n?](https://www.w3school.com.cn/jsref/jsref_regexp_zeroone.asp) | 匹配任何包含零个或一个 n 的字符串。         |
| [n{X}](https://www.w3school.com.cn/jsref/jsref_regexp_nx.asp) | 匹配包含 X 个 n 的序列的字符串。            |
| [n{X,Y}](https://www.w3school.com.cn/jsref/jsref_regexp_nxy.asp) | 匹配包含 X 至 Y 个 n 的序列的字符串。       |
| [n{X,}](https://www.w3school.com.cn/jsref/jsref_regexp_nxcomma.asp) | 匹配包含至少 X 个 n 的序列的字符串。        |
| [n$](https://www.w3school.com.cn/jsref/jsref_regexp_ndollar.asp) | 匹配任何结尾为 n 的字符串。                 |
| [^n](https://www.w3school.com.cn/jsref/jsref_regexp_ncaret.asp) | 匹配任何开头为 n 的字符串。                 |
| [?=n](https://www.w3school.com.cn/jsref/jsref_regexp_nfollow.asp) | 匹配任何其后紧接指定字符串 n 的字符串。     |
| [?!n](https://www.w3school.com.cn/jsref/jsref_regexp_nfollow_not.asp) | 匹配任何其后没有紧接指定字符串 n 的字符串。 |

###### 2.7.1 {} 

```
//连续3个a
var reg = /a{3}/;	

//连续3个ab
var reg = /(ab){3}/;

//1-3个ab
var reg = /(ab){1,3}/;

//ab出现3次以上
var reg = /(ab){3,}/;
```

###### 2.7.2 +至少一个

相当于 `{1,}`

var reg = /ab+c/;	//a(至少一个b)c

```
var str0 = "ac";
var str1 = "abc";
var str2 = "abbc";
var reg = /ab+c/;	//a(至少一个b)c
var result = reg.test(str0);
console.log(result);  //false
var result = reg.test(str1);
console.log(result);  //true
var result = reg.test(str2);
console.log(result);  //true
```

###### 2.7.3 *  零个或多个

/ab*c/;	//a(零个或多个b)c

```
var str0 = "ac";
var str1 = "abc";
var reg = /ab*c/;	//a(零个或多个b)c
var result = reg.test(str0);
console.log(result);  //true
var result = reg.test(str1);
console.log(result);  //true
```

###### 2.7.4 ? 零个或1个

```
ar reg = /ab?c/;	//a(零个或1个b)c
```

###### 2.7.5 ^开头  [^]除了

```
var reg = /^abc/;  //a开头
```

###### 2.7.6 & 结尾

```
var reg = /a$/; //a结尾
var reg = /^a$/;  //a开头和结尾
var reg = /^a | a$/;  //a开头或a结尾
```

**练习：检查是否合格的手机号** 

 规则：11 位
         

​		第一位：1开头
​        

​		第二位：3-9
​         

​		第三位及以后：任意数，长度9位

```
var str = "110";
var reg = /^1[3-9][0-9]{9}$/;  //开头和结尾都是数字
var result = reg.test(str);
console.log(result);
```

##### 2.8 元字符

元字符（Metacharacter）是拥有特殊含义的字符：

| 元字符                                                       | 描述                                        |
| :----------------------------------------------------------- | :------------------------------------------ |
| [.](https://www.w3school.com.cn/jsref/jsref_regexp_dot.asp)  | 查找单个字符，除了换行和行结束符。          |
| [\w](https://www.w3school.com.cn/jsref/jsref_regexp_wordchar.asp) | 查找单词字符。                              |
| [\W](https://www.w3school.com.cn/jsref/jsref_regexp_wordchar_non.asp) | 查找非单词字符。                            |
| [\d](https://www.w3school.com.cn/jsref/jsref_regexp_digit.asp) | 查找数字。                                  |
| [\D](https://www.w3school.com.cn/jsref/jsref_regexp_digit_non.asp) | 查找非数字字符。                            |
| [\s](https://www.w3school.com.cn/jsref/jsref_regexp_whitespace.asp) | 查找空白字符。                              |
| [\S](https://www.w3school.com.cn/jsref/jsref_regexp_whitespace_non.asp) | 查找非空白字符。                            |
| [\b](https://www.w3school.com.cn/jsref/jsref_regexp_begin.asp) | 匹配单词边界。                              |
| [\B](https://www.w3school.com.cn/jsref/jsref_regexp_begin_not.asp) | 匹配非单词边界。                            |
| \0                                                           | 查找 NUL 字符。                             |
| [\n](https://www.w3school.com.cn/jsref/jsref_regexp_newline.asp) | 查找换行符。                                |
| \f                                                           | 查找换页符。                                |
| \r                                                           | 查找回车符。                                |
| \t                                                           | 查找制表符。                                |
| \v                                                           | 查找垂直制表符。                            |
| [\xxx](https://www.w3school.com.cn/jsref/jsref_regexp_octal.asp) | 查找以八进制数 xxx 规定的字符。             |
| [\xdd](https://www.w3school.com.cn/jsref/jsref_regexp_hex.asp) | 查找以十六进制数 dd 规定的字符。            |
| [\uxxxx](https://www.w3school.com.cn/jsref/jsref_regexp_unicode_hex.asp) | 查找以十六进制数 xxxx 规定的 Unicode 字符。 |

2.8.1 . 任意字符，需转义

2.8.2 \  转义字符

2.8.3 \w  相当于 [A-z0-9_]

2.8.4 \W 除了字母数字_

2.8.5 \d 数字

2.8.6 \D 除了数字

2.8.7 \s 空格

2.8.8 \S 除了空格

2.8.9 \b 单词边界， \bchild\b  查找单词 child

```
// 练习：去除字符串开头和结尾的空格，保留字符间中间
var str = "     he    lle, Word     ";
var reg = /^\s*|\s*$/g;
var result = str.replace(reg, "");
console.log(result);
```

**练习：邮件的正则表达式**

规则： abcdef@abc.com.cn

邮箱名称             @域名

任意字母下划线  @ 任意字母 .任意字母(2-5位) .顶级域名(2-5位)

```
var mail = "yuan.wei@163.com.cn";
var mailReg = /^\w{3,16}(\.\w{1,})*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/;
var result = mailReg.test(mail);
console.log(result);
```

