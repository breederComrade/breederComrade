/*
 *  文件系统
 */
 var fs = require('fs');
/* 
//  异步打开文件 若无就创建 并返回文件标识符===>
 var file = fs.openSync('./fireSystem/base.txt','w');
 console.log('====================================');
 console.log(file);
 console.log('====================================');

 fs.writeSync(file,'123 45',1,function(data){
     console.log('====================================');
     console.log('1212');
     console.log('====================================');
 }) 
 fs.closeSync(file)
 */
//  ---------------------------------------------
//  异步读写文件
//  ---------------------------------------------
fs.open('./base3.txt','w',function(err,data){
    if(err){
        console.log('====================================');
        console.log('出错了：',err);
        console.log('====================================');
        return
    }
    console.log('====================================');
    console.log('读取成功',JSON.stringify(data));
    console.log('====================================');


    /** 
     *  异步写入文件
     * @param {Null} 错误信息
     * @param {Number} written  写入的标识
     * @param {String} string 插入的文本
     */
    fs.write(data,'我是自动加入的类容',function(err,written,string){

        console.log('====================================');
        console.log(err,written,string);
        console.log('====================================');

        fs.close(data,function(error){
            if(!err){
                console.log('====================================');
                console.log('关闭文件');
                console.log('====================================');
            }
        })

    })






})

