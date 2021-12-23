const express = require('express');
const moviesBL = require('../models/moviesBL');

const router = express.Router();


//GetAll
router.route('/').get(async (req, resp) => {
    var data = await moviesBL.getAllMovies();
    return resp.json(data);
})

//GetById
router.route('/:id').get(async (req, resp) => {
    var id = req.params.id;
    var data = await moviesBL.getMovieById(id);
    return resp.json(data);
})


//Post
router.route('/').post(async (req, resp) => {
    var newMovie = req.body;
    var answer = await moviesBL.createMovie(newMovie);
    return resp.json(answer);
})

//Put
router.route('/:id').put(async (req, resp) => {
    var updatedMovie = req.body;
    var id = req.params.id;
    var answer = await moviesBL.updateMovie(id , updatedMovie);
    return resp.json(answer);
})

//Delete 
router.route('/:id').delete(async (req , resp)=> {
    var id = req.params.id;
    var answer = await moviesBL.deleteMovie(id);
    return resp.json(answer);
})

module.exports = router;

