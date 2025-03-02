const fs=require('fs');
// synchorous call blocking request 
/*
fs.writeFileSync('./test.txt',"hello node 123");
//asynchronous call non blocking request
fs.writeFile('./test.txt',"hello node ", (err) => {});
*/

// reading  file synchorously from another file 
const result =fs.readFileSync("./contacts.txt","utf-8");
console.log(result);

// reading a file asynchorously from a file 
const result1=fs.readFile('./contacts.txt',"utf-8",(err,result)=>{
    if(err){
        console.log("error",err);
    }else{
        console.log(result1);
    } 
});

fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString());
fs.appendFileSync("./test.txt",`${Date.now()} hey  there\n`);