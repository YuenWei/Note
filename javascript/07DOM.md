## DOM

当网页被加载时，浏览器会创建页面的文档对象模型（Document Object Model）。

Node 节点

- 文档节点 整个html
- 元素节点 html里标签
- 属性节点 元素的属性
- 文本节点 标签里的内容

### 1 document

##### *文档加载顺序

浏览器在加载页面时，是按照自上而下的顺序加载的；

读取到一行运行一行，如果将script代码写在页面的head里，在代码执行时，页面还没有加载，无法获取到DOM对象；

onload事件在整个页面加载完成后再触发，为window绑定onload()事件；

```
window = onload(){
};
```

##### 1.1 获取按钮对象

```
var btn = document.getElementById("btn");
console.log(btn);
```

##### 1.2 修改button名称

​    btn.innerHTML = "Button";

```
<button id="btn"></button>
<script>
	var result = document.getElementById("btn");
	console.log(result);
	//修改button名称
	result.innerHTML = "Button";
</script>
```

##### 1.3 添加事件

onclick,ondbclick

```
btn.onclick = function(){
	alert("我点击了按钮");
}
```

##### 1.4 document对象调用

```
getElementById()  通过ID获取一个元素节点
getElementsByTagName()  通过标签名获取一组节点对象
getElementsByName()  通过name名获取一组节点对象
```

##### 🌟1.5 练习 07DOM.html

练习1：DOM操作练习   07dom.html

练习2：图片相册切换  07dom.html

练习3：全选/全不选 练习   07dom.html

##### 1.6 获取body元素

body只有一个，通过getElementBytagName("body")获取的是类数组，故应该写为：

```
//方法一
var body = getElementBytagName("body")[0]

//方法二
var body = document.body;
```

##### 1.7 获取html元素

```
var html = document.documentElement;
```

##### 1.8 获取所有元素all

```
var all = document.all;
var all = document.getElementsByTagName("*");
```

##### 1.9 获取ClassName元素

**IE9+**

```
var className = document.getElementsByClassName(".class");
```

##### 1.10  querySelector()

**IE8+**

- 选择器字符串查询元素；
- 使用该方法，返回唯一一个元素，如果满足的条件有多个，只返回第一个。

```
var div = document.querySelector(".wrap .w1100");
```

##### 1.11 querySelectorAll()

**IE8+**

返回1个/多个元素，都保存在类数组中。

```
var divAll = document.querySelectorAll(".wrap .w1100");
```

##### 补充

```
innerHtml;
innerText;
```

```
previousSibling/nextSibling	前/后一个兄弟节点，可能获取空白文本
previousEelemtnSibling/nextElementSibling	前/后一个兄弟元素 IE9+
```



### 2 DOM 增删改

**都是在父节点下操作子节点**

##### 2.1 创建节点

```
// 2.1 创建节点
var btn2_1 = document.getElementById("btn2-1");
var city2 = document.getElementById("city2");

// -1 创建元素,传递创建元素标签
var addLi = document.createElement("li");

// -2 创建文本节点
var addText = document.createTextNode("广州");

// -3 将addText 设置为addLi 的子节点
addLi.appendChild(addText);

// 将创建的li添加到#city里
btn2_1.onclick = function(){
	city2.appendChild(addLi);
}
```

##### 2.2 insertBefore( , )

父节点.insertBefore(新节点, 插入前的节点)

```
// 按钮2:将“广州”节点插入到#beijing2前
var btn2_2 = document.getElementById("btn2-2");
btn2_2.onclick = function(){
	city2.insertBefore(addLi, beijing2);
}
```

##### 2.3 replaceChild( , )

```
replaceChild(新节点, 替换的节点);
```

##### 2.4 removeChild()

```
父节点.removeChild(删除的节点);
```

##### 2.5 innerHTML

```
节点.innerHTML;
```

##### 2.6 innerText

```
节点.innerText;
```

##### 2.7 设置节点内容

```
节点.innerHTML = newHtml;
节点.innerText = newText;
```

##### 2.8 innerHTML方法插入元素

```
//city2.innerHTML += addHTML; //等于删了重新加入，可能会影响事件
// -1 创建元素
var addElement = document.createElement("li");
addElement.innerHTML = "广州";
city2.appendChild(addElement);
```

##### 🌟练习3:DOM增删改-操作ul>li

