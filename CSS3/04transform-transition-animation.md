### transform

##### translate()

```
// 移动位置
transform:translate(x, y)
transform:translateX(x)  //3D
transform:translateY(y)  //3D
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
transform:scaleX(n)  //3D
transform:scaleY(n)  //3D
```

##### skew()

```
// 倾斜角度，一个参数，默认第二个为0
transform:skew(x, y)
transform:skewX(x)  //3D
transform:skewY(y)  //3D
```

##### matrix()

```
// 有六个参数，包含旋转，缩放，移动（x,y）和倾斜(x,y)功能
transform:matrix()
transform:matrix(0.866,0.5,-0.5,0.866,0,0)
```

#### 3D

##### rotateX()

```
// 围绕其在一个给定度数X轴旋转的元素。
transform:rotateX()

// 围绕其在一个给定度数Y轴旋转的元素。
transform:rotateY()

// 围绕其在一个给定度数Z轴旋转的元素。
transform:rotateZ()

// 围绕其在一个给定度数X,Y,Z轴旋转的元素。
transform:rotate3D()
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

### transition()

```
transition	简写属性，用于在一个属性中设置四个过渡属性。
// 分开写法：
transition-property	规定应用过渡的 CSS 属性的名称。	
transition-duration	定义过渡效果花费的时间。默认是 0。	
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

### 动画

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

