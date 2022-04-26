
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

  $("#comment-form").submit((e) => {
    e.preventDefault();
    $.post(`/movies/${movie_id}`, { comment: $("#comment").val() },  { score: $("#score").val() })
      .then((response) => {
        console.log(response);
        const html =
        `
      <div>
      <p><strong>${response.score}</strong></p>
        <p><strong>${response.comment}</strong></p>
        <p>${response.created_at}</p>
      </div>
        `
        $("#comment-body").prepend(html)
      })
      .catch((error) => {
        console.log(error);
      });
  });
 