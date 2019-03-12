const express=require('express');
const app =express();
app.set('view engine','ejs');
app.set('views','ejs_pages');
app.get('/',(req,res)=>{
    res.render('index.ejs',{name:'李四',age:2333,hobby:['吃饭', '阅读', '唱歌']})
})
app.listen(2333,()=>{
    console.log('====================================');
    console.log('server running at http://127.0.0.1:2333');
    console.log('====================================');
})