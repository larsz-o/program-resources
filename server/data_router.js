const express = require('express');
const router = express.Router();
const pool = require('./pool');

router.get('/', (req, res) => {
let program = req.query.name; 
// get all information about courses, faculty, updates, resources, etc. get everything that has a program id on it. 
const query = `SELECT * FROM "programs" WHERE "url" ILIKE $1`;
pool.query(query, [program]).then((results) => {
    console.log(results.rows);
    res.send(results.rows);
}).catch((error) => {
    console.log('Error getting program data');
    res.sendStatus(500);
})
})
router.get('/names', (req, res) => {
    const query = `SELECT * FROM "programs" ORDER BY "program_name" ASC;`;
    pool.query(query).then((results) => {
        res.send(results.rows);
    }).catch((error) => {
        console.log('Error getting program names', error);
        res.sendStatus(500);
    })
})
router.get('/categories', (req, res) => {
    const query = `SELECT * FROM "categories" ORDER BY "category_name" ASC;`;
    pool.query(query).then((results) => {
        res.send(results.rows);
    }).catch((error) => {
        console.log('Error getting categories', error);
        res.sendStatus(500);
    })
})

module.exports = router; 