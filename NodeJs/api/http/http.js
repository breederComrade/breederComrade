/**
 *   http服务器 
 */

const http = require('http');
const app = http.createServer((req,res)=>{
   res.end('2222')
});

app.listen(3000)

/* 
// 新建server服务器  
var http = require('http');  
  
var hostname = '127.0.0.1';  
var port = 3000;  
  
var server = http.createServer(function(req, res) {  

   res.end('fuck')


    // res.writeHead(200, {'Content-Type': 'text/html'});    
    // // res.writeHead(200, {'Content-Type': 'text/plain'});    
    // res.statusCode = 200;  
    // res.setHeader('Content-Type', 'text/html');  
    // // res.getHeader('content-type')  
  
    // res.write('<head><meta charset="utf-8"/></head>');  
    // // res.charset = 'utf-8';   不行  
  
    // var htmlDiv = '<div style="width: 200px;height: 200px;background-color: #f0f;">div</div>';  
    // res.write('<b>亲爱的，你慢慢飞，小心前面带刺的玫瑰...</b>');  
    // res.write(htmlDiv);  
  
    // // 有参数=先调用 res.write(data, encoding) 之后再调用 res.end().  
    // res.end('<h1>Hello world!</h1>');  
});  
  
server.listen(port, function() {  
    // hostname是const类型时，可以用以下写法  
    //console.log('Server running at http://${hostname}:${port}/');  
  
    // console.log('Server running at http://%s:%s', hostname, port);  
    // console.log('Server running at http://' + hostname + ':' + port + '/');  
});   */