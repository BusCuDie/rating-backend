const Idea = require("../models/Idea");
const mongoose = require("mongoose");
const  create =(req, res ) => {
  var idea=new Idea({
    name:req.body.name,
    phone:req.body.phone,
    address:req.body.address,
    idea:req.body.idea
  })
  idea.save().then(()=>res.send('Thành công'));
  };
module.exports = { create};
