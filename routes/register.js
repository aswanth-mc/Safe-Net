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
  try {
    const hashedPassword = bcrypt.hashSync(pass, 10);
    const query = `
      INSERT INTO autho_test2 (name, email, phone, designation, department, district, empid, off_add, password)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING id;
    `;
    const values = [name, mail, no, designation, dep, dis, eid, oadd, hashedPassword];

    console.log('Executing query:', query);
    console.log('With values:', values);

    const result = await pool.query(query, values);

    console.log('Inserted ID:', result.rows[0].id);
    res.send('User registered successfully!');
  } catch (error) {
    console.error('Error saving to database:', error.message);
    res.status(500).send('An error occurred while saving data.');
  }
});


module.exports = router;
