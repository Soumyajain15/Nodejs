//  using express framwork
const http= require("http");
const fs=require("fs");
const url=require("url");
const express=require("express");
const app=express();
app.get('/',(req,res)=>{
    return res.send("hello from home page");
});
app.get('/about',(req,res)=>{
    return res.send("hello from about section" +"hey"+req.query.name+"you are "+req.query.age );
});
app.listen(8000,()=>console.log("Server started"));