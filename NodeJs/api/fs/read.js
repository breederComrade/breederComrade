/**
 *   读取文件操作
 * 
 */
const fs = require('fs');

// 同步读取文件
// var data = fs.readFileSync('./source/open.txt');
// console.log('====================================');
// console.log(data); /* 出现的是buffer */
// console.log('====================================');

//  flag
// var data = fs.readFileSync('./source/open.txt',{encoding:"utf8",flag:'r'})
// console.log('====================================');
// console.log(data);
// console.log('====================================');

// 异步读取文件
// let data = fs.readFile('./source/open.txt',(err,data)=>{
//      if(err) throw err;
//      console.log('====================================');
//      console.log('异步读取的文件是：',data);/* data返回的是buffer */
//      console.log('====================================');
// })

// console.log('====================================');
// console.log('异步读取时 我应该先被执行');
// console.log('====================================');


// 










