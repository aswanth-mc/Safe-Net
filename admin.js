var createError = require('http-errors');
var express = require('express');
var admin = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const pool =require('./db')
const cors = require("cors")
const passport = require("./controller/passport")
const session =require("express-session")
const flash =require("connect-flash")



var loginRouter = require('./routes/admin/login');
var homeRouter = require('./routes/admin/home');
var autho_verifyRouter = require('./routes/admin/autho_verify');
var logoutRouter =require('./routes/admin/logout')

admin.use(express.static(path.join(__dirname, 'public')));
admin.use('./uploads', express.static(path.join(__dirname, 'uploads'))); 
admin.use(express.json());
admin.use(express.urlencoded({ extended: false }));

admin.set('views', path.join(__dirname, 'views'));
admin.set('view engine', 'hbs');

// passport initilize
admin.use(
    session({
      secret:"your-secret-key",
      resave:false, 
      saveUninitialized:true,
    })
  );
  admin.use(passport.initialize());
  admin.use(passport.session());
  admin.use(flash());

admin.use('/login', loginRouter);
admin.use('/home', homeRouter);
admin.use('/autho_verify',autho_verifyRouter);
admin.use('/logout',logoutRouter)

module.exports = admin;