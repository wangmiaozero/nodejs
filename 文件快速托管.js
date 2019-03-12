const express=require('express');
const app=express();
//app.use('/',express.static('./views'));
app.use(express.static('./views'))
app.listen(4000,()=>{
    console.log('====================================');
    console.log("server running at http://127.0.0.1:4000");
    console.log('====================================');
})
