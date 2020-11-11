//参数：
// 1.对象
// 2.方向
// 3.速度（正负方向）
// 4.动画结束位置
// 5.回调函数，执行结束后执行的函数
function move(obj, attr, speed, dir, callback){
  var timer;
  // console.log(obj, attr, speed, dir,);
  clearInterval(timer);
  timer = setInterval(function(){
    // 获取元素当前所处位置
    var info = getComputedStyle(obj,null)[attr];
    var oldLeft = parseInt(info);
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
    obj.style[attr] = newLeft + "px";
    // 当移动到dir目标位置时，停止移动
    if(newLeft == dir){
      clearInterval(timer);
      callback && callback(); //定时器执行完后执行回调函数
    }
  },30)
}

// 定义一个函数，来向元素添加指定class属性值
// 参数：
// obj: 添加的目标元素
// myClassName:添加的class值
function addClass(obj, myClassName){
  console.log(obj.className);
  if(!hasClass(obj, myClassName)){
    obj.className += " " + myClassName;
  }
}
// 判断元素中是否有指定class
// 如果有返回true，没有返回false
function hasClass(obj, myClassName){
  // 获取obj已有的class数组
  //var regExp = /\bmyClassName\b/;
  var reg = new RegExp("\\b"+myClassName+"\\b");
  // console.log(reg.test(obj.className));
  return reg.test(obj.className);
}

function removeClass(obj, myClassName){
  if(hasClass(obj, myClassName)){
    var reg = new RegExp("\\b"+myClassName+"\\b");
    obj.className = obj.className.replace(reg, '');
  }
}

function toggleClass(obj, myClassName){
  if(hasClass(obj, myClassName)){
    removeClass(obj, myClassName);
  }else{
    addClass(obj, myClassName)
  }
}