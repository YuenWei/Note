```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

  <script>
  //1.使用setTimeOut()
  // setTimeout( () => {
  //   //1秒后执行
  //   console.log('setTimeOut');
  // }, 1000)

  // 1.promise 参数是函数(resolve, reject)
  //  Q：什么情况下会用到？
  //  A：一般是有异步请求时，使用promise对这个异步进行封装

  //在执行传入的回调函数时，会传入两个参数，resolve，reject这两个本身又是函数

  //setTimeout  网络请求
  //then()  处理
  //setTimeout(data)的输出，然后传到then(data)执行

  //失败的时候调用reject，结果传到catch()执行

  new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve('hello Promise resolve 1')
      reject('error 1')
    }),1000
  }).then((data) => {
    console.log(data);
  }).catch((data) => {
    console.log(data);
  })

  //第二种写法
  new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve('hello Promise resolve 2')
      reject('error 2')
    }),1000
  }).then((data) => {
    console.log(data);
  }, error => {
    console.log(error);
  })

  //练习1 
  //网请求 aaa  ->  自己处理10行
  //处理   aaa111 -> 自己处理10行
  //处理   aaa111222  ->  自己处理
  new Promise((resolve, reject) => {
    setTimeout( ()=> {
      resolve('aaa')
    },1000)
  }).then( data => {
    //1.自己处理请求
    console.log(data, '第 1 层处理');

    //2.调用Promise,处理 拼接 111
    return new Promise( (resolve, reject) => {
      resolve(data + '111')
    })
  }).then( data => {
    console.log(data, '第 2 层处理');

    //3.调用Promise,处理 拼接 222
    return new Promise( (resolve, reject) => {
      resolve(data + '222')
      })
    }).then( data => {
      //结果处理
      console.log(data, '第 3 层处理');
  })

  //练习1简写 
  //直接 return 结果，内部实现Promise.resolve
  new Promise((resolve, reject) => {
    setTimeout( ()=> {
      resolve('2.aaa')
    },1000)
  }).then( data => {
    //1.自己处理请求
    console.log(data, '第 1 层处理');
    //return data + '111'  //==   Promise.resolve(data + '111')
    //return Promise.resolve(data + '111')

    //抛异常 两种
    // 1.promist.reject
    return Promise.reject('error')
    // 2.throw
    //throw 'error throw'
  }).then( data => {
    console.log(data, '第 2 层处理');
    return data + '222'
    }).then( data => {
      //结果处理
      console.log(data, '第 3 层处理');
    }).catch( err => {
    console.log('error');
  })


  //练习2
  //本身依赖两个请求：需要完成请求1，请求2后在执行
  
  //定义两个变量，保存两个请求的结果
  // let isResult1 = false;
  // let isResult2 = false;
  // //1.请求1
  // $ajax({
  //   url: '',
  //   //console.log('请求1结果');
  // })

  // //1.请求2
  // $ajax({
  //   url: '',
  //   //console.log('请求1结果');
  // })

  // function handle(){
  //   if(isResult1 && isResult2) {
  //     //两个结果都为turn再执行
  //   }
  // }
  
  //promise all 实现包装两个异步请求，完成两个异步请求后再执行
  //Promise.all(value:[*, *, *])
  Promise.all([
    new Promise((resolve, reject) => {
      setTimeout( (data1) => {
        resolve('data1 结果')
      },1000)
    }),
    new Promise((resolve, reject) => {
      setTimeout( (data2) => {
        resolve('data2 结果')
      },2000)
    }),
  ]).then( result => {
    console.log(result);  //console.log(result[0]); //输出第一个结果
  })
  </script>
  
</body>
</html>
```

