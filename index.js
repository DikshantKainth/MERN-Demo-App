const express=require('express');
const fs=require('fs');
const path=require('path');
const app=express();

var MongoClient= require('mongodb').MongoClient;
var url='mongodb://localhost:27017'

app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));

app.get('/login',function(req,res){
    res.redirect('/login.html');
});

app.get('/signup',function(req,res){
    res.redirect('/signup.html');
});

app.post('/logreq',function(req,res){

    MongoClient.connect(url,function(err,client){

        var data={
            uname:req.body.username,
            pass:req.body.password
        };
        console.log(data);
    
            db=client.db('MyApp1');
            db.collection('users').findOne(data,function(err,result){
                if(err){
                    throw err;
                } 
                console.log(err);
                console.log(result);
            
                // if(result!=null){
                //     console.log("User found");
                // }
                // else{
                //     console.log(result);
                // }
                client.close();
        });
    });
    res.redirect('/home.html');
});

app.post('/signupreq',function(req,res){
   


    MongoClient.connect(url,function(err,client){

        var data={
            fname:req.body.fname,
            lname:req.body.lname,
            username:req.body.username,
            psw:req.body.password
        };
    
            db=client.db('MyApp1');
            db.collection('users').insertOne(data,function(err,result){
                if(err){
                    throw err;
                } 
            
                
                client.close();
        });
    });
    res.redirect('/login.html');
});
app.listen(3000, function(){
	
	console.log("Server started at port 3000");
	
});