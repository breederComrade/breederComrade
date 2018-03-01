var express = require('express');
var  fs = require('fs');
var server = express();
// server.use('/',function (req,res) {
//     res.send('use用来设置中间件')
    
// })
 server.get('/',function(req,res){
      fs.readFile('./www/index.html',function (err,data) {
          if(err){
              res.send('妈的fuck 错了')
          }else{
            //   res.send(data)
            // res.sendfile('./www/404.html');
            res.send(200,{'ff':1})
          }
      })


    //    res.send('node+express新世界');
 });
 server.get('/login',function(req,res){

     res.send(req.query['user'])

 })
 server.get('/post.html',function(req,res) {
    //  
    res.sendfile('./www/post.html')
 })
 server.post('/post',function (req,res) {
      res.json({"success":1})
 })
 server.get('/post',function (req,res) {
      res.json({"success":2})
 })
 server.get('/fuck',function(req,res){
      res.sendfile('./www/index.html')
 })
var port  = process.env.port || 8001;
server.listen(port,function () {
    console.log(' 启动项目')
    
});