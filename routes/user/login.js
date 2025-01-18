var express = require('express');
var router = express.Router();
const pool = require('../../db');

router.get('/', function (req, res) {
  res.send('login');
});

// Handle login
router.post('/', async (req, res) => {
  try {
    const { email, pass } = req.body;
    

    const query = 'SELECT * FROM users WHERE email = $1 AND password_hash = $2';
    const values = [email, pass];

    const result = await pool.query(query, values);

    if (result.rows.length > 0) {
      console.log("Login successful!");
      res.send("home");
      console.log("you are a customer") 
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