##### 🌟练习4: DOM增删改-操作Table

```
  <script>
    //2.9 抽出单击事件，当新增信息时需要绑定点击事件
    function deleteInfo() {
      allTagA[i].onclick = function(){
        //获取到当前a标签的父节点tr
        var curTr = this.parentNode.parentNode;
        // var curName = curTr.getElementsByTagName("td")[0].innerText;
        var curName = curTr.firstElementChild.innerText;
        //console.log(curTr);
        //1.3 删除节点
        var flag = confirm("确认删除" + curName + "吗？");
        if(flag){
          curTr.parentNode.removeChild(curTr);
        }
      }
    };
    // 1. 删除
    // 1.1 获取table里所有阿标签
    var allTagA = document.getElementsByTagName("a");
    // 1.2 遍历a标签
    for(var i=0; i<allTagA.length; i++){  //for循环在页面加载完后执行，故i=3,然后才是点击响应事件
      //console.log(allTagA[i]);
      allTagA[i].onclick = deleteInfo;  //不加(),使用的是对象，不是函数的返回值
      // allTagA[i].onclick = function(){
      //   //获取到当前a标签的父节点tr
      //   var curTr = this.parentNode.parentNode;
      //   // var curName = curTr.getElementsByTagName("td")[0].innerText;
      //   var curName = curTr.firstElementChild.innerText;
      //   //console.log(curTr);
      //   //1.3 删除节点
      //   var flag = confirm("确认删除" + curName + "吗？");
      //   if(flag){
      //     curTr.parentNode.removeChild(curTr);
      //   }
      // }
    }

    // 2. 增加
    var btnAddInfo = document.getElementById("btnAddInfo");
    btnAddInfo.onclick = function(){
      // 2.1 获取表单的值
      var addName = document.getElementById("name").value;
      var addMail = document.getElementById("mail").value;
      console.log(addName + addMail);
      if(addName == "" || addMail == ""){
        alert("输入不能为空");
      }else{
        //2.2 创建4个子元素
      /*  var infoTr = document.createElement("tr");
        var nameTd = document.createElement("td");
        var mailTd = document.createElement("td");
        var aTd = document.createElement("td");
        var aTag = document.createElement("a");
        // 2.3 创建3个子文本
        var nameText = document.createTextNode(addName);
        var mailText = document.createTextNode(addMail);
        var aText = document.createTextNode("删除");
        // 2.4 文本添加td节点
        nameTd.appendChild(nameText);
        mailTd.appendChild(mailText);
        aTag.appendChild(aText);
        aTd.appendChild(aTag);
        // 2.5 所有td添加到tr
        infoTr.appendChild(nameTd);
        infoTr.appendChild(mailTd);
        infoTr.appendChild(aTd);
        // 2.6为新增的a绑定单击事件
        // aTag.href = "javascript:;"
        aTag.onclick = deleteInfo;
        */

        // 代码优化2.2-2.5 innerHTML
        var infoTr = document.createElement("tr");
        infoTr.innerHTML = "<td>" + addName + "</td><td>" + addMail+ "</td><td><a>删除</a></td>";
        infoTr.getElementsByTagName("a")[0].onclick = deleteInfo;

        // 2.7 将tr添加到table 注意table>tbody结构
        console.log(infoTr);
        document.getElementById("info-list").appendChild(infoTr);
      }
    }
  </script>
```



| 方法                     | 描述                                                         |
| :----------------------- | :----------------------------------------------------------- |
| getElementById()         | 返回带有指定 ID 的元素。                                     |
| getElementsByTagName()   | 返回包含带有指定标签名称的所有元素的节点列表（集合/节点数组）。 |
| getElementsByClassName() | 返回包含带有指定类名的所有元素的节点列表。                   |
| appendChild()            | 把新的子节点添加到指定节点。                                 |
| removeChild()            | 删除子节点。                                                 |
| replaceChild()           | 替换子节点。                                                 |
| insertBefore()           | 在指定的子节点前面插入新的子节点。                           |
| createAttribute()        | 创建属性节点。                                               |
| createElement()          | 创建元素节点。                                               |
| createTextNode()         | 创建文本节点。                                               |
| getAttribute()           | 返回指定的属性值。                                           |
| setAttribute()           | 把指定属性设置或修改为指定的值。                             |



