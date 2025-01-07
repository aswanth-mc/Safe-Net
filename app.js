var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const pool =require('./db')
const cors = require("cors")



var registerRouter = require('./routes/authority/register');
var homeRouter = require('./routes/authority/home');
var loginRouter =require('./routes/authority/login')
var volunteerRouter =require('./routes/authority/volunteer');
var call_vehicleRouter =require('./routes/authority/call_vehicle');
var call_volunteerRouter =require('./routes/authority/call_volunteer');
var disasterlistRouter =require('./routes/authority/disasterlist');
var organizationRouter =require('./routes/authority/organization');
var requirementRouter =require('./routes/authority/requirement');
var shelterRouter =require('./routes/authority/shelter');


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


app.use('/register', registerRouter);
app.use('/home', homeRouter);
app.use('/login',loginRouter);
app.use('/volunteer',volunteerRouter);
app.use('/shelter',shelterRouter);
app.use('/call_vehicle',call_vehicleRouter);
app.use('/call_volunteer',call_volunteerRouter);
app.use('/requirements',requirementRouter);
app.use('/disasterlist',disasterlistRouter);
app.use('/organization',organizationRouter);




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
