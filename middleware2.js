const express = require('express');
const {logger,date,method} = require('./logger');
const app = express();

app.get('/get',logger,method,date,(req,res)=>{
    res.send("from get");
})

app.post('/post',logger,method,date,(req,res)=>{
    res.send("from post");
})

app.put('/update',logger,method,date,(req,res)=>{
    res.send("from put");
})

app.delete('/delete',logger,method,date,(req,res)=>{
    res.send("from delete");
})

app.listen((3000),()=>{
    console.log("server running");
})