var createError = require('http-errors');
var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const pool =require('./db')
const cors = require("cors")
const passport = require("./passport")
const session =require("express-session")
const flash =require("connect-flash")


var loginRouter = require('./routes/admin/login');
var homeRouter = require('./routes/admin/home');
var autho_verifyRouter = require('./routes/admin/autho_verify');


admin.use(express.static(path.join(__dirname, 'public')));
admin.use(express.json());
admin.use(express.urlencoded({ extended: false }));

admin.set('views', path.join(__dirname, 'views'));
admin.set('view engine', 'hbs');

// passport initilize
app.use(
    session({
      secret:"your-secret-key",
      resave:false, 
      saveUninitialized:true,
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());

admin.use('/login', loginRouter);
admin.use('/home', homeRouter);
admin.use('/autho_verify',autho_verifyRouter);


module.exports = admin;