const express= require('express');

const app = express(); 

 app.use (date=(res,req,next)=>{
     let requestAt = new Date()
     console.log(requestAt)
     next()
 })


app.get('/home',(req,res)=>{
    res.sendFile(__dirname + '/public/home.html');
});

app.get('/contact',(req,res)=>{
    res.sendFile(__dirname + '/public/contact.html');
});

app.get('/service',(req,res)=>{
    res.sendFile(__dirname + '/public/service.html');
});

app.listen(5000, (err)=>{
        if (err) console.log("server is not running") 
        else console.log("server is running in port 5000...")
   
});
