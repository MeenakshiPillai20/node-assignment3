const express = require("express");
const app = express();


const firstMddlwware = (req,res,next) => {
    console.log("Here we are executing first  middleware function")
    next();
}
const secondMddlwware = (req,res,next) => {
    console.log("Here we are executing second middleware function")
    next();
}

app.use(firstMddlwware)


app.get('/home', secondMddlwware, function(req,res){
    console.log("Hitting Home page")
    res.send({"message" : " Home page"})
})
app.get('/courses', function(req,res){
    console.log("Hitting Courses page")
    res.send({"message" : " Courses page"})
})
app.get('/contact', secondMddlwware, function(req,res){
    console.log("Hitting  Contact page")
    res.send({"message" : " Contact page"})
})
app.get('/about', function(req,res){
    console.log("Hitting About page")
    res.send({"message" : " About page"})
})

app.listen(5000,function(){
    console.log("Server is started at port 5000")
});