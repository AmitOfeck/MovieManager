var mongoose = require('mongoose')

var moviesSchema = new mongoose.Schema({

    // id : ObjectId ,
    Name : String ,
    Genres : [String] ,
    Image : String,
    Premiered : Date
} , {versionKey: false})

module.exports = mongoose.model('movies' , moviesSchema)