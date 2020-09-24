import React from 'react';
import { actors } from '../data';

const Act = ({name, movies}) => {
const acmov = movies.map(title => <li>{title}</li>)
  return(
    <div key={name} className="actor">
      <h3>Name: {name}</h3>
      <p>Movies: {acmov}</p>
    </div>
  
  )
}

const Actors = () => {
  return (
    <div className="actors-list">
      <h1>Actors Page:</h1>
      {actors.map(Act)}
    </div>
  );
};

export default Actors;
