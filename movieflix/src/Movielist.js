import {Component} from "react";
import Moviecart from "./Moviecart";
import {movies} from "./MoviesData"

class Movielist extends Component{

    render(){
        //let {title,plot,price,rating,star,fav,cart} = this.state;
        const {movies,handleincStar,decreasestar,handleClickFav,handleClickCart} = this.props;
        
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
        {movies.map((movie)=>(
        <Moviecart movies={movie} 
        increaseStar={handleincStar} 
        decreasestar={decreasestar} 
        handleClickFav={handleClickFav} 
        handleClickCart={handleClickCart}/>))}
        </div>
        )
    
}
}
export default Movielist;