var express = require('express');
var router = express.Router();

// Render home page
router.get('/', function (req, res, next) {
  res.render("authority/home");
});

module.exports = router;
