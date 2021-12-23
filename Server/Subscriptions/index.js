var express = require('express');
var subscriptionsController = require('./controllers/subscriptionsController');
var moviesController = require('./controllers/moviesController');
var membersController = require('./controllers/membersController');

var app = express();
 
require ('./configs/dataBase')

require('./API/UsersAPI') // Insert the users from API
require('./API/MoviesAPI') // Insert the movies from API

var cors = require('cors');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true })).use(bodyParser.json());
app.use(cors());

app.use('/movies' , moviesController);
app.use('/members' , membersController);
app.use('/subscriptions' , subscriptionsController);


app.listen(8000, () => {
    console.log('The server is listening')
});