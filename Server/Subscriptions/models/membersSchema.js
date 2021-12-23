var mongoose = require('mongoose')

var membersSchema = new mongoose.Schema({

    // id : ObjectId ,
    Name : String ,
    Email : String ,
    City : String 
} , {versionKey: false})

module.exports = mongoose.model('members' , membersSchema)