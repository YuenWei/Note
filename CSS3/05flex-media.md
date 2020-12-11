## flex

### flex box

弹性盒子由弹性容器(Flex container)和弹性子元素(Flex item)组成。

弹性容器通过设置 display 属性的值为 flex 或 inline-flex将其定义为弹性容器。

弹性容器内包含了一个或多个弹性子元素。

**注意：** 弹性容器外及弹性子元素内是正常渲染的。弹性盒子只定义了弹性子元素如何在弹性容器内布局。

弹性子元素通常在弹性盒子内一行显示。默认情况每个容器只有一行。

## 容器

### display

```
display:flex    子元素一行等分
```

**旧** 

```
display:-webkit-box	一行按实际大小显示，超出不换行
```



### flex-direction

弹性容器中子元素的排列方式：布局方向和子元素排列方向

> 新版本 flex-direction同时控制布局方向和子元素排列方向
>
> 旧版本 需要-webkit-box-orient 和 -webkit-box-derection 结合控制布局方向和子元素排列方向

```
flex-direction: row | row-reverse | column | column-reverse
```

- row：从左到右排列（左对齐），默认的排列方式。
- row-reverse：反转横向排列（右对齐，从后往前排，最后一项排在最前面。
- column：纵向排列。
- column-reverse：反转纵向排列，从后往前排，最后一项排在最上面。



**旧**

```
控制主轴方向
-webkit-box-derection:normal	|	reverse	|	inherit;
```

- normal:	子元素顺序排列
- reverse: 子元素倒序排列

**旧**

```
子元素排列方向
-webkit-box-orient:horizontal  | vertical  |	inline-axis	|	block-axis	|	inherit
```

- horizontal: 水平排列
- vertical:垂直排列
- inline-axis: 子元素沿着内联坐标轴（映射到横向）
- block-axis: 子元素沿着块坐标轴（映射到垂直）



### justify-content

**富裕空间管理-主轴**

内容对齐（justify-content）属性应用在弹性容器上，把弹性项沿着弹性容器的主轴线（main axis）对齐。

```
justify-content: flex-start | flex-end | center | space-between | space-around
```

- flex-start：

  弹性项目向行头紧挨着填充。这个是默认值。第一个弹性项的main-start外边距边线被放置在该行的main-start边线，而后续弹性项依次平齐摆放。

- flex-end：

  弹性项目向行尾紧挨着填充。第一个弹性项的main-end外边距边线被放置在该行的main-end边线，而后续弹性项依次平齐摆放。

- center：

  弹性项目居中紧挨着填充。（如果剩余的自由空间是负的，则弹性项目将在两个方向上同时溢出）。

- space-between：**两端对齐，项目之间的间隔都相等。**

  弹性项目平均分布在该行上。如果剩余空间为负或者只有一个弹性项，则该值等同于flex-start。否则，第1个弹性项的外边距和行的main-start边线对齐，而最后1个弹性项的外边距和行的main-end边线对齐，然后剩余的弹性项分布在该行上，相邻项目的间隔相等。

- space-around：**每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。**

  弹性项目平均分布在该行上，两边留有一半的间隔空间。如果剩余空间为负或者只有一个弹性项，则该值等同于center。否则，弹性项目沿该行分布，且彼此间隔相等（比如是20px），同时首尾两边和弹性容器之间留有一半的间隔（1/2*20px=10px）。

<img src=" ./src/images/bg2015071010.png" alt="img" style="zoom:33%;text-align:center;" />

**旧**

```
-webkit-box-pack：start	|	end	|	center	|	justify
```

- start: 富裕空间在右/下边
- end: 富裕空间在左/上边
- center: 富裕空间在两边
- justify: 富裕空间平均分配给每个**子元素之间**



### align-items

定义了**单根轴线**的对齐方式，多跟轴线用align-content。

**富裕空间管理-侧轴**

设置或检索弹性盒子元素在侧轴（纵轴）方向上的对齐方式。

```
align-items: flex-start | flex-end | center | baseline | stretch
```

- flex-start：交叉轴的起点对齐

  弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界。

- flex-end：交叉轴的终点对齐

  弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。

- center：交叉轴的中点对齐

  弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）。

- baseline：项目的第一行文字的基线对齐

  如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。其它情况下，该值将参与基线对齐。

