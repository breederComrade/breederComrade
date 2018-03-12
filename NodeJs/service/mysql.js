// mysql数据库安装
// mysql数据库链接后调用sql
// 数据库连接池的原理和实现方式
// 通过访问来返回指定的数据

let express = require("express");
let app = express();
let mySql = require("mysql"); //链接mysql

// 创建mysql的连接池
let connection = mySql.createConnection({
  host: "127.0.1",
  user: "root",
  password: "110",
  database: "test"
  // port:3306,
});
connection.connect(function(err) {
  if (err) {
    console.log("无法连接：", err);
  }
});
connection.query("SELECT user_subname FROM user_tables", function(err, res, fields) {
  if (err) {
    console.log("query错误", err);
  } else {
    console.log("res", res,fields);
  }
});
connection.end(function(err) {
  if (err) {
  } else {
    console.log("连接关闭");
  }
});

//
