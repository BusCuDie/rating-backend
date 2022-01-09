
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const Idea=new Schema({
    name:{type:String ,require:true},
    phone:{type:String,default:'Trống'},
    adress:{type:String,default:'Trống'},
    idea:{type:String,default:'Trống'},
})
module.exports=mongoose.model('Idea',Idea);