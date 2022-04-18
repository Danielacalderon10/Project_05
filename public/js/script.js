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



.catch((err) => {
console.log(err);
})

  