- stretch：(默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度

  如果指定侧轴大小的属性值为'auto'，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照'min/max-width/height'属性的限制。
  
  <img src="./src/images/bg2015071011.png" alt="img" style="zoom:33%;" />
  
  **旧**

```
-webkit-box-align: start | end | center | baseline | stretch;
```

- start:

  对于正常方向的boxes，每个子元素的顶部边缘放在沿box的顶部。反向箱，每个子元素的底边放在沿box的底部

- end:

  对于正常方向的boxes，每个子元素的顶部边缘放在沿box的底部。反向箱，每个子元素的底边放在沿box的顶部

- center:

  任何多余的空间被划分均匀，一半以上的子元素放在上面，剩下的子元素放在另一半

- baseline:

  如果[box-orient](https://www.runoob.com/cssref/css3-pr-box-orient.html)是内嵌单轴或横向，所有的子元素都置于他们的基线对齐

- stretch:

  子元素拉伸以填充包含区块



### flex-wrap

弹性盒子的子元素超出父容器时是否换行

```
flex-wrap: nowrap|wrap|wrap-reverse|initial|inherit;
```

- nowrap: 默认值
- wrap: 换行，第一行在上方
- wrap-reverse: 换行，第一行在下方
- initial:
- inherit:



### flex-flow

flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。

```
flex-flow: <flex-direction> || <flex-wrap>;
```



### align-content

定义了**多根轴线**的对齐方式。如果项目只有一根轴线，该属性不起作用。**单根轴线用align-items**

```
align-content: flex-start | flex-end | center | space-between | space-around | stretch;
```

- flex-start: 与交叉轴的起点对齐。
- flex-end: 与交叉轴的终点对齐。
- center: 与交叉轴的中点对齐。
- space-between: 与交叉轴两端对齐，轴线之间的间隔平均分布。
- space-around: 每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
- stretch:（默认值）轴线占满整个交叉轴。

<img src="./src/images/bg2015071012.png" alt="img" style="zoom:33%;" />

## 项目

### order

定义项目的排列顺序。数值越小，排列越靠前，默认为0。

```
order: <integer>;
```



### flex-grow

```
flex-grow: <number>;
```

定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。

如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。

如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

**旧**

```
-webkit-box-flex:1  等比分配给各项目
```



### flex-shrink

```
flex-shrink: <number>; /* default 1 */
```

定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。

如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。

如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。

负值对该属性无效。



### flex-basis

```
flex-basis: <length> | auto; /* default auto */
```

定义了在分配多余空间之前，项目占据的主轴空间（main size）。

浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。



### flex

```
flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
```

flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。

该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。

建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。



### align-self

align-self属性允许单个项目有与其他项目不一样的对齐方式，**可覆盖align-items属性**。

```
align-self: auto | flex-start | flex-end | center | baseline | stretch;
```

默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

## media

语法：

```
@media not|only mediatype and (expressions) {
    CSS 代码...;
}
```

- **not:** 

  not是用来排除掉某些特定的设备的，比如 @media not print（非打印设备）。

- **only:** 加only避免老版本(@media screen{ })，这样的话老版本失效

  用来定某种特别的媒体类型。对于支持Media Queries的移动设备来说，如果存在only关键字，移动设备的Web浏览器会忽略only关键字并直接根据后面的表达式应用样式文件。对于不支持Media Queries的设备但能够读取Media Type类型的Web浏览器，遇到only关键字时会忽略这个样式文件。

- **all:** 

  所有设备，这个应该经常看到。



### mediatype

 all | print | screnn | speech



**在不同的媒体上使用不同的样式文件：**

```
<link rel="stylesheet" media="mediatype and|not|only (expressions)" href="print.css">
```



### expressions

**width/max-width/min-width** 屏幕宽度

```
浏览器窗口宽度在640px到960px之间
@media screen and (max-width:960px) and (min-width:640px){

}
```

**device-width **设备独立像素

PC端是分辨率

移动端具体看机器参数

**device-pixel-ratio** 设备像素比DPR

受苹果手机影响，需大于1。

```
@media screen and (-webkit-min-device-pixel-ratio:1){

}
```

**orientationo**

横竖屏

portrait: 竖屏

landscape: 横屏



### 关键字

**and**

最大屏幕宽度是960px **且** 设备像素比最小为1

```
@media screen and (max-width:960px) and (-webkit-min-device-pixel-ratio:1){

}
```

**,**  

最大屏幕宽度是960px **或** 设备像素比最小为1

```
@media screen and (max-width:960px) , (-webkit-min-device-pixel-ratio:1){

}
```





## 多列布局

column-width: 分割的宽度

column-count: 分割的列数

column-gap:  列与列间的间隙

column-rule: 列与列间的样式 类似border（column-rule -style, column-rule-width, column-rule-color）

## 移动端

### 基础概念

 屏幕尺寸

屏幕分辨率（物理像素，css像素， 物理像素与css像素关系）

屏幕像素密度



设备独立像素

位图像素

像素比

### 缩放



### meta&viewport



### 视口

布局视口

视觉视口

理想视口