//创建核心模块
const express=require("express");
//调用模块
const app=express();
//导入mysql 模块
const mysql=require('mysql');
//注册中间件
const bodyParser =require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))
//连接数据库
const conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'heros'
});
 //module.exports=conn;
 //测试接口
app.get('/',(req,res)=>{
    res.send('请求后台api成功')
})
//对外暴露接口
//查询接口
app.get('/getallhero',(req,res)=>{
     const sql = 'select * from heros'
    conn.query(sql,(err,result)=>{
        // 如果读取数据失败，则返回一个失败的结果
        if(err)return res.send({status:500,msg:err.message,data:null});
        // 如果获取数据成功，则直接返回成功的数据结果
        res.send({status:200,msg:'ok',data:result})
    }) 
})
//添加接口
app.post('/addhero',(req,res)=>{
    //拿到用户表单数据
   const hero=req.body;
    const dt=new Date;
    //getFullYear() 方法可返回一个表示年份的 4 位数字。
    // 字符串 padStart(长度, 要填充的字符串)
    const y = dt.getFullYear();
    const m =(dt.getMonth()+1).toString().padStart(2,0);
    const d = dt.getDate().toString().padStart(2,0);
    const hh = dt.getHours().toString().padStart(2,0);
    const mm = dt.getMinutes().toString().padStart(2,0);
    const ss = dt.getSeconds().toString().padStart(2,0);
    hero.ctime=y+'-'+m+'-'+d+' '+hh+':'+mm+':'+ss
    console.log(hero);
    const sql='insert into heros set ?'
    conn.query(sql,hero,(err,result)=>{
        if(err)return res.send({status:500,msg:err.message,data:null});
        res.send({status:200,msg:'ok',data:null});
    })
    /*//测试
    console.log(req.body);
    res.send('ok');
    */
})
//获取英雄ID 
app.get('/gethero/:id',(req,res)=>{
    const id = req.params.id
    const sql='select * from heros where id=?'
    conn.query(sql,id,(err,result)=>{
        if(err)return res.send({status:500,msg:err.message,data:null});
        res.send({status:200,msg:'ok',data:result});
    })
})
//根据Id更新英雄数据
app.post('/updatehero/:id',(req,res)=>{
    const id =req.params.id
    const newinfo=req.body
    const sql='update heros set ? where id=?'
    conn.query(sql,[newinfo,id],(err,result)=>{
      if(err)return res.send({status:500,msg:err.message,data:null});
      res.send({status:200,msg:'ok',data:result})
    })
})
 // 根据Id删除英雄信息
 app.get('/deletehero/:id',(req,res)=>{
     const id = req.params.id
     const sql='update heros set isdel=1 where id=?'
     conn.query(sql,id,(err,result)=>{
         if(err)return res.send({status:500,msg:err.message,data:null});
         res.send({status:200,msg:'ok',data:result})
     })
 })
app.listen(5001,()=>{
    console.log('server running at http://127.0.0.1:5001');
})