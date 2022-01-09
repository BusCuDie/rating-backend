const express = require('express');
const router = express.Router();
const faqController = require('../controller/faqController');
router.post('/create', faqController.create);
router.patch('/:id/answer', faqController.answer);
router.get('/', faqController.getAll);


module.exports = router;