### 3 DOM操作CSS

##### 3.1 .style

<!--只有.style.style.样式名 = 样式值 才能改，其他方法只读-->

```
语法：元素.style.样式名 = 样式值;
只能读取和修改内连样式
```

- 通过.style.样式名**修改的是内连样式**；
- 通过.style.样式名 **读取到的样式也是内连样式**，无法读取到样式表中的样式；

- 如果样式中写了!important，优先级最高，js不能覆盖此样式。

```
// 3.1 修改width
box1.style.width = "250px";

// 3.1 修改backgroundColor
ox1.style.backgroundColor = "#ff0";
```

<!--currentStyle.属性名 = currentStyle[属性名]  仅支持IE-->

##### 3.2 currentStyle 

读取当前显示的样式

语法：元素.style.currentStyle.样式名  **仅支持IE**

如：在原来的基础上增加100px宽度

```
// var currentStyle = box1.currentStyle.width;
// var currentStyle = box1.currentStyle[width];
// console.log(currentStyle);
```

##### 3.3 getComputedStyle()

此方法是window的方法，可以直接使用，不支持IE8及一下

 - 参数1：要获取的元素；
 - 参数2：可以传递一个伪元素，一般都为null；

该方法会返回一个对象，对象中封装了当前元素的样式。获取到的是具体长度等，不会是auto。

```
getComputedStyle(box1, null).width
```

##### 3.4 兼容写法，结合3.2和3.3

```
function getStyle(obj, name){
  //不写window，在IE8中以为变量，会全局寻找，没找到会报错，故需加window
  if(window.getComputedStyle){
  	return getComputedStyle['name'];
  }else{
  	return obj.currentStyle['name']
  }
}
```

##### 3.5 其他属性和方法

###### HTML DOM Element 对象

###### 3.5.1 clientHeight

返回元素的可见高度.

**返回的是数字，不带px**,可以直接运算

```
<div style="width:100px;height:100px;padding:10px;border:10px solid #888;"></div>

clientHeight;   //返回**120**  = content+padding
style.height;	//返回**110px
```

###### 3.5.2 offsetHeight

返回元素的高度。

```
<div style="width:100px;height:100px;padding:10px;border:10px solid #888;"></div>

offsetHeight;	//返回140 = content+padding+border
```

**offsetParent**

返回最近开启了定位的父元素的偏移容器。

如果父元素都没有定位元素，则返回body。

```
element.offsetHeight	返回元素的高度。
element.offsetWidth	返回元素的宽度。
element.offsetLeft	返回元素的水平偏移位置。
element.offsetParent	返回元素的偏移容器。
element.offsetTop	返回元素的垂直偏移位置。
```

###### 3.5.4 scrollHeight

返回元素的整体高度。

如果子元素超出父元素，overflow:auto;按钮父元素的高度为子元素高度。

```
<div id="box-pare" style="width:100px;height:100px;">
	<div id=box-sub"" style="width:150px;height:300px;">
	</div>
</div>

#box-pare  scrollHeight;	//返回300
```

```
element.scrollWidth	返回元素的整体宽度。
element.scrollHeight	返回元素的整体高度。
element.scrollLeft	返回元素左边缘与视图之间的距离。即水平滚动条滚动的距离
element.scrollTop	返回元素上边缘与视图之间的距离。
```

```
当水平或垂直滚动到底部的时候 clientHeight = scorllHeight - scollTop
使用场景：注册时阅读完毕，滚动到底部意为同意注册协议。
```

###### 3.5.5 pageX

**clientX，clientY** 	相对触发事件元素的偏移量

鼠标事件都是在浏览器视口中的特定位置发生的。这个位置信息保存在事件对象的clientX和clientY属性中，所有浏览器都支持这两个属性。

**pageX，pageY	**相对**整个页面**的偏移

pageX和pageY两个属性代表鼠标光标在页面中的位置，因此坐标是从页面本身而非视口的左边和顶边计算的。在没有滚动的情况下，clientX和cilentY与pageX和pageY是相等的。

**screenX，screenY**	相对**电脑屏幕**的偏移量

### 4 Event对象

https://www.w3school.com.cn/jsref/dom_obj_event.asp

