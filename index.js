const express=require('express');
const fs=require('fs');
const path=require('path');
const app=express();

app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));

app.get('/login',function(res,req){
    res.redirect('/login.html');
    if(username=='abc'){

    }

});

app.get('/signup',function(res,req){
    res.redirect('/signup.html');
});

app.post('/logreq',function(res,req){

});

app.post('/signupreq',function(res,req){

});

app.listen(3000, function(){
	
	console.log("Server started at port 3000");
	
});