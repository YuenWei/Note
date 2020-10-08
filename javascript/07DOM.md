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

clientHeight;   //返回**120**  = content+padding
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

###### 3.5.4 scollHeight

返回元素的整体高度。

如果子元素超出父元素，overflow:auto;按钮父元素的高度为子元素高度。

```
<div id="box-pare" style="width:100px;height:100px;">
	<div id=box-sub"" style="width:150px;height:300px;">
	</div>
</div>

scrollHeight;	//返回300
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

