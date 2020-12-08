const express = require("express");
const bodyParser = require("body-parser");

const app =express();
app.use(express.static("public"));


app.get("/",function(req,res){
    res.sendFile(__dirname+"/landing-page.html")
})

app.get("/Login",function(req,res){
    res.sendFile(__dirname+"/Login.html")
})

app.get("/Hotels",function(req,res){
    res.sendFile(__dirname+"/Hotels.html")
})
app.listen(5000, function(){
    console.log("Success at 5000");
})

