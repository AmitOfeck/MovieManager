const axios = require('axios')

getData = async () => {
   var moviesAPI = await axios.get("https://api.tvmaze.com/shows");
   moviesAPI = moviesAPI.data;
   var mapMoviesAPI = [];
   moviesAPI.forEach((movie) => {
       var obj ={
           Name : movie.name ,
           Genres : movie.genres ,
           Image : movie.image.medium ,
           Premiered : movie.premiered
       }
       mapMoviesAPI.push(obj);
   })
//    console.log(mapMoviesAPI);

var movies = await axios.get("http://localhost:8000/movies");
movies = movies.data;
// console.log(movies);

var filter = []; //Map the users API that already in the DataBase
var exist = false; //Object the check if the user exists in DataBase
for (var i = 0; i < mapMoviesAPI.length; i++)
    {
        exist = false;
        for (var j = 0; j < movies.length; j++)
        {
            if (mapMoviesAPI[i].Name == movies[j].Name)
            {
                exist = true;
            }
        }
        if (exist == false)
        {
        filter.push(mapMoviesAPI[i])
        }
    }
// console.log(filter)

filter.forEach(async (movie) => {
    var resp2 = await axios.post("http://localhost:8000/movies" , movie)
    console.log(resp2.data)
})

if (filter.length < 1) {
    console.log("All the movies from movies API are already in the DataBase")
}
}

getData();