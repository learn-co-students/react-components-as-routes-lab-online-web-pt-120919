import React from 'react';
import { directors } from '../data';

const Dir = ({name, movies}) => {
const mov = movies.map(title => <li>{title}</li>)
  return(
    <div key={name} className="director">
      <h3>Name: {name}</h3>
      <p>Movies: {mov}</p>
    </div>
  )
}

const Directors = () => {
  return (
    <div className="directors-list">
      <h1>Directors Page: </h1>
      {directors.map(Dir)}
    </div>
  );
}

export default Directors
