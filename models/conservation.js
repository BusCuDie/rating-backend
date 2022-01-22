const mongoose =require('mongoose');
const Schema = mongoose.Schema;
const Conservation = new Schema({
    usersId:[],
    message :[]
});
module.exports =mongoose.model('Conservation',Conservation);