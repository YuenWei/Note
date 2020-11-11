## BOM

browser 浏览器对象模型，通过js操作浏览器对象

### 1 BOM对象

 - Window - 代表整个浏览器的窗口，同时window也是网页中的全局对象；
 - Navigator - 代表当前浏览器的信息，通过该对象来识别不同的浏览器；
 - Location - 代表当前浏览器的地址栏信息；
 - History - 代表浏览器的历史记录，可以通过该对象来操作浏览器的历史记录
    - 由于隐私的原因，该对象不能获取到具体的历史记录，只能操作浏览器的前进/后退；
    - 而且只能操作档次当次的历史记录
 - Screen - 代表用户的屏幕信息，通过该对象可以获取到该用户的显示器相关信息。

**window是全局对象，Navigator,Location,History,Screen作为window对象的属性保存**

### 2 navigator

浏览器的信息

由于历史原因，navigator对象中的大部分对象属性已经不能帮助我们识别浏览器信息了

```
console.log(navigator.appName);  // 浏览器名称
//Netscape
```

##### 2.1 navigator.userAgent

目前有用的判断浏览器信息

- userAgent是一个字符串，描述浏览器的信息

- ie11去掉了微软和IE相关信息，不能通过userAgent来判断

```
var ua = navigator.userAgent;

console.log(ua);  //浏览器信息

if(/chrome/i.test(ua)){
  console.log("我是Chrome浏览器");
}else if(/firefox/i.test(ua)){
  console.log("我是Firefox浏览器");
}else if(/msie/i.test(ua)){ // 支持IE8，9，10，不支持IE11
  console.log("我是IE(6~10)浏览器");
}else if("ActiveXObject" in window){
  console.log("我是IE11浏览器");
}

// console.log(window.ActiveXObject); //IE特有的构造函数
```

###  3 history

对象可以操作浏览器向前/向后

```
对象属性 length
对象方法 forword back go

console.log(history.length);
```



```
window.onload = function(){
  var btnBack = document.getElementById("btn-back");
  btnBack.onclick = function(){
  history.back();
  //history.go(param)
  // 参数是整数，表示前进或者后退页面的个数
  history.go(1); //向前跳转一个页面
  }
}
```



###  4 location

该对象封装了浏览器地址栏的信息

如果直接将location属性修改为一个完整的路径或者相对路径

则页面会跳转到该路径，并产生响应的history

```
对象属性 hash host hostname href pathname port protocol search
对象方法 assign() reload() replace() toString()

console.log(location);
```

```
修改location
locaton = "http://www.baidu.com"
```

##### 4.1 assign()

用来跳转到其他页面，作用和直接修改location一样

 location.assign("http://www.baidu.com");

##### 4.2 reload

用于重新加载页面，作用和刷新一样

方法中参数为true，则会强制刷新

```
location.reload(true);
```

##### 4.3 replace()

替换新的URL页面，不能生成历史记录，无法回退

```
location.replace(url);
```



### 5 window对象方法

##### 5.1 setInterval() 

定时调用，可以将一个函数每隔一段时间执行一次

> 参数：
>
>    1.回调函数，每隔一段时间执行的函数；
>
>    2.每次调用间隔的时间，单位毫秒；

> 返回值：
>
>    1.返回一个number类型的数据;
>
>    2.返回的数字代表定时器的唯一标识；

```
var index = setInterval(function(){
  // 执行代码
},1000);
```

##### 5.2 clearInterval()

关闭定时器

```
<div class="dom" style="position:relative">
	<p>移动div定时器</p>
	<div id="keyEvent-2" style="width:50px;height:50px;background:#f00;position:absolute;top:20px;left:20px;"></div>
</div>
```



```
window.onload = function(){
  // 4.7.2练习 方向键 移动button
  // 定时器解决第1.2次间隔卡顿，onkeydown同时控制方向和速度
  var keyEvent2 = document.getElementById("keyEvent-2");
  var speed = 10;
  // 没有了键盘事件，需创建变量保存方向
  var dir = 0;

  setInterval(function(){
    switch(dir){
      case 37:
        console.log("<-");
        keyEvent2.style.left = (keyEvent2.offsetLeft - speed) + 'px';
        break;
      case 38:
        keyEvent2.style.top = (keyEvent2.offsetTop - speed) + 'px';
        break;
      case 39:
        keyEvent2.style.left = (keyEvent2.offsetLeft + speed) + 'px';
        break;
      case 40:
        keyEvent2.style.top = (keyEvent2.offsetTop + speed) + 'px';
        break;
    }
  },50);

  // 绑定按键的值
  document.onkeydown = function(){
    if(event.altKey){
      speed = 50;
    }else{
      speed = 10;
    }

    // dir值
    dir = event.keyCode;

    // 当按键松开时时，不再移动
    document.onkeyup = function(){
      dir = 0;
    }
  }
}
```

##### 5.3 setTimeout()

延时调用：不马上执行，间隔一段时间后执行，而且**只执行一次**