事件对象

 - 当事件的响应函数被触发时，浏览器每次都会将一个事件对象作为实参传递给响应函数；
 - 在事件对象中，封装了当前事件的一切信息，比如：鼠标坐标，键盘按键，鼠标滚动方向
   - 在IE8中，响应函数被触发时，浏览器不会传递事件对象；
   - 在IE8及以下浏览器中，是将**事件作为window对象的属性保存的** 即window.event

```
<p>练习5:实时记录鼠标位置</p>
<div class="box-mouse" id="box-mouse"></div>
<div class="box-mouse-text" id="box-mouse-text"></div>
```

```
var mouseArea = document.getElementById("box-mouse");
var mouseText = document.getElementById("box-mouse-text");
mouseArea.onmousemove = function(){
  var x = event.clientX;	//获取鼠标指针的X坐标值
  var y = event.clientY;	//获取鼠标指针的Y坐标值
  var axisInfo = "x=" + x + ", y=" + y;
  mouseText.innerText = axisInfo;
	}
mouseArea.onmouseout =function(){
  var axisInfo = "";
  mouseText.innerText = axisInfo;
  }
```

改进：

```
方法一：
if(!event){
	event = window.event;
	……
}

方法二：
if(event = event || event = window.event){
	……
}
```

##### 4.1 事件冒泡 event.cancelBubble

- 指**相同事件向上传导**：当子元素的事件触发时，其祖先元素也会触发相同的事件；
- 如果不希望发生冒泡事件，可以**通过事件对象取消冒泡**；event.cancelBubble = true;

```
var eventPop = document.getElementById("event-pop");
var eventPopSpan = document.getElementById("event-pop-span");

document.body.onclick = function(){
	console.log("点了body");
}
eventPop.onclick = function(){
	console.log("点了box-pop");
}

eventPopSpan.onclick = function(){
	event.cancelBubble = true;	//取消其父元素 body,div#eventPop的点击冒泡事件
	console.log("点了span");
}

//当点击span时，同时出发 body,div#eventPop,div#eventPop>span 的单击事件
```



##### 4.2 事件委派 event.target

- 只绑定一次事件，即可应用到多个元素上，即使是后来添加的；
- 可以绑定到其共同的父元素，当子元素事件触发时，会一直冒泡到父元素，从而通过父元素的响应函数来处理事件；
- 委派事件利用了冒泡，通过委派可以减少绑定次数，提高性能。

```
<div>
  <ul>
    <li><a href="javascript:;">超链接一</</li>
    <li><a href="javascript:;">超链接二</</li>
  </ul>
</div>

//为ul绑定冒泡事件
ul.onclick = function(event){
	event = event || event = window.event
	//如果触发事件是期望的元素则执行，否则不执行
	if(event.target.tagName == "a"){
	//执行绑定
	}
}
```

##### 4.3 事件绑定 addEventListener()

绑定多个响应函数

> 使用 对象.事件= 函数 的形式
>
> - 只能同时为一个元素的一个事件绑定一个响应函数
>
> - 不能绑定多个，如果绑定多个，则后面的会覆盖掉前面的

```
addEventListener() 绑定函数，顺序执行
参数1：事件的字符串，不要on;
参数2：回调函数，当事件触发时执行的函数；
参数3：是否在捕获阶段触发，需要一个boolean值，一般都传false。 //true表示在捕获阶段执行
```

```
var btn4_3 = document.getElementById("btn4-3");
btn4_3.addEventListener("click", function(){
	console.log("绑定的第1个事件");
}, false)
btn4_3.addEventListener("click", function(){
	console.log("绑定的第2个事件");
}, false)
```



addEventListener() 不支持I8E及以下，可以使用attachEvent()。

```
attachEvent()
参数1：事件字符串，要on;
参数1：funciton(){}。

注意：执行顺序和addEventListener()想反
```

> addEventListener()中的this是绑定事件的对象；
>
>  attachEvent()中的this是window。

```
//统一两个方法的this
function bind(obj, eventStr, callback){
if(obj.addEventListener){
  //大部分现代浏览器
  obj.addEventListener(eventStr, callback, false)
	}else{
  /* this是谁由调用方式决定；
  callback.call(obj)
  */
  //IE8及以下
  obj.attachEvent("on"+eventStr, function(){
    //在匿名函数中调用回调函数
    callback;
		})
	}
}
```



##### 4.4 事件传播

