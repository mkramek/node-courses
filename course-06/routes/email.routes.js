const express = require('express');
const router = express.Router();
const emailController = require('../controllers/email.controller');

router.post('/send', emailController.send);

module.exports = router;