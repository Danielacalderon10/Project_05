
require('dotenv').config()
const express = require("express");
const router = express.Router();
const axios = require("axios")
// // const db = require("../database");


// GET home page
router.get("/", (req, res, next) => {
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