var jsonfile = require('jsonfile');

const getJsonUser = () => {
    
    return new Promise((resolve, reject) => {
        jsonfile.readFile('./jsonFile/Users.json' , (err, data) => {

            if (err) 
            {
                reject(err);
            }
            else
            {
               resolve(data);
            }

        })
    })
}

const getJsonPremmissions = () => {
    
    return new Promise((resolve, reject) => {
        jsonfile.readFile('./jsonFile/Premissions.json' , (err, data) => {

            if (err) 
            {
                reject(err);
            }
            else
            {
               resolve(data);
            }

        })
    })
}

const editUser = async (user) => {
    var users = await getJsonUser();
    for(var i=0; i<users.length; i++)
    {
        if(users[i].Id === user.Id)
        {
            users[i] = user;
        }
    }

    // console.log(users)

  return new Promise((resolve, reject) => {

    jsonfile.writeFile('./jsonFile/Users.json' , users , (err) => {
        if (err) 
        {
           reject(err);
        }
        else
        {
            resolve("User changed!")
        }
     })
  })
}

const editPremmission = async (premmission) => {
    var premmissions = await getJsonPremmissions();
    for(var i=0; i<premmissions.length; i++)
    {
        if(premmissions[i].Id === premmission.Id)
        {
            premmissions[i] = premmission;
        }
    }

  return new Promise((resolve, reject) => {

    jsonfile.writeFile('./jsonFile/Premissions.json' , premmissions , (err) => {
        if (err) 
        {
           reject(err);
        }
        else
        {
            resolve("User changed!")
        }
     })
  })
}

const addUser = async (user , id) => {
    var users = await getJsonUser();
    user.Id = id;
    users.push(user);

  return new Promise((resolve, reject) => {

    jsonfile.writeFile('./jsonFile/Users.json' , users , (err) => {
        if (err) 
        {
           reject(err);
        }
        else
        {
            resolve("User added!")
        }
     })
  })
}

const addPremmission = async (premmission , id) => {
    var premmissions = await getJsonPremmissions();
    premmission.Id = id;
    premmissions.push(premmission);

  return new Promise((resolve, reject) => {

    jsonfile.writeFile('./jsonFile/Premissions.json' , premmissions , (err) => {
        if (err) 
        {
           reject(err);
        }
        else
        {
            resolve("Premmission added!")
        }
     })
  })
}

const deleteUser = async (id) => {
    var users = await getJsonUser();
    for(var i=0; i<users.length; i++)
    {
        if(users[i].Id === id)
        {
            users.splice(i , 1)            
        }
    }

  return new Promise((resolve, reject) => {

    jsonfile.writeFile('./jsonFile/Users.json' , users , (err) => {
        if (err) 
        {
           reject(err);
        }
        else
        {
            resolve("User deleted!")
        }
     })
  })
}

const deletePremmission = async (id) => {
    var premmissions = await getJsonPremmissions();
    for(var i=0; i<premmissions.length; i++)
    {
        if(premmissions[i].Id === id)
        {
            premmissions.splice(i , 1)  
        }
    }

  return new Promise((resolve, reject) => {

    jsonfile.writeFile('./jsonFile/Premissions.json' , premmissions , (err) => {
        if (err) 
        {
           reject(err);
        }
        else
        {
            resolve("User deleted!")
        }
     })
  })
}


module.exports = {getJsonUser , getJsonPremmissions , editUser , editPremmission , addUser , addPremmission , deleteUser , deletePremmission};

