const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const jwt = require("jsonwebtoken");
require("dotenv").config();
const auth=async(req,res,next)=>{
    const {authorization}=req.headers;
    const token=authorization.replace('Bearer ','');
    const data = jwt.verify(token, process.env.JWT_KEY)
    if(data){
      next()
    }
  }
router.patch('/rating/:id', userController.rating);
router.patch('/edit/:id', userController.editprofile);
router.patch('/ratingmyseft/:id', userController.ratemyseft);
router.get('/:id/comments', userController.comments);
router.get('/:id/youseftcomments', userController.youseftComments);
router.get('/',userController.getAllUsers);
router.post('/signup',userController.signUp);
router.post('/login',userController.login);
module.exports = router;
