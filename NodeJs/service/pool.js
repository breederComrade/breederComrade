// 连接池文件

let mySql = require('mysql');
let pool = mySql.createPool({
    host: "127.0.1",
    user: "root",
    password: "110",
    database: "test"
});

var query=function(sql,callback){
    pool.getConnection(function(err,conn){
        if(err){
            callback(err,null,null);
        }else{
            conn.query(sql,function(qerr,vals,fields){
                //释放连接
                conn.release();
                //事件驱动回调
                callback(qerr,vals,fields);
            });
        }
    });
};

module.exports=query;