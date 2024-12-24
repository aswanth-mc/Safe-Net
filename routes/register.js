const bcrypt =require ('bcryptjs')


var express = require('express');
var router = express.Router();
const pool =require("../db");





/* GET home page. */
router.get('/', function(req, res) {
  res.render('register');
});

router.post('/',async(req,res)=>{
  const { name,mail,no,designation,dep,eid,dis,oadd,pass,cpass }=req.body;

  if (pass !=cpass){
    return res.status(400).send('password do not match');

  }
  const Password = bcrypt.hashSync(pass,10);
  console.log('hased password',Password);
  

  console.log({
    name,
    mail,
    no,
    designation,
    dep,
    eid,
    dis,
    oadd,
    Password
  });

});


module.exports = router;
