console.log("it is connected")

$("h1").css("color","#673ab7")


// var proxy = 'https://cors-anywhere.herokuapp.com/'
// var url = 'https://www.metaweather.com/api/location/1103816/'


//weather
$("#weather").hide()
$.ajax({
    
    method: "GET",
    url:" http://localhost:3000/api/weather",
    success: (data) => {
    const {consolidated_weather: weather} = data;

    console.log(data);
    $("#weather").append(
`
<div id ="icon">
<img src="https://www.metaweather.com/static/img/weather/${weather[0].weather_state_abbr}.svg" alt= "">
</div>
<h4> Weather in <strong>${data.title}</strong> </h4>
<p> <strong> max ${parseInt(weather[0].max_temp)} °C </strong> </p>
<p> <strong> min ${parseInt(weather[0].min_temp)} °C </strong> </p>
<p> <strong>${weather[0].weather_state_name}</strong> </p>
`
    )
  
    $(".progress").hide();
    $("#weather").show();
    }
  })



.catch((err) => {
console.log(err);
})

  