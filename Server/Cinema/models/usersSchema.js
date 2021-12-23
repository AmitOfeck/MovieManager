var mongoose = require('mongoose')

var usersSchema = new mongoose.Schema({

    UserName : String ,
    Password : String 

} , {versionKey: false})

module.exports = mongoose.model('users' , usersSchema)