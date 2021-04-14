// 1 分别暴露
// export let name = '变量-模块化文件'
// export function fun(){
//   console.log('函数-模块化文件');
// }

// let name2 = '文件2'
// function fun2(){
//   console.log('export');
// }
// // 2 统一暴露
// export {name2, fun2}

// 3 默认暴露
export default{
  name3:'默认暴露:default export',
  fun3:function(){
    console.log('默认暴露:function');
  },
  fun4:function(){
    console.log('动态import');
  }
}