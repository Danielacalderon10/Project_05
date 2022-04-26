$(document).ready(function(){
  $('select').formSelect();
});

let IMAGE_URL ="https://image.tmdb.org/t/p/w500"

$.getJSON("/api/singleMovie/" + movie_id)
  .then((movie) => {
    // console.log(data)
    $("#title").text(movie.title)
    $("#poster").append(`<img src= "${IMAGE_URL}${movie.poster_path}" alt= "Poster for ${movie.title}" />`)
    $("#year").text(movie.release_date.substr(0,4));
    movie.genres.forEach((genre)=> {
      $("#genres").append(`${genre.name} | `)
    })
    $("#synopsis").text(movie.overview)
  })

  .catch((err) => {
    console.log(err)
  });