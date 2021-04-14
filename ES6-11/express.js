const { response } = require('express')
const express = require('express')
const { request } = require('http')
const app = new express()

app.get('/promise', (resquest, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*')
  let data = {
    name :'promise',
    date: 'ajax'
  }
  response.send(data)
} )

app.get('/book1', (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*')
  let data = {
    name: '西游记',
    author: '吴承恩'
  }
  response.send(data)
})
app.get('/book2', (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*')
  let data = {
    name: '红楼梦',
    author: '曹雪芹'
  }
  response.send(data)
})
app.get('/book3', (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*')
  let data = {
    name: '三国演义',
    author: '罗贯中'
  }
  response.send(data)
})

app.listen('8000', ()=>{
  console.log('开始监听。。。');
})