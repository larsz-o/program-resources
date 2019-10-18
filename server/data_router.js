const express = require('express');
const router = express.Router();
const pool = require('./pool');

router.get('/', (req, res) => {
let program = req.query.name; 

const query = `SELECT * FROM "programs" WHERE "url" ILIKE $1`;
pool.query(query, [program]).then((results) => {
    res.send(results.rows);
}).catch((error) => {
    console.log('Error getting program data');
    res.sendStatus(500);
})
})
router.get('/resources', (req, res) => {
    // get all information about courses, faculty, updates, resources, etc. get everything that has a program id on it. 
    let id = req.query.id;
    const query = `SELECT "name", "url", "description", "image_url", "category_id", "program_id", "resources"."id", "category_name", "display_name" FROM "resources" JOIN "categories" ON "resources"."category_id" = "categories"."id" WHERE "program_id" = $1 OR "category_id" = $2 ORDER BY "id" ASC`;
    pool.query(query, [id, 4]).then((results) => {
        res.send(results.rows);
    }).catch((error) => {
        console.log('Error getting resources', error);
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