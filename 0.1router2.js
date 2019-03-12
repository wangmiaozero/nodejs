//这是定义了一个路由模块,专门负责创建路由对象,并挂载路由规则
const express = require('express');
//调用express.Router
const router = express.Router();
const path=require("path");
router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/index.html"))
})
router.get("/index.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/index.html"))
})
router.get('/login.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/login.html'))
})
router.get("/css/style.css",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/css/style.css"))
})
module.exports=router;