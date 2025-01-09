
var express = require('express');
var router = express.Router();
const pool =require("../../db");
const path = require("path")
const bcrypt =require ('bcryptjs')
const multer = require("multer");
const fs = require ("fs")


//multer
const storage = multer.diskStorage({
  destination: path.join(__dirname, '../../uploads'), // Ensure correct path
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload =multer({storage});


/* GET home page. */
router.get('/', function(req, res) {
  res.render('authority/register');
});

router.post('/',upload.fields([{name:'idp'},{name:'photo'}]),async(req,res)=>{

  console.log('uploaded files ',req.files);
  console.log('request body ',req.body);
  if (!req.files['idp'] || !req.files['photo']) {
    return res.status(400).send('File upload failed. Please check your input.');
  }
  const pass = req.body.pass;
  const cpass = req.body.cpass;
  const { name,mail,no, designation, dep, dis, eid, oadd, password_hash,idp,photo }=req.body
  if (pass !=cpass){
    return res.status(400).send('password do not match');

  }
  try {
    const password_hash = bcrypt.hashSync(pass, 10);
    const idProofPath =req.files['idp']? req.files['idp'][0].path:null;
    const photoPath =req.files['photo']? req.files['photo'][0].path:null;
    const query = `
      INSERT INTO authority (name, email, phone_number, designation, department, district, employee_id, office_address , password_hash,id_proof,photo)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
      RETURNING id;
    `;
    const values = [name, mail, no, designation, dep, dis, eid, oadd, password_hash,idProofPath,photoPath];

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
