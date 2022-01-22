const express = require('express');
const router = express.Router();
const conservationController=require('../controller/conservation');
router.put('/insert',conservationController.insert);
router.get('/getAllMessage/:userOneId/:userSecondId',conservationController.getAllMessage);
module.exports=router;