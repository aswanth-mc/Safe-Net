var express = require('express');
var router = express.Router();
var pool = require('../../db');
var bcrypt = require('bcrypt');



router.get('/', function (req, res) {
    res.send('wellcome');
  });

router.post('/',async(req,res)=>{
    const{name,email,number,dis,state,dob,blood_group,pass}=req.body;
    console.log(name,email,number,dis,state,dob,blood_group,pass)
    

    try {
        const password_hash =bcrypt.hashSync(pass,10);
        const query='insert into users(name,email,phone,district,state,dob,blood_group,password_hash) values ($1,$2,$3,$4,$5,$6,$7,$8) returning id;';
        const values = [name, email,number,dis,state,dob,blood_group,password_hash];

    console.log('Executing query:', query);
    console.log('With values:', values);

    const result = await pool.query(query, values);

    console.log('Inserted ID:', result.rows[0].id);
    res.send('User registered successfully!');
    } catch (error) {
        console.error('Error saving to database:', error.message);
        res.status(500).send('An error occurred while saving data.');
        
    }
})
module.exports = router;