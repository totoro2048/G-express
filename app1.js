var express = require('express')
var app = express()
var path = require('path')
require('dotenv').config()

var indexrouter = require('./router/index.js')
var userrouter = require('./router/user.js')

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.set('html',require('ejs').renderFile)
app.ues(express.json())
app.use(express.static(path.join(__dirname,'pubilc')))

app.use('/',indexrouter)
app.use('/people',userrouter)


var port = process.env.port || 3000;
app.listen(port,()=>{
    console.log(`server is start : http://localhost:${port}`)
})

