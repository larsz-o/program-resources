const express = require('express');
const router = express.Router();
const pool = require('./pool');

router.get('/', (req, res) => {
const program = req.query.name; 
console.log(program)
console.log('in get hit')
})

module.exports = router; 