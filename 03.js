const express=require("express");
const app=express();
app.set("view engine","ejs");
app.set("views","./ejs_pages");
app.get("/",(req,res)=>{
    res.render("index.ejs",{name:"张三",age:25})
});
app.listen(3002,()=>{
    console.log('====================================');
    console.log("http:127.0.0.1:3002");
    console.log('====================================');
})