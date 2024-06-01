import {Component} from "react";
import Moviecart from "./Moviecart";

class Movielist extends Component{

    constructor(){
        super();
        this.state ={
            movies : [
                {
                  title: 'The Avengers',                  
                  plot:
                    "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                  rating: '8.0',            
                  price: 99,            
                  star: 0,
                  fav: false,
                  isInCart: false                  
                },
                {
                  title: 'The Dark Knight',                  
                  plot:
                    'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',                  
                  rating: '9.0',            
                  price: 199,            
                  star: 0,            
                  fav: false,
                  isInCart: false                  
                },
                {
                  title: 'Iron Man',                 
                  plot:
                    'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',                  
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',                  
                  rating: '7.9',            
                  price: 139,            
                  star: 0,            
                  fav: false,
                  isInCart: false                  
                }]
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
        //let {title,plot,price,rating,star,fav,cart} = this.state;
        const {movies} = this.state;
        
        // Way 1
        //return(
        //     <>
        //     <Moviecart  title={title}
        //                 plot={plot}
        //                 price={price}
        //                 rating={rating}
        //                 star={star}
        //                 fav={fav}
        //                 cart={cart}/>
        //     </>
        // );
        return(//Way2
        <div className="main">
        {movies.map((movie)=>(<Moviecart movies={movie} increaseStar={this.handleincStar} decreasestar={this.decreasestar} handleClickFav={this.handleClickFav} handleClickCart={this.handleClickCart}/>))}
        </div>
        )
    
}
}
export default Movielist;