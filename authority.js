const express = require ('express');
const path = require ('path');

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


const authority=express();

authority.use(express.static(path.join(__dirname, 'public')));
authority.use(express.json());
authority.use(express.urlencoded({ extended: false }));

authority.set('views', path.join(__dirname, 'views'));
authority.set('view engine', 'hbs');

authority.use('/register', registerRouter);
authority.use('/home', homeRouter);
authority.use('/authority-login',loginRouter);
authority.use('/volunteer',volunteerRouter);
authority.use('/shelter',shelterRouter);
authority.use('/call_vehicle',call_vehicleRouter);
authority.use('/call_volunteer',call_volunteerRouter);
authority.use('/requirements',requirementRouter);
authority.use('/disasterlist',disasterlistRouter);
authority.use('/organization',organizationRouter);


module.exports = authority;