
require('dotenv').config()
const express = require("express");
const router = express.Router();
const axios = require("axios")
// // const db = require("../database");


// GET home page
router.get("/:movie_id", (req, res, next) => {
    // Metaweather API
    axios
      .get("movie/" + req.params.movie_id)
      .then((response) => {
        res.send(response.data);
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  });

module.exports = router;

