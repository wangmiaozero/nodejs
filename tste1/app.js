const express= require("express");
const app=express();
const fs=require("fs")
const path=require("path")
const bodyParser=require("body-parser")
// 注册解析表单数据的中间件
app.use(bodyParser.urlencoded({extended: false }))
// 导入 session 中间件
const session = require("express-session")
app.use(session({
    secret:"加密",
    resave:false,
    saveUninitialized:false

})
)

//设置EJS 
app.set("view engine","ejs");
app.set("views","views")
//读取路由
fs.readdir(path.join(__dirname,"./router"),(err,filename)=>{
    filename.forEach(flie=>{
        const router=require(path.join(__dirname,"./router",flie))
        app.use(router)
    })
})


// 托管静态资源
app.use('/common',express.static('./common'))


app.get('/',(req,res)=>{
    res.render('./index.ejs',{name:888888})
})

app.listen(2333,()=>{
    console.log('====================================');
    console.log("server running at http://127.0.0.1:2333");
    console.log('====================================');
})