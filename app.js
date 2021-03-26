const express = require('express')
const bodyParser = require('body-parser')
const student=require('./router/student.router')
const mongoose=require('mongoose')
var app=express()

mongoose.connect('/mongodb://localhost/studentDB',{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('CONNECTED TO DATABASE')
})
.catch(err=>{
    console.log('CANNOT CONNECT TO DATABASE', err)
    process.exit()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/students',student);

app.listen(3000,()=>{
    console.log('SERVER IS UP ON PORT 3000')
})
