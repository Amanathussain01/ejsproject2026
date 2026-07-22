const express = require("express")
const connect = require('./connection')
const student = require('./routes/student')
const app = express()
const path = require('path')
app.set('view engine','ejs')
app.set('views',path.resolve('./views'))
app.use(student)
connect();



app.listen(5002,(err) =>{
    if(err){
        console.log(err)
    }else{
        console.log("server is running on 5002")
    }
})