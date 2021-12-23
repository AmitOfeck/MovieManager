var subscriptionsSchema = require('./subscriptionsSchema');

const getAllSubscriptions = () => {
    return new Promise((resolve , reject) => {
        subscriptionsSchema.find({} , (err , data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}

const getSubscriptionById = (id) => {
    return new Promise((resolve , reject)=> {
        subscriptionsSchema.findById(id , (err, data) => {
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
                    resolve("the subscription was not found")
                }
            }
        })
    })
}

const createSubscription = (newSubscription) => {


    return new Promise ((resolve, reject) => {
        var subscriptionToAdd = new subscriptionsSchema({

            MemberId : newSubscription.MemberId ,
            Movies : newSubscription.Movies
        })


        subscriptionToAdd.save((err) => {
            if (err) 
            {
                reject(err);
            }
            else
            {
                resolve("The subscription was added");
            }
        })
    })

}

const updateSubscription = (id , updatedSubscription) => {
    return new Promise((resolve, reject) => {
        var subscriptionToUpdate = {
            MemberId : updatedSubscription.MemberId ,
            Movies : updatedSubscription.Movies
        }

        subscriptionsSchema.findByIdAndUpdate(id , subscriptionToUpdate , (err)=> {
            if (err) {
                reject(err)
            }
            else {
                resolve("Subscription was updated!")
            } 
        })
    
    })
}

const deleteSubscription = (id) => {
    return new Promise((resolve , reject) => {
        subscriptionsSchema.findByIdAndDelete(id , (err)=> {
            if (err) {
                reject(err)
            }
            else {
                resolve("Subscription was deleted!")
            }
        })
    })
 }



module.exports = {getAllSubscriptions , getSubscriptionById , createSubscription , updateSubscription , deleteSubscription};

