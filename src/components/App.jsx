import React from "react";
import moviesData from "../moviesData";
import MovieIten from "./MovieItem";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData
    };
  }

  removeMovie = movie => {
    const updateMovies = this.state.movies.filter(function (item) {
      return item.id !== movie.id;
    });
    console.log(updateMovies);
    //this.state.movies = updateMovies;
    this.setState({
      movies: updateMovies
    });
  }

  render() {
    return <div>{this.state.movies.map(movie => {
      return <MovieIten key={movie.id} movie={movie} removeMovie={this.removeMovie} />;
    })}</div>;
  }
}

/* function App() {
return <div>{moviesData[0].title}</div>;
} */

export default App;
