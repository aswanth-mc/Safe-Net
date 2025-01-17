var express = require('express');
var router = express.Router();
const pool =require('../../db');
const passport = require('passport');


router.get('/', (req, res, next) => {
    req.logout((err) => { 
      if (err) {
        return next(err);
      }
      res.redirect('/admin/login');
    });
    });
module.exports = router;