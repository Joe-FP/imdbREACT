import React, { Component } from "react";
import Movie from "./Movie";

const MovieList = (props) => {
  const movieNodes = props.data.map(movie => {
    return(
      <Movie
        title={movie.title}
        imdbLink={movie.imdbLink}
        key={movie.id}>
      </Movie>
    );
  })
  return <div className="movie-list">{movieNodes}</div>
}

export default MovieList;
