
   
const express = require("express");
const router = express.Router();
const axios = require("axios")
// const db = require("../database");

// GET home page
router.get("/", (req, res, next) => {
    // Metaweather API
    axios
      .get("http://www.metaweather.com/api/location/1103816/")
      .then(({ data }) => {
        res.send(data);
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  });

module.exports = router;