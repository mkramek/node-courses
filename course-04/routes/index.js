const express = require('express');
const router = express.Router();

require("dotenv").config();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: process.env.SECRET_TEXT });
});

module.exports = router;
