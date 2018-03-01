var express = require('express');
var server = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');

server.use(cookieParser());

server.use('/',function (req,res) {

    // =-------------------------
    // res.cookie('user',"fuck",{ path: '/aaa',maxAge:30*24*3600*1000});
    // console.log(res.cookies)
    // res.send('ok')

    // ---------------------------
    // res.send(req.cookies)
    // console.log('cookies:',req.cookies)
    // console.log('signedCookies:',req.signedCookies)
    // res.send('fuck')

    // ---------
      req.secret = 'f22222';
      res.cookie('user','fuck',{signed:true})
      res.send('ok')
    // ---------
})
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json())
server.use('/post',function (req,res) {
     res.send(req.body)
})


server.listen('8001',function (data) {
     console.log('启动服务')
})