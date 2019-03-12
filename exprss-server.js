const express = require("express");
const app =express();
const path=require("path");
app.get("/",(req,res)=>{
    //res.end("hello wrold 你好世界")
    //res.sendFile(path.join(__dirname,"./login.html"))  //这是绝对路径
   // res.sendFile("./login.html",{root:__dirname})
});
app.listen(3000,()=>{
    console.log('====================================');
    console.log("http:127.0.0.1:3000");
    console.log('====================================');
})