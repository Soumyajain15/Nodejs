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
function myHandler(req,res){

    if(req.url==="./favicon.ico") return res.end();
    const log=`${Date.now()}:${req.method} ${req.url}New request recieved\n`;
    const myurl=url.parse(req.url,true);
    fs.appendFile('log.txt',log,(err,data)=>{
         switch(myurl.pathname){
            case "/":
                if(req.method=='GET')res.end('Homepage');
         break;
         case"/about":
         const username =myurl.query.myname;
        res.end(`hi,${username}`);
        break;
        case"/search":
        const search=myurl.query.search_query;
        res.end("here are your result for "+search);
        case "/signup":
        if(req.method==='GET') res.end('This is a signup form');
        else if(req.method==="POST"){
            //DB query
        res.end("success");
        }
        default:
            res.end("404 not found");
         }
    });
/*console.log(req);
res.end("hello from Server");*/

};
const myserver=http.createServer(app);


myserver.listen(8000,()=>console.log("server started!"));
