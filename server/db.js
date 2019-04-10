//导入mysql 模块
const mysql=require('mysql');
//连接数据库
const conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'heros'
});
//暴露接口
 module.exports=conn;