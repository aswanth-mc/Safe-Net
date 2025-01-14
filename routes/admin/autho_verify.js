var express = require('express');
var router = express.Router();
const pool =require('../../db');
const isAuthenticated = require('../../authentication');

router.get('/',isAuthenticated, async function(req, res) {
  try {
    const query = `SELECT id,name, email, phone_number, office_address, designation, department, employee_id, id_proof, photo FROM authority`;
    const { rows } = await pool.query(query);

    res.render('admin/autho_verify', { data: rows });
  } catch (error) {
    console.error('Error fetching sorted data:', error.message);
    res.status(500).send('An error occurred while fetching data.');
  }
  });

  router.post('/',async(req,res)=>{
    const{id}=req.body;
    try {
      await pool.query('update authority set verified=true where id=$1',[id]);
      res.status(200).send({message:'approval successful'});
    } catch (error) {
      console.error('Error updating verification status:', error);
        res.status(500).send({ message: 'Error updating verification status.' });
    }
  })
  
  module.exports = router;