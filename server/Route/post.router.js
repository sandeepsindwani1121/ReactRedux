const express=require('express');
const postRouter=express.Router();
let Post=require('../Model/post');
const mongoose=require('mongoose');

postRouter.route('/').get(function(req,response){

    Post.find(function(err,post){
       if(err){
        response.status(400).json(err);
       }
       else{
       response.status(200).json(Object.values(post));
       }
   })

});

postRouter.route('/add').post(function(req,res){
  
   const post=new Post({
       _id:mongoose.Types.ObjectId(),
       title:req.body.title,
       body:req.body.body
   });
   post.save().then(x=>{
       res.status(200).json('data added successfully');
   }).catch(error=>{
       res.status(400).json(error);
   })


});


postRouter.route('/update/:_id').post(function(req,res){
  
    Post.findById({_id:req.params._id},function(error,post){

      if(error)
      res.json('error coming');
      else{
          post._id=req.params._id;
          post.title=req.body.title,
          post.body=req.body.body;
        post.save().then(x=>{
            res.status(200).json('data has been update successfully');
        }).catch(error=>{
            res.status(400).json(error);
        })
      }

    })

   
 
 
 });


module.exports=postRouter;