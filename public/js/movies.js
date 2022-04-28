console.log("it is connected")
let IMAGE_URL ="https://image.tmdb.org/t/p/w500"



let page = 1
$(document).ready(function () {
  getMovies(page);
});
//pagination

$("#nextpage").click(() => {
  
  page++
  getMovies(page)
})

$("#prevpage").click(() => {
  
  page--
  getMovies(page)
})


 //movies 


  function getMovies(){
  $("#movies").hide()
console.log(page)
 $("#movies").empty()
$.getJSON("/api/movies/" + page)
.then((data) => {
 
const {results} = data
const {page} = data

results.forEach((movie) => {
  const html =
  `
    <div class = "col s12 m4 l3 movie-container">
    <a href="/movies/${movie.id}">
    <img src="${IMAGE_URL}${movie.poster_path}" class ="responsive-img" alt= "Poster for ${movie.title}">
    </a>
    <div/>
    `

  $("#movies").append(
   html )
    

    $(".progress").hide();
    $("#movies").show()

})

})
.catch((err) => {
console.log(err);
})
}




  