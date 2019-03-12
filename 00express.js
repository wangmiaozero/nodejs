const express =require('express');
const qs =require('querystring');
const app=express();
const bodyParser=require('body-parser');


//中间件
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send("你好,世界")
});
app.get('login',(req,res)=>{
    console.log(req.query,'get请求传递参数');
    res.send(req.query)
})
app.get('/register/:user/:age',(req,res)=>{
    console.log(req.params,'通过GET 请求参数');
    res.send(req.params)
    
})
app.post('/submit/info',(req,res)=>{
    console.log(req.body);
    res.send(req.body);
    
})
app.post('/hello/wrold',(req,res)=>{
    console.log(req.body);
    res.send(res.body);
    
})
app.listen(3333,()=>{
    console.log('server running at http://127.0.0.1:3333');
})