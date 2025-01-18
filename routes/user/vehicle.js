var express = require('express');
var router = express.Router();
var pool = require('../../db');

router.get('/', function (req, res) {
    res.send('vehicle');
  });

router.post('/',async(req,res)=>{
    const{owner_name ,vehicle_type,model,vehicle_no,phone,email,district,state}=req.body;
    console.log(owner_name ,vehicle_type,model,vehicle_no,phone,email,district,state)
    

    try {
        const query='insert into vehicle(owner_name ,vehicle_type,model,vehicle_no,phone,email,district,state) values ($1,$2,$3,$4,$5,$6,$7,$8) returning id;';
        const values = [owner_name ,vehicle_type,model,vehicle_no,phone,email,district,state];

    console.log('Executing query:', query);
    console.log('With values:', values);

    const result = await pool.query(query, values);

    console.log('Inserted ID:', result.rows[0].id);
    res.send('vehicle registered successfully!');
    } catch (error) {
        console.error('Error saving to database:', error.message);
        res.status(500).send('An error occurred while saving data.');
        
    }
})

module.exports = router;