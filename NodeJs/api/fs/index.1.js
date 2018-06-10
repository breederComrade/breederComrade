/**
 *   文件系统
 *  @ask: 增删改查文件
 *  @ask: 异步操作文件
 */

let fs = require('fs');


// unlink 删除文件 

/* fs.unlink('./source/test1.txt',(err)=>{
    if(err) {
        console.log('====================================');
        console.log('err',err);
        console.log('====================================');    
        throw err
    };
    console.log('====================================');
    console.log('成功删除test.txt文件');
    console.log('====================================');
}) */

// 文件路径
fs.open('./source/open.txt','r',(err,data)=>{
    if(err) throw err;
    console.log('====================================');
    console.log(fs.Stats(data));
    console.log('====================================');
    fs.close(data,(err)=>{
        if(err) throw err;
    })
});


// 返回文件信息
fs.stat('./source/open.txt',(err,stats)=>{
    if(err) throw err;
    console.log('====================================');
    console.log('stats',stats);
    console.log('====================================');
})

// access  访问
const file = 'package.json';
fs.access(file,fs.constants.R_OK,(err)=>{
      console.log('====================================');
      console.log(`${file} ${err?"不可读":'可读'}`);
      console.log('====================================');
})

// 追加数据到文件
/* fs.appendFile('./source/open.txt','我是追加的文本',(err)=>{
   if(err) throw err;
    console.log('====================================');
    console.log('追加成功');
    console.log('====================================');

}) */

// 拷贝文件
/* fs.copyFile('./copy.js','./source/copy.js',(err)=>{
    if(err) throw err;
    console.log('====================================');
    console.log('拷贝文件');
    console.log('====================================');
}) */


// 读取文件
// 打开文件
fs.open('./source/open.txt', 'r', function(err, fd) {
    if (err) {
        throw err;
    }
    var buffer = new Buffer(255);
    // 读取文件
    fs.read(fd, buffer, 0, 10, 0, function(err, bytesRead, buffer) {
        if (err) {
            throw err;
        }
        // 打印出buffer中存入的数据
        console.log(bytesRead, buffer.slice(0, bytesRead).toString());
 
        // 关闭文件
        fs.close(fd);
    });
});
























