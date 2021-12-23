var moviesSchema = require('./moviesSchema');

const getAllMovies = () => {
    return new Promise((resolve , reject) => {
        moviesSchema.find({} , (err , data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}

const getMovieById = (id) => {
    return new Promise((resolve , reject)=> {
        moviesSchema.findById(id , (err, data) => {
            if (err) 
            {
                reject(err)
            }
            else
            {
                if(data !== null) {
                    resolve(data)
                }
                else{
                    resolve("the movie was not found")
                }
            }
        })
    })
}

const createMovie = (newMovie) => {


    return new Promise ((resolve, reject) => {
        var movieToAdd = new moviesSchema({

            Name : newMovie.Name ,
            Genres : newMovie.Genres ,
            Image : newMovie.Image,
            Premiered : newMovie.Premiered
        })


        movieToAdd.save((err) => {
            if (err) 
            {
                console.log("error")
                reject(err);
            }
            else
            {
                resolve("The movie was added");
            }
        })
    })

}

const updateMovie = (id , updatedMovie) => {
    return new Promise((resolve, reject) => {
        var movieToUpdate = {
            Name : updatedMovie.Name ,
            Genres : updatedMovie.Genres ,
            Image : updatedMovie.Image,
            Premiered : updatedMovie.Premiered 
        }

        moviesSchema.findByIdAndUpdate(id , movieToUpdate , (err)=> {
            if (err) {
                reject(err)
            }
            else {
                resolve("Movie was updated!")
            } 
        })
    
    })
}

const deleteMovie = (id) => {
    return new Promise((resolve , reject) => {
        moviesSchema.findByIdAndDelete(id , (err)=> {
            if (err) {
                reject(err)
            }
            else {
                resolve("Movie was deleted!")
            }
        })
    })
 }



module.exports = {getAllMovies , getMovieById , createMovie , updateMovie , deleteMovie};

