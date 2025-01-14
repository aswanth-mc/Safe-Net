var express = require('express');
var router = express.Router();
const pool =require('../../db');
const passport = require('passport');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('admin/login');
});

router.post("/", passport.authenticate("local", {
  successRedirect: '/admin/home',
  failureRedirect: '/login',
  failureFlash: true
}));





module.exports = router;
