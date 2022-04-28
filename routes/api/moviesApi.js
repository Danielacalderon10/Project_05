
require('dotenv').config()
const express = require("express");
const router = express.Router();
const axios = require("axios")
// // const db = require("../database");


// GET home page
router.get("/", (req, res) => {
    // Metaweather API
    axios
      .get("discover/movie")
      .then((response) => {
        res.send(response.data);
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  });

module.exports = router;


// GET home page
router.get("/:page", (req, res) => {
  // Metaweather API
  axios
    .get("discover/movie", {params: {page: req.params.page}})
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});


module.exports = router;