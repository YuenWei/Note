// 自定义JS模块
function modules(){
  // 内部变量，外部不可访问
  var msg = "模块信息"
  function sendMsg(){
    console.log('发送' + msg)
  }

  function readMsg(){
    console.log('读取' + msg)
  }
 
  // 向外暴露方法
  return {
    sendMsg: sendMsg,
    readMsg: readMsg
  }
}

// 自定义JS模块(推荐）
(function(window){
  var msg = "模块信息"
  function sendMsg(){
    console.log('发送' + msg)
  }

  function readMsg(){
    console.log('读取' + msg)
  }
 
  // 向外暴露方法
  window.modules2 = {
    sendMsg: sendMsg,
    readMsg: readMsg
  }
})(window)