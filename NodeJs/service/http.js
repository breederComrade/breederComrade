/* 服务器 */
// 'use strict'
var http = require('http');
var fs = require('fs');
var www = './www'
//创建服务器 
var server = http.createServer();
server.on('request',function(req,res){
    var cache = []
   
    fs.writeFile('./www/info.txt', JSON.stringify(req, function(key, value) {
        if (typeof value === 'object' && value !== null) {
            if (cache.indexOf(value) !== -1) {
                return;
            }
            cache.push(value);
        }
        return value;
    }),function (params) {
        console.log('req保存')
    })   

    let uri = www+req.url;
    if(req.url==='/'){
        uri = www+'/index.html';
    }
    fs.readFile(uri,function (err,data) {
       if(err){
        //    TODO: 404 如何处理
           console.log(err);
         fs.writeFile('./www/405.txt',err+err.date+'\n',{flag:'a'},function (params) {
             console.log('已经创建一个405.html');
             
         })  
           
       } else{
     
        res.end(data)
       }
    })
    // res.end('hello node');
})
server.listen('8333');