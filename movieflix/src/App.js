import React from "react";
import Movielist from "./Movielist";
import Navbar from "./Navbar";
import {movies} from "./MoviesData"

class App extends React.Component{
  constructor(){
    super();
    this.state ={
        movies : movies,
        cartCount:0
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
        let {movies,cartCount} = this.state;
        const mid = movies.indexOf(movie);
        movies[mid].cart= !movies[mid].cart;
        if(movies[mid].cart)
          {          
            cartCount=cartCount+1;
          }
        else
          {
            cartCount=cartCount-1;
          }
          this.setState({
            movies,
            cartCount
          })
      }


  render(){

    const {movies,cartCount} = this.state;

    return (
      <>
      <Navbar cartCount={cartCount}/>
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