var express = require('express');
var router = express.Router();
const pool = require('../../db');

// Render login page
router.get('/', function (req, res, next) {
  res.render('/login');
});

// Handle login
router.post('/', async (req, res) => {
  try {
    const { email, pass } = req.body;
    

    const query = 'SELECT * FROM autho WHERE mail = $1 AND password = $2';
    const values = [email, pass];

    const result = await pool.query(query, values);

    if (result.rows.length > 0) {
      console.log("Login successful!");
      res.redirect("/home"); 
    } else {
      console.log("Invalid credentials.");
      res.status(401).send("Invalid username or password. Please try again.");
    }
  } catch (error) {
    console.error("Error during login:", error.message);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