延时调用和定时调用实际上可以相互代替

```
var num = 100;
setTimeout(() => {
	console.log(num++);
}, 3000);
```

##### 5.4 clearTimeout()

##### 5.5 定时器的应用

5.5.1 点击按钮后持续向右移动div

```
<div class="dom" style="position:relative">
  <p>5.5.1 点击按钮后移动div</p><br>
  <input type="button" value="开始移动" id="btn2"><br>
  <div id="keyEvent-2" style="width:50px;height:50px;background:#f00;position:absolute;top:50px;left:0px;"></div>
</div>
```

```
window.onlod = function(){
  var btn2 = document.getElementById("btn2");
  var box2 = document.getElementById("keyEvent-2");
  var timer; // 定时器标识
  btn2.onclick = function(){
    console.log("按了移动按钮");
    //关闭上一个定时器
    clearInterval(timer);
    timer = setInterval(function(){
      // 在原来的偏移基础上向右偏移
      //var oldLeft = box2.offsetLeft;
      var oldLeft = parseInt(getComputedStyle(box2).left);
      console.log(oldLeft);
      var newLeft = oldLeft + 10;
      if(newLeft > 800){
        newLeft = 800;
      }
      box2.style.left = newLeft + "px";
      // 当left移动到800px时，停止移动
      if(newLeft == 800){
        clearInterval(timer);
      }
    },30);
  }
}
```

5.5.2 点击按钮后持续向左移动div，同时操作div#keyEvent-2

```
var btn3 = document.getElementById("btn3");
//var timer2; // 定时器标识
var moveLeftSpeed = 20;
btn3.onclick = function(){
  //move(box2, 0, 10);
  console.log("按了移动按钮");
  //关闭上一个定时器
  clearInterval(timer2);
	timer2 = setInterval(function(){
    // 在原来的偏移基础上向右偏移
    //var oldLeft = box2.offsetLeft;
    var oldLeft = parseInt(getComputedStyle(box2).left);
    console.log(oldLeft);
    var newLeft = oldLeft - moveLeftSpeed;
    console.log(newLeft);
    if(newLeft <= 0){
    newLeft = 0;
	}
	box2.style.left = newLeft + "px";
	// 当left移动到800px时，停止移动
	if(newLeft == 0){
		clearInterval(timer2);
	}
},30);
```

###### 定时器-移动函数

//参数：1.对象，2.动画结束位置，3.速度（正负方向）

```
function move(obj, speed, dir){
	clearInterval(timer2);
	obj.timer2 = setInterval(function(){
    // 获取元素当前所处位置
    var oldLeft = parseInt(getComputedStyle(obj).left);
    console.log(oldLeft);
    //判断speed正负
    // 小于dir,向右移动，大于向左移动
    if(oldLeft > dir){
    	speed = -speed;
  	}
    var newLeft = oldLeft + speed;
    console.log(newLeft);
    //向左移动，需要判断newLeft是否小于dir
    if( (speed < 0 && newLeft < dir) || (speed > 0 && newLeft >dir)){
      newLeft = dir;
    }
    box2.style.left = newLeft + "px";
    // 当移动到dir目标位置时，停止移动
    if(newLeft == dir){
      clearInterval(timer2);
      callback && callback(); //定时器执行完后执行回调函数
    }
	},30);
}
```

###### 定时器-优化图片切换

```
function move(obj, attr, speed, dir, callback){
  clearInterval(timer2);
  obj.timer2 = setInterval(function(){
    // 获取元素当前所处位置
    var info = getComputedStyle(obj,null)[attr];
    var oldLeft = parseInt(info);
    console.log(info);
    //判断speed正负
    // 小于dir,向右移动，大于向左移动
    if(oldLeft > dir){
      speed = -speed;
    }
    var newLeft = oldLeft + speed;
    console.log(newLeft);
    //向左移动，需要判断newLeft是否小于dir
    if( (speed < 0 && newLeft < dir) || (speed > 0 && newLeft >dir)){
      newLeft = dir;
    }
    box2.style[attr] = newLeft + "px";
    // 当移动到dir目标位置时，停止移动
    if(newLeft == dir){
      clearInterval(timer2);
      callback && callback(); //定时器执行完后执行回调函数
    }
  },30);
}
```

######  定义函数，修改class

```
// 定义一个函数，来向元素添加指定class属性值
// 参数：
// obj: 添加的目标元素
// myClassName:添加的class值

function addClass(obj, myClassName){
	if(!hasClass(obj, myClassName)){
		obj.className += " " + myClassName;
	}
}

// 判断元素中是否有指定class
// 如果有返回true，没有返回false
function hasClass(obj, myClassName){
	// 获取obj已有的class数组
	console.log(myClassName);
	//var regExp = /\bmyClassName\b/;
	var reg = new RegExp("\\b"+myClassName+"\\b");
	// console.log(reg.test(obj.className));
	return reg.test(obj.className);
}

function removeClass(obj, myClassName){
	var reg = new RegExp("\\b"+myClassName+"\\b");
	obj.className = obj.className.replace(reg, "");
}

function toggleClass(obj, myClassName){
	if(hasClass(obj, myClassName)){
		removeClass(obj, myClassName);
	}else{
		addClass(obj, myClassName)
	}
}
```

