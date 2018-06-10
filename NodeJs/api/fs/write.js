/**
 *   写入文件
 *  
 */


const fs = require('fs');

// 异步入
fs.writeFile('./source/bufferwrite.txt','我是写入',{encodeing:"utf8",flag:"w"},(e,d)=>{
    if(e) throw e;
    console.log('====================================');
    console.log('写入成功');
    console.log('====================================');
})


// 同步写入

