// 练习1
// 小明成绩奖励

/* 
var score = prompt("请输入小明的成绩")
if(score > 100 || score < 0 || isNaN(score)){
  alert("输入非法");
}else {
  if(score == 100){
    alert("满分");
  }else if(score >= 90){
    alert("优秀");
  }else if(score >= 70){
    alert("良");
  }else if(score >= 60){
    alert("及格");
  }else{
    alert("不及格");
  }
}

// 练习2
//  键盘输入3个数，从小到大输出显示
var num1 = +prompt("请输入数字1");
var num2 = +prompt("请输入数字2");
var num3 = +prompt("请输入数字3");
// 先找最小的
if( num1 <num2 && num1 < num3){
  // num1最小
  if(num2 < num3){
    alert(num1 + ',' + num2 + ',' +num3)
  }else{
    alert(num1 + ',' + num3 + ',' + num2)
  }
}else if( num2 <num1 && num2 < num3){
  // num2最小
}else {
  // num3最小
}

*/

// 练习1：打印1-100之间的奇数之和
var sum = 0;
for(var i = 1; i <= 100; i++){
  if(i % 2 != 0){
    console.log(i);
    sum += i;
  }
}
console.log("1～100奇数之和:" + sum);

// 练习2：打印1-100之间所有7的倍数的个数以及之和
var num = 0,sum = 0;
for(var m = 1; m <= 100; m++){
  if(m % 7 == 0){
    console.log(m);
    num++;
    sum += m;
  }
}
console.log("1~100之间7的倍数的个数：" + num);
console.log("1~100之间7的倍数的和：" + sum);

// 练习3:输出三位数中的水仙花数
// 1^3 + 5^3 + 3^3 = 153
var n1, n2, n3;
for(var n = 100; n <= 999; n++){
  n1 = parseInt(n / 100);
  // console.log("百位数：" + n1);
  n2 = parseInt((n - n1 * 100) / 10);
  // console.log("十位数：" + n2);
  n3 = parseInt(n % 10);
  // console.log("个位数：" + n3);
  // if(n1*n1*n1 + n2*n2*n2 + n3*n3*n3 == n){
  //   console.log("三位数的水仙花数：" + n);
  // }
  if(Math.pow(n1, 3) + Math.pow(n2, 3) + Math.pow(n3, 3) == n){
    console.log("三位数的水仙花数：" + n);
  }
}

// 练习4：输出1-100以内的质数
console.time();
for(var num1 = 2; num1 < 100; num1++){
  var flag = true;
  for(var i1 = 2; i1 <= Math.sqrt(num1); i1++){  //Math.sqrt() 提升性能
    if(num1 % i1 == 0){
      flag = false;
      break;  //提升性能
    }
  }
  if(flag){
    console.log("质数：" + num1);
  }
}
console.timeEnd();

// 练习5:输出如下：
// *
// **
// ***
// ****
for(var i2 = 0; i2 < 4; i2++){
  for(var i3 = 0 ;i3 < i2+1; i3++){
    document.write("*&nbsp;&nbsp;&nbsp;");
  }
  document.write("<br>");
}

document.write("--------------<br/>");

// 练习5:输出如下：
// ****
// ***
// **
// *
for(var i2 = 4; i2 > 0; i2--){
  for(var i3 = 0 ;i3 < i2; i3++){
    document.write("*&nbsp;&nbsp;&nbsp;");
  }
  document.write("<br>");
}

document.write("打印99乘法表<br/>");
// 练习6:打印99乘法表
for(i3 = 1; i3 < 10; i3++){
  for(i4 = 1; i4 <= i3; i4++){
    document.write("<span>" + i4 + "x" + i3 + "=" + i3*i4 + "</span>");
  }
  document.write("<br>");
}