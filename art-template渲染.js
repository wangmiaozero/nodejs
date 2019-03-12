const express = require('express');
const app = express();
//使用app.engine()方法自定义模板
app.engine('html',require('express-art-template'));
app.set('view engine','html');
app.set('views','./art_pages');
app.get('/',(req,res)=>{
    res.render('index.html',{name:'李四',age:2333,hobby:['吃饭', '阅读', '唱歌']})
});
app.listen(4000,()=>{
    console.log('====================================');
    console.log('server runing at http://127.0.0.1:4000');
    console.log('====================================');
})

