console.log("it is connected")



 //movies 
  $("#movies").hide()

// let BASE_URL = "https://api.themoviedb.org/3/discover/movie"
let IMAGE_URL ="https://image.tmdb.org/t/p/w500"
//  let API_KEY ="?api_key=81ecf20e0f0edd8380a76ea525f2c026";
//  const apiOptions = {
//     api_key: "81ecf20e0f0edd8380a76ea525f2c026"
//   }
  //https://api.themoviedb.org/3/discover/movie?api_key=81ecf20e0f0edd8380a76ea525f2c026
//  https://api.themoviedb.org/3/discover/movie/550?api_key=81ecf20e0f0edd8380a76ea525f2c026
//https://api.themoviedb.org/3/movie/550?api_key=81ecf20e0f0edd8380a76ea525f2c026




$.getJSON("/api/movies")
.then((data) => {
const {results} = data
const {page} = data
results.forEach((movie) => {
  $("#movies").append(
    `
    <div class = "col s12 m4 l3 movie-container">
    <a href="/movies/${movie.id}">
    <img src="${IMAGE_URL}${movie.poster_path}" class ="responsive-img" alt= "Poster for ${movie.title}">
    </a>
    <div/>
    `)
    

    $(".progress").hide();
    $("#movies").show()

})

})
.catch((err) => {
console.log(err);
})

  