const express=require('express'),
      cors= require('cors'),
      bodyParser=require('body-parser'),
      path=require('path'),
      mongoose=require('mongoose'),
      db=require('./DB/DB');
   const  post=require('./Route/post.router');

   mongoose.Promise=global.Promise;
   mongoose.connect(db.DB,{useNewUrlParser:true}).then(x=>{
       console.log('database is connecting');
   }).catch(error=>{
    console.log('database is not connecting');
   });
   
   const app=express();
   const port=process.env.port || 4000;
   app.use(cors());
   app.use(bodyParser.urlencoded({extended:true}));
   app.use(bodyParser.json());
   app.get('/test',function(err,response){
       response.json('test');
   });

   app.use('/posts',post);
   app.listen(port,function(err,res){
    console.log('service running in port no '+port);
   });