//创建核心模块
const express=require("express");
//调用模块
const app=express();
//导入mysql 模块
// const mysql=require('mysql');
//注册中间件
const bodyParser =require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))
// 在 API 服务器端，启用 CORS 跨域资源共享
const cors =require('cors')
app.use(cors());
 //导入路由器
 const router=require('./router.js')
 //注册路由模块
 app.use(router)
 //启动路由器
app.listen(5001,()=>{
    console.log('server running at http://127.0.0.1:5001');
})