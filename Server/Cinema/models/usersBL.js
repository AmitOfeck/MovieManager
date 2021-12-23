var usersSchema = require('./usersSchema');

const getAllUsers = () => {
    return new Promise((resolve , reject) => {
        usersSchema.find({} , (err , data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}

const getUserById = (id) => {
    return new Promise((resolve , reject)=> {
        usersSchema.findById(id , (err, data) => {
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
                    resolve("The user was not found")
                }
            }
        })
    })
}

const createUser = (newUser) => {


    return new Promise ((resolve, reject) => {
        var userToAdd = new usersSchema({

            UserName : newUser.UserName , 
            Password : newUser.Password

        })


        userToAdd.save((err) => {
            if (err) 
            {
                reject(err);
            }
            else
            {
                resolve(userToAdd._id.toString());
            }
        })
    })

}

const createUser2 =  async (newUser) => {

    const userToAdd = new usersSchema({

        UserName : newUser.UserName , 
        Password : newUser.Password

    })

    await userToAdd.save()
    return userToAdd._id.toString()

    /*
    userToAdd.save().then(() => userToAdd._id.toString)
    */
}

const updateUser = (id , updatedUser) => {
    return new Promise((resolve, reject) => {
        var userToUpdate = {
            UserName : updatedUser.UserName , 
            Password : updatedUser.Password
        }

        usersSchema.findByIdAndUpdate(id , userToUpdate , (err)=> {
            if (err) {
                reject(err)
            }
            else {
                resolve("User was updated!")
            } 
        })
    
    })
}

const deleteUser = (id) => {
    return new Promise((resolve , reject) => {
        usersSchema.findByIdAndDelete(id , (err)=> {
            if (err) {
                reject(err)
            }
            else {
                resolve("User was deleted!")
            }
        })
    })
 }



module.exports = {getAllUsers, getUserById, createUser , updateUser , deleteUser , createUser2};

