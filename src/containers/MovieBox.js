import React, { Component } from 'react';
import MovieList from '../components/MovieList'

class MovieBox extends Component {

  constructor(props){

    super(props);

    this.state = {
      data: [
      {
        id: 1,
        title: 'The Meg',
        imdbLink: 'https://www.imdb.com/title/tt4779682/?ref_=fn_al_tt_1'
      },
      {
        id: 2,
        title: 'Slender Man',
        imdbLink: 'https://www.imdb.com/title/tt5690360/?ref_=fn_al_tt_1'
      },
      {
        id: 3,
        title: 'The Darkest Minds',
        imdbLink: 'https://www.imdb.com/title/tt4073790/?ref_=fn_al_tt_1'
      },
    ]
    }
  };

  render(){
    return <div className="movie-box">
      <h3>This Week's Movie List</h3>
      <MovieList data={this.state.data}/>
    </div>
  }

}

export default MovieBox;
