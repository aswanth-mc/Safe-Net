var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const pool =require('./db')
const cors = require("cors")


var authority = require('./authority');
var admin = require('./admin');
var welcomeRouter =require('./routes/welcome');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



/*app.use('/register', registerRouter);
app.use('/home', homeRouter);
app.use('/authority-login',loginRouter);
app.use('/volunteer',volunteerRouter);
app.use('/shelter',shelterRouter);
app.use('/call_vehicle',call_vehicleRouter);
app.use('/call_volunteer',call_volunteerRouter);
app.use('/requirements',requirementRouter);
app.use('/disasterlist',disasterlistRouter);
app.use('/organization',organizationRouter);
app.use('/',welcomeRouter);*/

app.use(admin);
app.use('/authority',authority);
app.use('/',welcomeRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
