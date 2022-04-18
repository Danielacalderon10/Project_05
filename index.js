const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Require import libraries
const morgan = require('morgan');
const path = require("path");

//middlware
app.use(morgan("dev"))


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
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening http://localhost:${port}/`)
})
