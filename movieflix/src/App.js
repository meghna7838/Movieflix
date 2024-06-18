import React from "react";
import Movielist from "./Movielist";
import Navbar from "./Navbar";
import {movies} from "./MoviesData"

class App extends React.Component{
  constructor(){
    super();
    this.state ={
        movies : movies,
        cartCount:3
    }
    }

      handleincStar = (movie) =>{
        const {movies} = this.state;
        const mid = movies.indexOf(movie);
        if(movies.star >=5)
          {
            return;
          }
        movies[mid].star +=0.5;
        this.setState({
          movies:movies
        })
      }

      decreasestar = (movie) =>{
        const {movies} = this.state;
        const mid = movies.indexOf(movie);
        if(movies[mid].star<=0)
          {
            return;
          }
        movies[mid].star -=0.5;
        this.setState({
          movies:movies
        })
      }
      handleClickFav = (movie) =>{
        const {movies} = this.state;
        const mid = movies.indexOf(movie);
        movies[mid].fav=!movies[mid].fav;
          this.setState({
        movies:movies
        })
        
      }

      handleClickCart = (movie) =>{
        const {movies} = this.state;
        const mid = movies.indexOf(movie);
        movies[mid].cart= !movies[mid].cart;
          this.setState({
            movies
          })
      }


  render(){

    return (
      <>
      <Navbar/>
        <h1>Movieflix</h1>
        <Movielist movies={movies} 
        handleincStar={this.handleincStar}
        decreasestar={this.decreasestar}
        handleClickFav={this.handleClickFav}
        handleClickCart={this.handleClickCart}
         />
      </>
    );
  }
}

export default App;