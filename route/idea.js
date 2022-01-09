const express = require('express');
const router = express.Router();
const IdeaController = require('../controller/IdeaController');
router.post('/create', IdeaController.create);


module.exports = router;
