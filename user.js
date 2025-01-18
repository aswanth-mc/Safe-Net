const express = require ('express');
const path = require ('path');


var registerRouter =require('./routes/user/register')
var loginRouter = require('./routes/user/login')
var organizationRouter =require('./routes/user/organization')
var vehicleRouter =require('./routes/user/vehicle')

const user=express();

user.use(express.static(path.join(__dirname, 'public')));
user.use('./uploads', express.static(path.join(__dirname, 'uploads'))); 
user.set('views', path.join(__dirname, 'views'));
user.set('view engine', 'hbs');
user.use(express.json());
user.use(express.urlencoded({ extended: false }));

user.use('/register',registerRouter);
user.use('/login',loginRouter)
user.use('/organization',organizationRouter);
user.use('/vehicle',vehicleRouter);


user.use((req, res, next) => {
    res.status(404).send('Not Found');
  });
  
  

module.exports = user;