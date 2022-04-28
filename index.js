require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
console.log(process.env)
// Require import libraries
const morgan = require('morgan');
const path = require("path");

//middlware
app.use(morgan("dev"))

//axios
const axios = require("axios")
axios.defaults.baseURL = "https://api.themoviedb.org/3/"
axios.defaults.params = {
  api_key: process.env.TMDB_API_KEY,
  include_adult: false}

// Bodyparser
app.use(express.urlencoded({extended: true}));
app.use(express.json())

//EJS
app.set("view engine", "ejs")

//static files
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

// Routes
const homeRouter = require("./routes/home")
app.use('/', homeRouter)
const moviesRouter = require("./routes/movies")
app.use('/movies', moviesRouter)


// API routes
app.use('/api/weather', require("./routes/api/weatherApi"))
app.use('/api/movies', require("./routes/api/moviesApi"))
app.use('/api/singleMovie', require("./routes/api/singleMovieApi"))

// Listen
app.listen(port, () => {
  console.log(`Example app listening http://localhost:${port}/`)
})
