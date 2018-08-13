import React, { Component } from 'react';

const Movie = (props) => {
  return(
    <div className='movie'>
      <img className='movie-img' src={ require('../components/favicon.ico') } />
      <p className='movie-title'>{props.title}</p>
      <a className='movie-info' href={props.imdbLink}>More info</a>
    </div>
  );
}

export default Movie;