```
事件传播
	- 关于时间的传播，网景和微软有不同的理解
	- 微软认为，事件应该由内而外传播，也就是说事件应该在冒泡阶段执行；
	- 网景认为，事件应该由外而内，也就是说事件应该先触发最外曾的事件，然后向内传播给后代。
	- W3C 综合了两家公司防范，将事件传播定义分成了三个阶段
		1.捕获阶段：从最外层开始向目标元素进行时间的捕获，但不执行触发事件；
		2.目标阶段：事件捕获到目标元素，捕获结束，开始在目标元素上执行触发事件；
		3.冒泡阶段：事件从目标元素开始从父节点传递，依次执行触发事件。
IE8及以下没有捕获阶段
```

在捕获阶段执行，一般不希望在捕获阶段执行事件

```
addEventListener("click", function(){}, true);
```



##### 4.5 拖拽  

```
<script>
  var box_sub = document.getElementById("box4-5-sub");
    // 1. 开始拖拽
    box_sub.onmousedown = function(){
      console.log("开始拖拽");
      //拖拽左上角偏移问题，指针位置保持不动
      // 计算鼠标点击坐标距离被拖拽元素的值 clientX-offsetLeft
      // event = event || window;

      // IE8不起作用，可用element.setCapture()捕获
      //   - 当调用一个元素的setCapture()后，这个元素将会把下一个鼠标按下的任意事件捕获到自己身上
      if(box_sub.setCapture()){  //如果IE8则执行
        box_sub.setCapture()
      };

      var boxTop = event.clientX - box_sub.offsetLeft;
      var boxLeft = event.clientY - box_sub.offsetTop;
      console.log(boxTop, boxLeft);
      // 2. 移动
      document.onmousemove = function(){
        console.log("拖拽ing");
        var left = event.clientX;
        var top = event.clientY;
        console.log(left,top);
        box_sub.style.marginLeft= (left - boxLeft) + "px";
        box_sub.style.marginTop = (top - boxTop) + "px";
      };

      //当鼠标松开时，被拖拽元素停留在当前位置
      //取消document的onmousemove事件
      document.onmouseup = function(){
        document.onmousemove = null;
        // 取消document.onmouseup事件
        document.onmouseup = null;

        // 需要在鼠标松开的时候，取消setCapture(),使用 el.releaseCapture();
        box_sub.releaseCapture();
      };

      // 当我们拖拽一个网页时，浏览器会默认取搜索引擎搜索该内容
      // 此时会导致拖拽功能的异常，这个是浏览器提供的默认行为；
      // 若不希望发生，则可以通过return false来取消默认行为
      return false;
      }
  </script>
```



##### 4.6 滚轮事件 onmousewheel

```
// 火狐不支持，可食用4.3的定义的bind函数；
var box4_6 = document.getElementById("box4-6");
box4_6.onmousewheel = function(){
  // console.log("滚轮动了～～");
  // 判断滚轮方向
  // event.wheelDelta; 向上滚是120，向下滚是-120
  // 火狐使用event.detail; 向上滚是-3，向下滚是3
  if(event.wheelDelta > 0 || event.detail < 0){
    console.log("向上滚～～");
    box4_6.style.width = box4_6.clientWidth - 10 + "px";
    box4_6.style.height = box4_6.clientHeight - 10 + "px";
  }else{
  box4_6.style.width = box4_6.clientWidth + 10 + "px";
  box4_6.style.height = box4_6.clientHeight + 10 + "px";
  }

  // 当滚轮滚动时，如果浏览器有滚动条，则滚动条会随之滚动；
  // 随之滚动是浏览器默认事件，取消则使用 return false;
  return false;
  
  // 火狐使用的是addEventListener()方法绑定，取消默认事件不能用return false;
  // 需要使用event.preventDefault();
  event.preventDefault();
  }
  
  bind(box4_6, "DommouseScroll", function(){
  console.log("[火狐]滚轮动了～～");
})
//此处需要两次写滚轮执行事件，可以函数方式调用
```



##### 4.7 键盘事件

 键盘事件一般绑定给可以获取到焦点的对象或document

######  4.7.1 onkeydown

```
对于onkeydown来说，按着一直不放，则会连续触发；
当onkeydown连续触发时，第2次和第一次间隔时间稍长，其他会非常快，设计的目标是为了防止误操作；
```

###### 4.7.2 onkeyup

