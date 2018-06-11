// 标准输入
const fs = require('fs');



// process.stdin.setEncoding('utf8');


// process.stdin.on('readable', () => {
//   const chunk = process.stdin.read();
//   if (chunk !== null) {
//      console.log('====================================');
//      console.log(chunk.slice(0,-1));
//      console.log('====================================');
//     if(chunk.slice(0,-1) == 'end'){
       
//             process.stdin.emit('end')
//     return 
//     }

//     process.stdout.write(`data: ${chunk}`);
//   }

// });

// process.stdin.on('end', () => {
//   process.stdout.write('end');
// });





// readsteam 读取流
// let rs  = fs.createReadStream('./text.txt',{
//     start:0,end:10,encoding:"utf8",highWaterMark:3});

// rs.on('data',d=>{
//     console.log('data',d);
// })
// rs.on('end',()=>{
//     console.log('====================================');
//     console.log('读取完成');
//     console.log('====================================');
// })


// readable
// let rs = fs.createReadStream('./text.txt'.{
//     start:0,end:5,encoding:"utf8",highWaterMark:3
// });


// rs.on('readable',()=>{
//    console.log('====================================');
//    console.log('当缓存区有数据的时候触发');
//    console.log('====================================');


// })

// rs.on('end',function(){
//     console.log('====================================');
//     console.log('读取为空的话就触发');
//     console.log('====================================');
// })



// writeStream  可写流
//  创建可读流
// const rs = fs.createReadStream('./text.txt');
// //  创建可写流
// const ws = fs.createWriteStream('./write.txt',{
//     autoClose:true
// });
// rs.on('data',(data)=>{
//      ws.write(data);
// });
// rs.on('end',()=>{
//     ws.end('写入完成',function (params) {
//         console.log('====================================');
//         console.log('写入完毕','共写入%d字节',ws.bytesWritten);
//         console.log('====================================');
//     })
// })

// ws.on('open',()=>{
//     console.log('写入文件已经打开')
// })

// ws.on('close',()=>{
//     console.log('====================================');
//     console.log('写入文件关闭');
//     console.log('====================================');
// })



//  大文件写入
//  创建可读流
// const rs = fs.createReadStream('./text.txt',{highWaterMark:1});
// // //  创建可写流
// const ws = fs.createWriteStream('./write.txt',{highWaterMark:2});


// rs.on('data',function(data){
//     let flag = ws.write(data);
//     if(!flag){
      
//     }
// })
// // 缓存区写入完成
// ws.on('drain',function(){
//  console.log('====================================');
//  console.log('drain');
//  console.log('====================================');
// })   





































