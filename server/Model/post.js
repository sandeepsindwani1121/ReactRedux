const mongoose=require('mongoose');
const schema=mongoose.schema;

let Post=new mongoose.Schema({
    _id:{
      type:mongoose.Schema.Types.ObjectId,
      auto:true
    },
title:{
    type:String
},
body:{
    type:String
}
},{
  collation:'posts'
});

module.exports=mongoose.model('Post',Post);