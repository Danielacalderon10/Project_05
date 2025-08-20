# Movie Ratings App 🎬⭐

A simple web app that allows users to browse movies from the TMDB API and leave ratings and comments for each movie.

---

## Features

- Browse movies fetched from the TMDB API.
- Click on a movie to see details and leave a comment or rating.
- Store user comments and scores in a PostgreSQL database.
- Responsive front-end built with EJS, HTML, CSS, and JS.

---

## Tech Stack

- **Back-end:** Node.js, Express.js
- **Front-end:** EJS, HTML, CSS, JavaScript
- **Database:** PostgreSQL (for storing comments)
- **API:** TMDB API (fetching movie data)
- **Other libraries:** pg-promise, dotenv, nodemon, axios, morgan

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Danielacalderon10/Project_05.git
cd Project_05
```

2. Install dependencies:

npm install

3. Create a .env file in the root folder with the following variables:

TMDB_API_KEY=your_tmdb_api_key
PORT=3000
DB_USER=postgres
DB_PASS=postgres
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=movies

4. Create the PostgreSQL database:
psql -U postgres -f sql/create_db.sql   
psql -U postgres -d movies -f sql/create_tables.sql
psql -U postgres -d movies -f sql/seed_tables.sql

## Usage
npm run dev

Browse movies.
Click a movie to view details.
Add a comment and rating.
