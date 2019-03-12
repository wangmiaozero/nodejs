//创建核心模块
const express=require('express');
//调用模块
const app=express();
//创建mysql模块
const mysql=require("mysql");
//注册中间件
const bodyParser =require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))
//建立mysql连接
const conn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"heros"
})

//测试接口
app.get('/',(req,res)=>{
    res.send("测试成功")
})
//查询用户名单
//获取所有英雄列表
app.get('/getallhero',(req,res)=>{
    //sql语句
    const sql='select * from heros'
    conn.query(sql,(err,result)=>{
        if(err) return res.send({status:500,msg:err.message,data:null});
        res.send({status:200,msg:'ok',data:result});
    })
});
//插入英雄
app.post("/addhero",(req,res)=>{
    //sql语句
    const sql='insert into heros set ?'
    //拿到用户数据
    const herosData=req.body
    const hd=new Date
    const y =hd.getFullYear();
    const m =((hd.getMonth()+1).toString().padStart(2,0))
    const d =hd.getDate().toString().padStart(2,0)
    const hh =hd.getHours().toString().padStart(2,0)
    const mm =hd.getMinutes().toString().padStart(2,0)
    const ss =hd.getSeconds().toString().padStart(2,0)
    herosData.ctime=y+'-'+m+'-'+d+' '+hh+":"+mm+":"+ss
    conn.query(sql,herosData,(err,result)=>{
    if(err) return res.send({status:500,msg:err.message,data:null})
    res.send({status:200,msg:'ok',data:result})
    })
})

//启动服务器












app.listen(2333,()=>{
    console.log('====================================');
    console.log("server running at http://127.0.0.1:2333");
    console.log('====================================');
})