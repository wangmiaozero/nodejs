const express=require("express");
const router=express.Router();

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
//router.use(express.static("./views"));
module.exports=router;