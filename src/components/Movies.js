import React from 'react';
import { movies } from '../data';

const Name = ({title, time, genres, metascore}) => {
    const gen = genres.map(each => <li>{each}</li>)
  return(
    <div key={title} className="movie">
        <h3>Name: {title}</h3>
        <p>Time: {time}</p>
        <p>Genres: {gen}</p>
        <p>Metascore: {metascore ? metascore : "Score not available!"}</p>
    </div>
  )

}

const Movies = () => {
  return ( 
    <div className="movie-list">
      <h1>Movies Page</h1>
      {movies.map(Name)}
    </div>
  );
};

export default Movies;
