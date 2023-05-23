import React, { useState } from "react";

const MovieCatalog = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: "Movie 1", genre: "Action" },
    { id: 2, title: "Movie 2", genre: "Drama" },
    { id: 3, title: "Movie 3", genre: "Comedy" },
  ]);

  return (
    <div>
      <h1>Movie Catalog</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <strong>Title:</strong> {movie.title}, <strong>Genre:</strong>{" "}
            {movie.genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCatalog;
