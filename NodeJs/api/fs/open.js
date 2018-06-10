/**
 *  打开文件
 */

const  fs = require('fs');

// let buffer = new Buffer(12);

// fs.open('./source/open.txt','r',(err,fd)=>{
//     //     fd   buffer  offset:buffer偏移位置  length:读几个字节  position：从文件的第几个字节开始

//    fs.read(fd,buffer,0,3,3,function(err,bytesRead,bufferRead){
//        console.log('====================================');
//        console.log('读取字节数量',bytesRead,buffer.toString());
//        console.log('====================================');
//        fs.read(fd,buffer,3,3,3,(e,b,bu)=>{
//           console.log('n读取字节数量',bytesRead);
//           console.log(bu.toString());
          
//        })
  
//     })
// })

// write写入
let buf =  Buffer.from("我是牛逼")//要写入文件的buffer
fs.open('./source/bufferwrite.txt','w',function(e,fd){
    // 执行写入
    // offset  //buf中第几个开始写入
    // length   buf中写入的长度
    //  postion  从文件中的第几个位置开始写入
    //  从buf中的第一个位置写入6个==我是 写到文件中第一个位置
    fs.write(fd,buf,0,6,3,function(e,b){
        console.log('====================================');
        console.log(b);
        console.log('====================================');
    })
})













