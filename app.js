var http = require("http");
const express=require('express');
const app=express();
//app.use()
app.get('/',(req,res)=>{
//res.send("Hello world!");
res.sendFile(__dirname+'/public/home.html');
});
/*app.listen(3000,()=>{
  console.log("server is running on port 3000");
});*/

app.get('/register.html',(req,res)=>{
//res.send("Hello world!");
res.sendFile(__dirname+'/public/register.html');
});


http.createServer(app).listen(3000,function(){
    console.log("Listening at port 3000");
})