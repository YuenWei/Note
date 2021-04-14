const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')  // 打包前 清空配置文件的output/path下的文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')// 分离css
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin') // 压缩css
const TerserWebpackPlugin = require('terser-webpack-plugin') // 压缩js

module.exports = {
  mode:'development',  // 开发环境和生产环境配置很多不一样（不能压缩，混合）
  // mode:'production',
  devtool:'eval',
  // 如果使用了devServer，那么所有产出的文件就会写到内存
  devServer:{
    contentBase: './dist',
    // inline:true, //在源代码修改之后重新打包并刷新浏览器
    port: '8081',
    host:'',
    // compress: true
  },
  optimization: {  // 优化的内容
    minimize: false,  // 是否压缩
    minimizer: [  // 优化的插件
      new TerserWebpackPlugin({
        parallel: true,  // 开启多线程并行压缩
        terserOptions: {  // 剥离所有有效的注释,并保留 /@license/i 注释。
          format: {
            comments: /@license/i,
            comments: false  // 去除注释
          },
        },
        extractComments: true,
        // extractComments: false// 去除注释
      }),
      new CssMinimizerPlugin({
        parallel: true,
      }),
    ],
  },
  // entry: './src/index.js', // 单入口
  entry: {  // 多文件入口
    index: './src/index.js',
    login: './src/login.js'
  },
  output: {
    path:path.join(__dirname, 'dist'), // 输出目录只能是绝对路径
    // filename:'bundle.js'
    filename:'[name].[hash].js', // 多文件名称来自entry的key
    // hash 每编译一次，hash会变，所有产出的文件hash值一样
    // chunkhash  代码块hash值，entry对应产出的chunk，【策略：cdn缓存变化的文件js,html中引入的文件hash值不同，来更新】
    // contenthash
    publicPath:'./'  // 跟路径
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              // 插件打包成预设包
              "presets":[
                "@babel/preset-env",
                "@babel/preset-react"
              ],
              "plugins": [
                ['@babel/plugin-proposal-decorators', {legacy: true}],
                ['@babel/plugin-proposal-class-properties', {loose: true}]
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/i, // 如果inport或require的是.css的文件
        // use:['style-loader', 'css-loader'], // 从右往左处理
        // include: '', // 指定必须处理的css文件
        // exclude: '', // 屏蔽不需要处理的css文件
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // outputPath: 'css',
              publicPath: 'css'
            }
          },
          'css-loader', 'postcss-loader' // postcss-loader需要一个配置文件
        ], // 分离css,不需要将css打包在bundle.js
      },
      {
        test: /\.less$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // outputPath: 'css',
              publicPath: 'css'
            }
          },
          'css-loader', 'less-loader' // 多一个less-loader
        ], 
      },
      {
        test: /\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // outputPath: 'css',
              publicPath: 'css'
            }
          },
          'css-loader', 'sass-loader' // 多一个less-loader
        ], 
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',  //增强的file-loader,url-loader封装了file-loader
            options: {
              esModule: false,
              // name: '[name].[ext]',
              limit: 10240,
              name: '[name].[contenthash].[ext]',
              outputPath: 'images',  // 把图片拷贝到images
              publicPath: 'images'  // 重写外部publicpath,指定路径
            }
          }
        ]
      },
      {
        test: /\.(html|htm)$/,
        loader: 'html-withimg-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'webpack',
      filename: 'index.html', // 产出后的文件名
      hash: true, // 为了避免缓存
      chunks: ['index', 'login'], // 指定引入的文件，没有则全部chunk写入到index.html
      chunksSortMode: 'manual',  // 对引入的代码块进行排序，不配置的话可能乱序
    }),
    new CleanWebpackPlugin(), 
    new MiniCssExtractPlugin({  // 分离css，不打包在js里,默认放在head的style标签
      filename: 'css/[name].[hash].[chunkhash].[contenthash].css', // css文件存放路径及名称
      chunkFilename: 'css/[id].css' // 代码块文件名,异步加载时的
    }), 
  ],
}