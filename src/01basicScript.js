
// 05 变量
var a = 123;
// alert(a);

// 8.1
// toString(); 转化为string，不会影响原变量
// null, undefined 没有toSting()
var b = a.toString();

console.log(typeof b);
console.log(b);

var c = null;
// c = c.toString();  /* 报错 */
console.log(c);

var d = undefined;
// d = d.toString();  /* 报错 */
console.log(d);

// 8.2 转化为number
var e = "123";
e = Number(e);
console.log(typeof e);
console.log(e);

var f = "321.00px"
console.log(typeof f);
console.log(f);
f = parseInt(f)
console.log(typeof f);
console.log(f);

var g = 2 * "8";
console.log("g="+ g);

var h = 20;
var h1 = h++ + ++h +h;
console.log("h="+h1);

var i = 20;
i = i++;
console.log("i="+i);

var i2 = 20;
i2 = ++ i2;
console.log("i2=" + i2);

// 练习
var n1 = 10, n2 = 20;
var n = n1++;
console.log('n=' + n);
console.log('n1=' + n1);
// n = 10, n1 = 11

n = ++n1;
console.log('n=' + n);
console.log('n1=' + n1);
// n = 12, n1 = 12

n = n2--;
console.log('n=' + n);
console.log('n2=' + n2);
//  n = 20, n2 = 19

n = --n2;
console.log('n=' + n);
console.log('n2=' + n2);
// n = 18, n2 = 18
