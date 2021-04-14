var MongoClient= require('mongodb').MongoClient;
var url='mongodb://localhost:27017'

MongoClient.connect(url,function(err,client){

    var data={
        userid:104,
        username:'abc'
    };

        db=client.db('MyApp1');
        db.collection('users').insertOne(data,function(err,res){
            if(err){
                throw err;
            } 
        
            console.log('data inserted');
            client.close();
    });
});
