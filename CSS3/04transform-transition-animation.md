### transform

##### translate()

```
// 移动位置,单值表示X位移
transform:translate(x, y)
transform:translateX(x)
transform:translateY(y)
```

##### rotate()

```
// 旋转角度
transform:rotate(90deg)
```

##### scale()

```
// 缩放比例
transform:scale(n)  
transform:scale(x, y)  
transform:scaleX(n)
transform:scaleY(n)
```

##### skew()

```
// 倾斜角度，一个参数，默认第二个为0
transform:skew(x, y)
transform:skewX(x)
transform:skewY(y)
```

##### matrix()

```
// 有六个参数，包含旋转，缩放，移动（x,y）和倾斜(x,y)功能
transform:matrix()
transform:matrix(0.866,0.5,-0.5,0.866,0,0)
```

##### transform-origin

```
// 设置旋转元素的基点位置  支持的值：left px %
```

##### 组合变化

> 组合变化从右往左计算

```
// 矩阵不适合交换律，矩阵变化最终效果与属性顺序有关
//相同大小的两个div最终效果不一样

<div class="item item-group">
	<div class="div1-1"></div>
	<div class="div1-2"></div>
</div>

.div1-1,.div1-2{width:50px;height:50px;background:#f00;margin-bottom:20px;transition:.5s;}
.item-group:hover .div1-1{transform:translate(100px) scale(0.5)}
.item-group:hover .div1-2{transform:scale(0.5) translate(100px)}
 
// 计算通过矩阵计结合为最终效果
//scale 理解-缩放的时候包含坐标系，即位移偏移50px
//rotate 理解-坐标系对换
```

移入前后对比

<img src="/Users/yuanwei/Desktop/Note/CSS3/src/images/image-20201202171953841.png" alt="image-20201202171953841" style="zoom:25%;" /><img src="/Users/yuanwei/Library/Application Support/typora-user-images/image-20201202173113051.png" alt="image-20201202173113051" style="zoom:25%;" />





### transition()

> transition 的坑
>
> 1. 在元素首次渲染还没完成的情况下，是不会触发过渡的；
> 2. 在绝大多数变换样式切换时中，如果变换函数的位置和个数不相同也不会触发过渡。



```
transition	简写属性，用于在一个属性中设置四个过渡属性。
transition: 过渡属性名 执行时间 过渡效果 开始时间;
// 分开写法：
transition-property	规定应用过渡的 CSS 属性的名称。	
transition-duration	定义过渡效果花费的时间。默认是 0s,必带s/ms单位。	多裁剪少复制列表
transition-timing-function	规定过渡效果的时间曲线。默认是 "ease"。
transition-delay	规定过渡效果何时开始。默认是 0。
```

例子：

```
transition-property: width;
transition-duration: 1s;
transition-timing-function: linear;
transition-delay: 2s;
```

##### transition-timing-function

```
linear	规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）。
ease	规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）。
ease-in	规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）。
ease-out	规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）。
ease-in-out	规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）。
cubic-bezier(n,n,n,n)	在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值。
```

> 1.每一个拥有过渡的属性在其完成过度时都会触发一次transitionend事件；
>
> 2.在transition完成前设置display:none，事件同样不会触发。
>
> 3.**transition过渡在元素首次渲染还没有结束的情况下不会被触发**。  渲染/绘制  异步/同步

代码实例：

```
// 宽度变为300px持续2s
.transition{transition:width 2s;}
.transition:hover{width:300px;}
```

```
// 宽度变为300px持续2s,高度变为100px持续2s，变换持续3s
.transition-2{transition: width 2s, height 3s,transform 3s;}
.transition-2:hover{width:300px;height:100px;transform:rotate(45deg) scale(1.5);}
```



### 3D

##### perspective

> 景深在包裹的wrap上设置，作用在其子元素上。
>
> 近大远小，景深越大，灭点越远，元素变换越小。
>
> **注意：**perspective 属性只影响 3D 转换元素。
>
>              不可继承属性，只作用于子元素。

transform:perspective(100)  //该写法作用于本身

##### perspective-origin

3D元素的基数位置

**综合**

```
perspective	// Z轴基点
perspective-origin(x,y)	// X,Y轴基点
```



##### transform-style

指定嵌套元素是怎样在三维空间中呈现;

```
语法：默认flat,作用于子元素
transform-style: flat|preserve-3d;
```



