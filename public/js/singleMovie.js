// Spider-man
// const movie_id = "634649";

console.log(movie_id)

let BASE_URL = "https://api.themoviedb.org/3/movie/" + movie_id;
let IMAGE_URL ="https://image.tmdb.org/t/p/w500"
// let API_KEY ="?api_key=81ecf20e0f0edd8380a76ea525f2c026";
const apiOptions = {
  api_key: "81ecf20e0f0edd8380a76ea525f2c026"
}

// http://127.0.0.1:5500/%7BIMAGE_URL%7D/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg
// https://api.themoviedb.org/3/movie/634649?api_key=81ecf20e0f0edd8380a76ea525f2c026&language=en-US
// https://api.themoviedb.org/3/discover/movie/634649?api_key=81ecf20e0f0edd8380a76ea525f2c026

$.getJSON(BASE_URL, apiOptions)
  .then((movie) => {
    // console.log(data)
    $("#title").text(movie.title)
    $("#poster").append(`<img src= "${IMAGE_URL}${movie.poster_path}" alt= "Poster for ${movie.title}" />`)
    $("#year").text(movie.release_date)
    $("#synopsis").text(movie.overview)
  })

  .catch((err) => {
    console.log(err)
  });