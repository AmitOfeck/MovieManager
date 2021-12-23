var membersSchema = require('./membersSchema');

const getAllMembers = () => {
    return new Promise((resolve , reject) => {
        membersSchema.find({} , (err , data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}

const getMemberById = (id) => {
    return new Promise((resolve , reject)=> {
        membersSchema.findById(id , (err, data) => {
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
                    resolve("the member was not found")
                }
            }
        })
    })
}

const createMember = (newMember) => {


    return new Promise ((resolve, reject) => {
        var memberToAdd = new membersSchema({

            Name : newMember.Name ,
            Email : newMember.Email ,
            City : newMember.City
        })


        memberToAdd.save((err) => {
            if (err) 
            {
                reject(err);
            }
            else
            {
                resolve(memberToAdd._id);
            }
        })
    })

}

const updateMember = (id , updatedMember) => {
    return new Promise((resolve, reject) => {
        var memberToUpdate = {
            Name : updatedMember.Name ,
            Email : updatedMember.Email ,
            City : updatedMember.City
        }

        membersSchema.findByIdAndUpdate(id , memberToUpdate , (err)=> {
            if (err) {
                reject(err)
            }
            else {
                resolve("Member was updated!")
            } 
        })
    
    })
}

const deleteMember = (id) => {
    return new Promise((resolve , reject) => {
        membersSchema.findByIdAndDelete(id , (err)=> {
            if (err) {
                reject(err)
            }
            else {
                resolve("Member was deleted!")
            }
        })
    })
 }



module.exports = {getAllMembers , getMemberById , createMember , updateMember , deleteMember};

