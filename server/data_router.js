const express = require('express');
const router = express.Router();
const pool = require('./pool');

router.get('/', (req, res) => {
const program = req.query.name; 
console.log(program)
console.log('in get hit')
})
router.get('/names', (req, res) => {
    const query = `SELECT * FROM "programs";`;
    pool.query(query).then((results) => {
        res.send(results.rows);
    }).catch((error) => {
        console.log('Error getting program names', error);
    })
})
router.get('/categories', (req, res) => {
    const query = `SELECT * FROM "categories";`;
    pool.query(query).then((results) => {
        res.send(results.rows);
    }).catch((error) => {
        console.log('Error getting categories', error);
    })
})
module.exports = router; 