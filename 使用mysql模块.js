//导入express 模块
const express =require("express");
//创建express 的服务器实例
const app = express();
const mysql=require("mysql");
const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"mysql_001"
});
const sqlStr1='select * from uname'
conn.query(sqlStr1,(err,result)=>{
    if(err) return console.log("数据获取失败");
    console.log(result);   
})
//新增
// const user={uname:"小红",age:18,gender:"女"};
// const sqlStr2 ='insert into uname set ?'
// conn.query(sqlStr2,user,(err,result)=>{
//     if(err)return console.log('数据插入错误');
//     console.log(result);
// })
//修改
const user1={id:2,uname:'小红',age:25}
const sqlStr3='update uname set ? where id=?'
conn.query(sqlStr3,[user1,user1.id],(err, result) => {
       if (err) return console.log('修改数据失败！' + err.message)
       console.log(result)
     })
//删除
const sqlStr4 = 'delete from uname where id=?';
conn.query(sqlStr4,2,(err,result)=>{
    if(err) return console.log('删除失败');
    console.log(result);
   
})
app.listen(3003,function(){
    console.log('server running at http://127.0.0.1:3003');
    
})