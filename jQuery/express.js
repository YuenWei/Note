// 1 引入express
const { response } = require('express')
const express = require('express')
const { request } = require('http')

// 2 创建应用对象
const app = express()

// 3 创建路由规则
app.get('/server', (request, response) => {
  // 设置响应头  设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*')

  // 设置响应体
   response.send('Hell Express')
})

// 3-2 创建路由规则-POST
app.all('/server', (request, response) => {
  // 设置响应头  设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*')
  // 设置响应头 所有类型都可以接受 且post改为all
  response.setHeader('Access-Control-Allow-Headers', '*')

  // 设置响应体 * 设置post参数
   response.send('POST: Hell Express')
})

// json
app.get('/json', (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*')
  var data = {
    username: 'admin',
    password: '1234567'
  }
  //  对象类型转为json字符串
  var str = JSON.stringify(data)
  response.send(str)
})

// ie
app.get('/ie', (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.send('ie缓存问题')
})

// 请求超时与网络异常
app.get('/net', (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*')
  setTimeout(() => {
    response.send('3秒后发送响应')
  }, 3000);
})

// 4 监听端口启动服务
app.listen(8000, () => {
  console.log('服务已启动，运行中……');
})