const express = require("express");
const router = express.Router();
// const db = require("../database");

// GET all movies
router.get("/", (req, res, next) => {
  res.render("pages/movies", {
    title: "All movies"
  });
});


// GET all movies
router.get("/:id", (req, res, next) => {
  const {id} = req.params;
  console.log(id)
  res.render("pages/singleMovie", {
    title: "Movie",
    movie_id: id
  });
});

module.exports = router;