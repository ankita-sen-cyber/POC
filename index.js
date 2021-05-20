const express=require('express')
const path= require('path')
const app= express()
const route=require('./routes/route')
const ejs = require('ejs');

app.use(express.static(path.join(__dirname,'public')))
// app.set('view engine', 'ejs');
app.set('view engine', 'ejs');
// app.use('/',(req,res)=>{
//   res.send("<h1>HI</h1>")
// })
app.use(route);

app.listen(3000)