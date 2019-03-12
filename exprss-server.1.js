const express = require("express");
const app =express();
const path=require("path");
app.get("/",(req,res)=>{
    //res.send({name:"张三"})
   // res.send(Buffer(123))
   // res.end("hello wrold 你好世界")
    //res.sendFile(path.join(__dirname,"./login.html"))  //这是绝对路径
  // res.sendFile("./login.html",{root:__dirname})
});
app.listen(3001,()=>{
    console.log('====================================');
    console.log("http:127.0.0.1:3001");
    console.log('====================================');
})