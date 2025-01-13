var express = require('express');
var router = express.Router();
const pool =require("../../db");


router.get('/', async function(req, res) {
    try {
      const query = `SELECT name, location, phone, email FROM volunteer`;
      const { rows } = await pool.query(query);
  
      res.render('authority/volunteer', { data: rows });
    } catch (error) {
      console.error('Error fetching sorted data:', error.message);
      res.status(500).send('An error occurred while fetching data.');
    }
  });



  module.exports = router;