##### rotate3d()

```
// 围绕其在一个给定度数X,Y,Z轴旋转的元素。
transform:rotate3D()
transform:rotate3d(1,0,0,360deg)  //按X轴变换
transform:rotate3d(1,1,1,360deg)

transform:rotateX()	// 围绕其在一个给定度数X轴旋转的元素。
transform:rotateY()	// 围绕其在一个给定度数Y轴旋转的元素。
transform:rotateZ()	// 围绕其在一个给定度数Z轴旋转的元素。
```



**示例：**

```
.item-3d{-webkit-perspective:300;transform-style: preserve-3d;}	// 景深&变换方式
.trans-3d-1,.trans-3d-2,.trans-3d-3,.trans-3d-4{width:100px;height:100px;margin:10px;border-radius:50%;font-size:12px;color:#fff;line-height:100px;background:#f00;text-align:center;transition:2s;display:inline-block;}
.trans-3d-1:hover{transform:rotateX(360deg)}
.trans-3d-2:hover{transform:rotateY(360deg)}
.trans-3d-3:hover{transform:rotateZ(360deg)}
.trans-3d-4:hover{transform:rotate3d(1,1,1,360deg)}
      
<div class="item item-3d">
	<div class="trans-3d-1">rotateX</div>
	<div class="trans-3d-2">rotateY</div>
	<div class="trans-3d-3">rotateZ</div>
	<div class="trans-3d-4">rotate3D</div>
</div>
```



##### scale3d()

```
scale3d(x,y,z)	定义 3D 缩放转换。
scaleX(x)	定义 3D 缩放转换，通过给定一个 X 轴的值。
scaleY(y)	定义 3D 缩放转换，通过给定一个 Y 轴的值。
scaleZ(z)	定义 3D 缩放转换，通过给定一个 Z 轴的值。
```

##### translate3d()

```
translate3d(x,y,z)	定义 3D 转化。
translateX(x)	定义 3D 转化，仅使用用于 X 轴的值。
translateY(y)	定义 3D 转化，仅使用用于 Y 轴的值。
translateZ(z)	定义 3D 转化，仅使用用于 Z 轴的值。
```

##### backface-viability

定义元素在不面对屏幕时是否可见

```
ackface-visibility:visible | hidden;
```

##### 

##### 练习：正方体

<img src="/Users/yuanwei/Desktop/Note/CSS3/src/images/image-20201209145745889.png" alt="image-20201209145745889" style="zoom:50%;" />

1. 鼠标移动上盒子旋转，故class.box的父层需要3d景深舞台；
2. 以后面为视点，定位其余五面的位置；
3. 景深层级各面取不到，需要添加景深属性。

```
/* 3D舞台 */
.box-wrap{width:100px;height:100px;transform-style:preserve-3d;perspective:100px;}
/* 正方体盒子 */
.box{width:100px;height:100px;position:relative;transform-style:preserve-3d;transform-origin: center center -50px;transition:5s;}
/* 背景是否可见 */
    /* .box .box-item{backface-visibility: hidden;} */
/* 正方体盒子的6面 */
.box .box-item{width:100px;height:100px;text-align:center;line-height:100px;background:rgba(255,0,0,.4);position:absolute;border:1px dotted #8e0202;box-sizing: border-box;}
/* 上面：以X轴为基点，顶部往后推90度 */
.box-top{top:-100px;transform-origin:bottom;transform:rotateX(90deg)}
/* 下面：以X轴为基点，低部往后推90度 */
.box-bottom{bottom:-100px;transform-origin:top;transform:rotateX(-90deg);}
/* 左侧面：以Y轴为基点，左边往后推90度 */
.box-left{left:-100px;transform-origin:right;transform:rotateY(-90deg)}
/* 右侧面：以Y轴为基点，右边往后推90度 */
.box-right{left:100px;transform-origin:left;transform:rotateY(90deg)}
/* 前面：以Z轴为基点，后移100px */
.box-before{left:100px;transform-origin:center;transform:translateX(-100px) translateZ(-100px) rotateX(180deg)}

.box-wrap:hover .box{transform:rotateY(360deg);}

<div class="box-wrap">
  <div class="box">
    <div class="box-item box-before">前</div>
    <div class="box-item box-after">后</div>
    <div class="box-item box-left">左</div>
    <div class="box-item box-right">右</div>
    <div class="box-item box-top">上</div>
    <div class="box-item box-bottom">下</div>
  </div>
</div>
```



