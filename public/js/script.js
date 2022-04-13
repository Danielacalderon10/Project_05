console.log("it is connected")

$("h1").css("color","#673ab7")




// var myUrl = 'http://www.metaweather.com/api/location/1103816/';
// var proxy = 'https://cors-anywhere.herokuapp.com/';

var proxy = 'https://cors-anywhere.herokuapp.com/'
var url = 'https://www.metaweather.com/api/location/1103816/'


//weather
$("#weather").hide()
$.ajax({
    
    method: "GET",
    url: proxy + url,
    success: (data) => {
       
        // console.log(data);
    const {consolidated_weather: weather} = data;

    console.log(data);
const html =
`
<div id ="icon">
<img src="https://www.metaweather.com/static/img/weather/${weather[0].weather_state_abbr}.svg" alt= "">
</div>
<h4> Weather in <strong>${data.title}</strong> </h4>
<p> <strong>${parseInt(weather[0].the_temp)} °C </strong> </p>
<p> <strong>${weather[0].weather_state_name}</strong> </p>
`

    $("#weather").append(html);

    $(".progress").hide();
    $("#weather").show();
    }
  })

//movies
let BASE_URL = "https://api.themoviedb.org/3/discover/movie"
let IMAGE_URL ="https://image.tmdb.org/t/p/w500"
 let API_KEY ="?api_key=81ecf20e0f0edd8380a76ea525f2c026";
//  https://api.themoviedb.org/3/discover/movie/550?api_key=81ecf20e0f0edd8380a76ea525f2c026
//https://api.themoviedb.org/3/movie/550?api_key=81ecf20e0f0edd8380a76ea525f2c026

$.getJSON(BASE_URL + API_KEY)
.then((data) => {
const {results} = data
const {page} = data
results.forEach((movie) => {
    const html =
    `
    <div class = "col s12 m4 l3">
    <h4 class= "truncate"> ${movie.title} </h4>
    <img src="${IMAGE_URL}${movie.poster_path}" class ="responsive-img" alt= "Poster for ${movie.title}">
    <div/>
    `
    $("#movies").append(html)

})

})
.catch((err) => {
console.log(err);
})

  