const express = require("express");
const app =express();
const path=require("path");
app.use(express.static("./views"))
app.listen(3001,()=>{
    console.log('====================================');
    console.log("http:127.0.0.1:3001");
    console.log('====================================');
})