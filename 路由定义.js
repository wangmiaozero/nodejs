const express=require("express");
const app=express();
const router=require('./0.1router.js');
app.use(router);
app.listen(3300,()=>{
    console.log('====================================');
    console.log("server running at http://127.0.0.1:3300");
    console.log('====================================');
})