var express = require('express');
var router = express.Router();
var pool =require("../../db")

// Render home page
router.get('/', async function a (req, res) {
  try {
    const query = `SELECT name, location, phone, email FROM organization`;
    const { rows } = await pool.query(query);

    res.render('authority/organization', { data: rows });
  } catch (error) {
    console.error('Error fetching sorted data:', error.message);
    res.status(500).send('An error occurred while fetching data.');
  }
});
module.exports = router;