###### 菜单展开收起

```
<div class="nav">
  <div class="nav-item"> <!-- slideDown展开 -->
    <span class="nav-span">Apple</span>
    <a href="#">Mac</a>
    <a href="#">iPhone</a>
    <a href="#">iPad</a>
    <a href="#">Watch</a>
    <a href="#">Music</a>
  </div>
  <div class="nav-item">
    <span class="nav-span">Google</span>
    <a href="#">Google Search</a>
    <a href="#">YouTube</a>
    <a href="#">Chrome</a>
    <a href="#">Android</a>
  </div>
  <div class="nav-item">
    <span class="nav-span">Adobe</span>
    <a href="#">Photoshop</a>
    <a href="#">illusrator</a>
    <a href="#">Dreamweave</a>
    <a href="#">Acrobat</a>
  </div>
</div>

<style>
body{color:#2B3E51;}
a{text-decoration:none;}
.nav{width:150px;display:inline-block;background:#f2f2f2;border-radius:3px;overflow: hidden;}
.nav-item{width:100%;float:left;}
.nav-item span,.nav-item a{display:inline-block;width:calc(100% - 20px);padding:2px 10px;}
.nav-item span{background:#098AFF;color:#fff;}
.nav-item a{color:inherit;font-size:14px;display:none;}
.nav-item a:hover{color:#098AFF;}
.slideDown a{display:block;}
</style>
```

```
<script src="./tools.js"></script>
<script>
window.onload = function(){
  // 绑定单击事件
  var spanList = document.querySelectorAll(".nav-span");
  
  // 定义变量保存打开的菜单
  var openDiv;
  
  // 为以及菜单span绑定点击响应函数
  for(var i=0; i<spanList.length; i++){
  	spanList[i].onclick = function(){
  	// 获取当前span的父元素
  	var parentDiv = this.parentNode;

  	// 切换前高度
  	var starHeight = parentDiv.offsetHeight;
  	console.log(starHeight);

  	toggleClass(parentDiv, "slideDown");

  	// 切换后高度
  	var endHeight = parentDiv.offsetHeight;
  	console.log(endHeight);

  	// 将切换后的高度设置为开始大小
  	parentDiv.style.height = starHeight + "Px";
  	// 调用move函数
  	move(parentDiv, "height", 20, endHeight, function(){
  	//删除动画执行完后的内连样式
  		parentDiv.style.height = "";
  	});

  	// 判断openDiv是否是同一个菜单
  	// 打开当前的菜单，需关闭之前打开的菜单

  	// 修改openDiv 为打开的菜单
  	openDiv = parentDiv;
  	console.log(openDiv);
  	}
  }
}
</script>
```

### 6 JSON

```
JSON JavaScript Object Notation JS对象表示法
- JS 中对象只认识自己，其他语言不认识；
- JSON 就是一个特殊格式的字符串，这个字符串可以被任意语言识别；
				在开发中主要用来数据交换
JSON字符串中属性名必须加双引号；

JSON 分类
- 1.对象{} var json = '{"name":"孙悟空", "age":18, "sex": "F"}';
- 2.数组[] var json = '[1,2,3,"孙悟空",18,"F"]';

JSON 中允许的值
- 1.字符串
- 2.数值
- 3.布尔值
- 4.null
- 5.对象
- 6.数组



```

##### 6.1 JSON.parse()

```
JSON字符串转为JS对象
- JSON.parse(); 转化为js对象

// 代码
var json = '{"name":"孙悟空", "age":18, "sex": "F"}';
console.log(typeof json); // string
var obj = JSON.parse(json);
console.log(typeof obj);  // object
console.log(obj.name);  // 孙悟空


```

 

##### 6.2  JSON.stringify()

```
JS对象转为JSON字符串
- JSON.stringify();

// 代码
var js2 = {name:"孙悟空", age:18, sex: "F"}
var str = JSON.stringify(js2);
console.log(str);
console.log(typeof str);  // string
```



##### 6.3 Eval()

**JSON对象不支持IE7及以下**

执行性能差，在网络中有安全隐患，尽量不使用

如需引用，则可以通过<script src="json2.js">外部JS文件的方式来处理

```
eval()
	- 这个函数可以用来执行一段字符串形式的JS代码，并将执行结果返回
	- 如果使用eval()执行的字符串中如果含有{},他会将{}当成代码块
		如果不希望当成代码块，则需要在字符串前后各加()
```

```
// ie7及以下
var json = '{"name":"孙悟空", "age":18, "sex": "F"}';
var obj2 = eval("("+ json + ")");
console.log(obj2); 
console.log(typeof obj2);  // object
```

