const express = require("express");
const router = express.Router();
const db = require("../database");

// GET all movies
router.get("/", (req, res, next) => {
  res.render("pages/movies", {
    title: "All movies"
  });
});


// GET single movie
router.get("/:id", (req, res) => {
  const {id} = req.params;
  db.any(
    "SELECT id, score, comment, movie_id, TO_CHAR(created_at, 'HH12:MI AM, DD Mon YYYY') created_at FROM comments WHERE movie_id = $1 ORDER BY created_at DESC",
    [id]
  )

  .then((comments) =>{ 
    console.log(comments)
  res.render("pages/singleMovie", {
    title: "Movie",
    movie_id: id,
    comments
  })
} )
.catch((err) => {
  console.log(err)
  res.send(err)
})
});

router.post("/:id", (req, res) => {
  const { id } = req.params;
  db.one(
    "INSERT INTO comments (comment, score, movie_id) VALUES ($1, $2, $3) RETURNING score, comment",
    [req.body.comment, req.body.score, id]
  )
    .then((data) => {
      console.log(data);
      res.send({
        ...data,
        success: true
      });
    })
    .catch((error) => {
      console.log(error);
      res.send(error);
    });
});




module.exports = router;