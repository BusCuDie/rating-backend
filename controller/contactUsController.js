const ContactUs = require("../models/contactUs");
const mongoose = require("mongoose");
const  create =(req, res,next ) => {
  var contactUs=new ContactUs({
    title:req.body.title,
    content:req.body.content,
    name:req.body.name,
    phone:req.body.phone,
  })
  contactUs.save().then(()=>res.send('Thành công'));
  };
const getAll =(req, res,next ) => {
  ContactUs.find({}).then(data=>res.json(data)).catch(()=>res.json(null))
  };
module.exports = { create,getAll};