##### 练习：正方体-改进

思路：**每个面的基点定义在正方体的中心**

1. 每个面的基点定义在正方体的中心；<br>
2. 以正方体中心为基点，变换各面的位置；<br>
3. 调整前面的方向

```
/* 正方体改进 */
/* 3D舞台 */
.box-wrap-2{width:100px;height:100px;transform-style:preserve-3d;perspective:100px;}
/* 正方体盒子 */
.box-2{width:100px;height:100px;position:relative;transform-style:preserve-3d;transform-origin: center center -50px;transition:5s;}
/* 正方体盒子的6面，改进-以正方体中心为基点 */
.box-2 .box-2-item{width:100px;height:100px;text-align:center;line-height:100px;background:rgba(255,0,0,.4);position:absolute;border:1px dotted #8e0202;box-sizing: border-box;transform-origin:center center -50px;}

/* 上面：以正方体中心为基点，顶部往后推90度 */
.box-2-top{transform:rotateX(90deg)}
/* 下面：以正方体中心为基点，低部往后推90度 */
.box-2-bottom{transform:rotateX(-90deg)}
/* 左侧面：以正方体中心为基点，左边往后推90度 */
.box-2-left{transform:rotateY(-90deg);}
/* 右侧面：以正方体中心为基点，右边往后推90度 */
.box-2-right{transform:rotateY(90deg);}
/* 前面：以正方体中心为基点，后移100px */
.box-2-before{transform:rotateX(180deg);}

.box-wrap-2:hover .box-2{transform:rotateX(360deg);}
    
<div class="box-wrap-2">
  <div class="box-2">
    <div class="box-2-item box-2-before">前</div>
    <div class="box-2-item box-2-after">后</div>
    <div class="box-2-item box-2-left">左</div>
    <div class="box-2-item box-2-right">右</div>
    <div class="box-2-item box-2-top">上</div>
    <div class="box-2-item box-2-bottom">下</div>
  </div>
</div>
```



##### 综合：多棱柱

通过正方体和三棱柱总得出(忽略顶部和底部的面)：

1. 定义中心点为基点，通过三角函数（边长*tan(内角/2)）计算出Z轴中心点位置（多变形的外交和等于180度）；
   
2. 故第N面旋转的度数=N*外角

```
/* 多棱柱 */
/* 3D舞台 */
.box-wrap-4{width:100px;height:100px;transform-style:preserve-3d;perspective:100px;}
/* 只有transform有过渡 */
.box-4{width:100px;height:100px;position:relative;transform-style:preserve-3d;transition:transform 5s;}
/* 多棱柱盒子的面，中心为基点 */
.box-4>div{width:100px;height:100px;text-align:center;line-height:100px;background:rgba(255,0,0,.4);position:absolute;border:1px dotted #8e0202;box-sizing: border-box;}
.box-wrap-4:hover .box-4{transform:rotateY(-360deg);}


<div class="box-wrap-4">
  <div class="box-4">
  </div>
</div>


<script>
function createBox(n){
  // 计算外角度数
  var degOut = 360/n;
  console.log("外角："+degOut);

  // 计算内角度数
  var degIn = 180-degOut;
  console.log("内角："+degIn);

  // 获取舞台及多面体，赋值基点
  var boxWrap = document.getElementsByClassName("box-wrap-4")[0];
  var boxNode = document.getElementsByClassName("box-4")[0];

  // 计算基点位置：中心点距离，即Z轴偏移距离
  var length = boxNode.offsetWidth;
  console.log(length);
  // 角度转弧度
  var zAxis = length/2 * Math.tan((degIn/2)*Math.PI/180);
  console.log(zAxis);
  // 基点
  var basicPoint = 'transform-origin:center center ' + (-zAxis) + 'px';
  console.log(basicPoint);
  boxWrap.style=basicPoint;
  boxNode.style=basicPoint;

  // 创建多棱柱的面html
  var text = "";

  // 创建不各面的的css
  var cssText = "";

  for(var i=0;i<n;i++){
    cssText = 'transform:rotateY(' + (+i*degOut) + 'deg)';
    console.log(cssText);
    // 拼接transform-origin和transform:rotate()
    var styleText = basicPoint+ ';' +cssText;
    console.log(styleText);
    text += '<div style="' + styleText +'">' + (i+1) +'</div>';
    console.log(text);
  }
  boxNode.innerHTML=text;
}
window.onload = createBox(4);
</script>
```



