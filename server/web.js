const express = require('express');
const app=express();

//ejs
app.set('view engine','ejs')
app.set('views','./views')
//挂载
app.use(express.static('./views'))
app.use('/semantic',express.static('./semantic'))
app.use('/node_modules',express.static("./node_modules"))

app.listen(3001,()=>{
    console.log('Express server runing at http://127.0.0.1:3001');  
})