var express = require('express');
var usersController = require('./controllers/usersController');

var app = express();

require ('./configs/dataBase')

var cors = require('cors');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true })).use(bodyParser.json());
app.use(cors());

app.use('/users' , usersController);

app.listen(8001, () => {
    console.log('The server is listening')
});