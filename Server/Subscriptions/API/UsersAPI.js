const axios = require('axios')

getData = async () => {
    var usersAPI = await axios.get("https://jsonplaceholder.typicode.com/users"); //Get the data from users API
    usersAPI = usersAPI.data;
    // console.log(usersAPI);
    var mapUsersAPI = [];
    usersAPI.forEach((user) => {
        var obj = {
            Name : user.name,
            Email : user.email,
            City : user.address.city
        };
        mapUsersAPI.push(obj);
    })
    // console.log(mapUsersAPI);

    var members = await axios.get("http://localhost:8000/members"); //Get the data from members subscriptions Data Base
    members = members.data;
    // console.log(members);

    var filter = []; //Map the users API that already in the DataBase
    var exist = false; //Object the check if the user exists in DataBase
    for (var i = 0; i < mapUsersAPI.length; i++)
    {
        exist = false;
        for (var j = 0; j < members.length; j++)
        {
            if (mapUsersAPI[i].Email == members[j].Email)
            {
                exist = true;
            }
        }
        if (exist == false)
        {
        filter.push(mapUsersAPI[i])
        }
    }
    // console.log(filter);

    filter.forEach(async (user) => {
        console.log(user); //See who is the user
    var resp2 = await axios.post("http://localhost:8000/members" , user);
    console.log(resp2.data)
    })

    if (filter.length < 1) {
        console.log("All the users from users API are already in the DataBase")
    }

}

getData();

/////////////////Rest API check

deletee = async () => {
    var resp3 = await axios.delete("http://localhost:8000/members/61ac7bc27f6b1713f6777ed8")
    console.log(resp3.data)
}
// deletee();

post = async () => {
    var obj = {
        Name : "Chelsea Dietrich" ,
        Email: "Chelsea@walla.com" ,
        City: "Dimona"
    }
    var resp3 = await axios.post("http://localhost:8000/members/" , obj)
    console.log(resp3.data)
}
// post();

put = async () => {
    var obj = {
        Name : "Dudi" ,
        Email: "Chelsea@walla.com" ,
        City: "Dimona"
    }
    var resp3 = await axios.put("http://localhost:8000/members/61ac7bc27f6b1713f6777ed8" , obj)
    console.log(resp3.data)
}
// put();

