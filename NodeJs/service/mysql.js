// mysql数据库安装
// mysql数据库链接后调用sql
// 数据库连接池的原理和实现方式



let express = require('express');
let app = express();
let mySql = require('mysql');//链接mysql

// 创建mysql的连接池
let connection = mySql.createConnection({
    host:'locathost',
    user:"root",
    password:"123456"
})

connection.connect();

// 