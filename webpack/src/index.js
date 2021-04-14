import './module'
import './css/style.css'

import './css/less.less'
import './css/sass.scss'

console.log('hell webpack')
console.log('hell webpack-dev-serve')

document.write('<h3>Hello Webpack!</h3><br><p>webpack-dev-server</p>')

// image  file-loader  url-loader
const imgUrl = require('./images/tool.jpg')
console.log(imgUrl);
const img = new Image()
img.src = imgUrl
document.getElementById('images').appendChild(img)