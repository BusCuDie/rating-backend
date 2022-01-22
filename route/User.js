const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.patch('/rating/:id', userController.rating);
router.patch('/edit/:id', userController.editprofile);
router.patch('/ratingmyseft/:id', userController.ratemyseft);
router.get('/:id/comments', userController.comments);
router.get('/:id/youseftcomments', userController.youseftComments);
router.get('/',userController.getAllUsers);
router.post('/signup',userController.signUp);
router.post('/login',userController.login);
module.exports = router;
