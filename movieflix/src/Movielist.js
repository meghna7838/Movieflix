import {Component} from "react";
import Moviecart from "./Moviecart";

class Movielist extends Component{

    constructor(){
        super();
        this.state ={
          title:"The Avengers",
          plot:"Supernatural powers shown in the movie",
          price:199,
          rating:8.9,
          star:0,
          fav:false,
          cart:false
        }
    }

    
    render(){
        let {title,plot,price,rating,star,fav,cart} = this.state;
        
        return(
            <>
            <Moviecart  title={title}
                        plot={plot}
                        price={price}
                        rating={rating}
                        star={star}
                        fav={fav}
                        cart={cart}/>
            </>
        );
    
}
}
export default Movielist;