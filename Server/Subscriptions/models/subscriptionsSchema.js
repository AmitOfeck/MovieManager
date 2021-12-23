var mongoose = require('mongoose')

var subscriptionsSchema = new mongoose.Schema({

    MemberId : mongoose.ObjectId ,
    Movies : [{movieId : mongoose.ObjectId , date : Date}] ,

} , {versionKey: false})

module.exports = mongoose.model('subscriptions' , subscriptionsSchema)