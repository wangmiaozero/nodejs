const express = require('express');
const app = express();
//1.导入路由对象
const router=require('./0.1router2.js');
//2.调用app.use 方法 安装路由器模块
app.use(router);
app.listen(2333,()=>{
    console.log('====================================');
    console.log('server runing at http://127.0.0.1:2333');
    console.log('====================================');
})
