const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dataRouter = require('./data_router');
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/program', dataRouter); 

app.use(express.static('build'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> {
    console.log('listening on port' + PORT)
});
