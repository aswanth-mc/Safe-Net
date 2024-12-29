var express = require('express');
var router = express.Router();

// Render home page
router.get('/', function a (req, res) {
  res.render("organization");

  try {
    const query ='select name,email,phone,location from rescue_club'
  } catch (error) {
    
  }
});

module.exports = router;
