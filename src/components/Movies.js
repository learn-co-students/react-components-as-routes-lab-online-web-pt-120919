import React from "react";
import { movies } from "../data";

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => (
        <div key={index}>
          <h4>{movie.title}</h4>
          <h4>{movie.time}</h4>
          <ul>
            {movie.genres.map((genre, key) => (
              <li key={key}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Movies;