### animation

下面的表格列出了 @keyframes 规则和所有动画属性：

```
.an{
  /* 动画本身的属性 */
  animation-name:move;
  animation-duration:5s;  /*一个动画周期时长*/
  animation-timing-function: linear; /*一个动画关键帧时长，而非整个动画周期的时长，控制一个关键帧周期*/
  
  /* step(1,end) 理解：关键帧周期/动画周期 */ 
  animation-direction: reverse;  /* 动画方向,反转的属性有关键帧from，to执行方向和animation-timing-function */
  /*
  normal:from 到 to;
  reverse:to 到 from;
  alternate: from-to,to-from
  alternate-reverse: to-from,from-to
  */
      
  /* 动画外的属性 */
  animation-delay:3s;
  
  /* 动画内关键帧的属性 */
  animation-iteration-count:3; /* 重复的是关键帧 infinite无限次*/
  
  /* 元素在动画外的状态：即from之前to之后 */
  animation-fill-mode: backwards;
  /*
   none:默认  
   backwards:from之前的状态和from的状态保持一致；
   forwards:to之后的状态和to的状态保持一致；
   both:backwards+forwards
  */
      
}

/* 定义动画状态：鼠标移动上去暂停 */
.an-wrap:hover .an{animation-play-state: paused;}
    
@keyframes move{
  from{transform:rotate(0)}
  to{transform:rotate(360deg)}
}
```

#####  animation-timing-function

 animation-timing-function:steps(number_of_steps, direction)，这个函数叫做阶梯函数，这个函数能够起到定格动画的效果。

阶梯函数不像其他定时函数那样，平滑的过渡，而是以帧的方式过渡。

他有两个参数：

-  number_of_steps ：阶梯数（必须是一个正整数），他将动画的总时长按照阶梯数等距划分
-  direction ：可选值为start或end，默认end，也可以不写；start表示动画的第一帧会被立即执行,直接从第二帧开始，然后以第一帧结束；end则表示动画从第一帧开始到正常结束；

| 属性                                                         | 描述                                                         | CSS  |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :--- |
| [@keyframes](https://www.runoob.com/cssref/css3-pr-animation-keyframes.html) | 规定动画。                                                   | 3    |
| [animation](https://www.runoob.com/cssref/css3-pr-animation.html) | 所有动画属性的简写属性。                                     | 3    |
| [animation-name](https://www.runoob.com/cssref/css3-pr-animation-name.html) | 规定 @keyframes 动画的名称。                                 | 3    |
| [animation-duration](https://www.runoob.com/cssref/css3-pr-animation-duration.html) | 规定动画完成一个周期所花费的秒或毫秒。默认是 0。             | 3    |
| [animation-timing-function](https://www.runoob.com/cssref/css3-pr-animation-timing-function.html) | 规定动画的速度曲线。默认是 "ease"。                          | 3    |
| [animation-fill-mode](https://www.runoob.com/cssref/css3-pr-animation-fill-mode.html) | 规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。 | 3    |
| [animation-delay](https://www.runoob.com/cssref/css3-pr-animation-delay.html) | 规定动画何时开始。默认是 0。                                 | 3    |
| [animation-iteration-count](https://www.runoob.com/cssref/css3-pr-animation-iteration-count.html) | 规定动画被播放的次数。默认是 1。                             | 3    |
| [animation-direction](https://www.runoob.com/cssref/css3-pr-animation-direction.html) | 规定动画是否在下一周期逆向地播放。默认是 "normal"，反转"reverve" | 3    |
| [animation-play-state](https://www.runoob.com/cssref/css3-pr-animation-play-state.html) | 规定动画是否正在运行或暂停。默认是 "running"。               | 3    |

需结合@keyframes和animation

##### @keyframes

规则内指定一个 CSS 样式和动画将逐步从目前的样式更改为新的样式。

```
@keyframes myfirst
{
    from {background: red;}
    to {background: yellow;}
}
```



##### animation

绑定到一个选择器，规定动画的名称以及时长

> **注意:** 您必须定义动画的名称和动画的持续时间。如果省略的持续时间，动画将无法运行，因为默认值是0。

```
animation: mrfirst 2s;
```