```
onkeyuo则不会连续触发
```

```
window.onload = function(){
  document.onkeydown = function(){
    console.log("我按了键盘");
    //altKey shiftKey ctrlKey 是否按了alt shift ctrl 键
    // 获取其他字符通过keycode
    console.log(event.keyCode);

    //  判断是否按了y键
    if(event.keyCode === 89){
   	 console.log("我按了y键");
    }
    
    // 判断是否同时按了某两个键
    if(event.keyCode === 89 && event.shiftKey){
    console.log("我同时按了 ctrl + y");
    }

    // 练习 方向键 移动button
    var keyEvent2 = document.getElementById("keyEvent-2");
    var speed = 10;
    // 按了ctrl 加速
    if(event.altKey){
    	speed = 50;
    }
    switch(event.keyCode){
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

  }

  document.onkeyup = function(){
  	console.log("我松开了键盘");
  }

  // 判断input 是否触发键盘事件
  var keyEvent1 = document.getElementById("keyEvent-1");
  keyEvent1.onkeydown = function(){
    console.log("我在input按了键盘");
    // 在文本框中输入内容，属于onkeydown的默认行为
    // 如果在onkeydown中取消默认行为，则输入的内容不会出现在文本框中
    //return false; // 取消默认行为

    // 文本框中不能输入数字，数字keyCode 48~57
    if(event.keyCode >= 47 && event.keyCode <= 57){
    	return false;
    }
  }
```



##### 🌟练习：拖拽

### 附1 DOM Event

| 属性                                                         | 此事件发生在何时...                  |
| :----------------------------------------------------------- | :----------------------------------- |
| [onabort](https://www.w3school.com.cn/jsref/event_onabort.asp) | 图像的加载被中断。                   |
| [onblur](https://www.w3school.com.cn/jsref/event_onblur.asp) | 元素失去焦点。                       |
| [onchange](https://www.w3school.com.cn/jsref/event_onchange.asp) | 域的内容被改变。                     |
| [onclick](https://www.w3school.com.cn/jsref/event_onclick.asp) | 当用户点击某个对象时调用的事件句柄。 |
| [ondblclick](https://www.w3school.com.cn/jsref/event_ondblclick.asp) | 当用户双击某个对象时调用的事件句柄。 |
| [onerror](https://www.w3school.com.cn/jsref/event_onerror.asp) | 在加载文档或图像时发生错误。         |
| [onfocus](https://www.w3school.com.cn/jsref/event_onfocus.asp) | 元素获得焦点。                       |
| [onkeydown](https://www.w3school.com.cn/jsref/event_onkeydown.asp) | 某个键盘按键被按下。                 |
| [onkeypress](https://www.w3school.com.cn/jsref/event_onkeypress.asp) | 某个键盘按键被按下并松开。           |
| [onkeyup](https://www.w3school.com.cn/jsref/event_onkeyup.asp) | 某个键盘按键被松开。                 |
| [onload](https://www.w3school.com.cn/jsref/event_onload.asp) | 一张页面或一幅图像完成加载。         |
| [onmousedown](https://www.w3school.com.cn/jsref/event_onmousedown.asp) | 鼠标按钮被按下。                     |
| [onmousemove](https://www.w3school.com.cn/jsref/event_onmousemove.asp) | 鼠标被移动。                         |
| [onmouseout](https://www.w3school.com.cn/jsref/event_onmouseout.asp) | 鼠标从某元素移开。                   |
| [onmouseover](https://www.w3school.com.cn/jsref/event_onmouseover.asp) | 鼠标移到某元素之上。                 |
| [onmouseup](https://www.w3school.com.cn/jsref/event_onmouseup.asp) | 鼠标按键被松开。                     |
| [onreset](https://www.w3school.com.cn/jsref/event_onreset.asp) | 重置按钮被点击。                     |
| [onresize](https://www.w3school.com.cn/jsref/event_onresize.asp) | 窗口或框架被重新调整大小。           |
| [onselect](https://www.w3school.com.cn/jsref/event_onselect.asp) | 文本被选中。                         |
| [onsubmit](https://www.w3school.com.cn/jsref/event_onsubmit.asp) | 确认按钮被点击。                     |
| [onunload](https://www.w3school.com.cn/jsref/event_onunload.asp) | 用户退出页面。                       |

