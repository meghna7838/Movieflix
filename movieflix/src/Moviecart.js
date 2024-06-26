import {Component} from "react";
import styled from "styled-components";

const Moviecartstyle= styled.div`
  background: linear-gradient(160deg,#94a894,#467cb0);
  position: relative;
  flex:10;
`;


function Moviecart(props){
  
    
   //If we want to avoid binding we can simply write arrow function instead of normal func.
  // addstars(){
  //   //this.state.star=this.state.star+0.5;
  //   // //Form1
  //   // this.setState({
  //   //   star:this.state.star+0.5 
  //   // });

  //   if(this.state.star>=5)
  //     return;
  //   //Form2
  //   this.setState((prevState)=>{
  //     return { 
  //       star:this.state.star+0.5
  //     }
  //   })
  //   console.log(this.state.star);
  // }

  //  decreaseStar=()=>{
  //   if(this.state.star>0){
  //   this.setState((prevState)=>{
  //     return{
  //       star:prevState.star-0.5
  //     }
  //   });
  // }
  // }

  // handleClick =()=>{
  //   this.setState({
  //     fav:!this.state.fav
  //   })
  // }

  // handleClickCart = () =>{
  //   this.setState({
  //     cart:!this.state.cart
  //   })
  // }

  
    

      let {movies,increaseStar,decreasestar,handleClickCart,handleClickFav} =props;
      //let {title,plot,price,rating,star,fav,cart} = this.props; //Way 1
      let {title,plot,price,rating,star,fav,cart} = props.movies; //Way2
        
        return(
            <div className="main">
            <div className="movie-card">
              <div className="left">
                <img alt="Poster" src="https://cdn.pixabay.com/photo/2022/05/25/02/37/nft-7219625_960_720.png"/>
              </div>
              <Moviecartstyle>
                <div className="title">{title}</div>
                <div className="plot">{plot}</div>
                <div className="price">{price}$</div>
                <div className="footer">
                    <div className="rating">{rating}</div>
                    <div className="star-dis">
                      <img className="str-btn"
                      alt="decrease"
                      src="https://cdn-icons-png.flaticon.com/128/1828/1828901.png"
                      onClick={()=>{decreasestar(movies)}}/>

                      <img className="star" 
                      alt="star" 
                      src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"/>
                      
                      <img className="str-btn"
                      alt="increase"
                      src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                      //onClick={this.addstars.bind(this)} Local binding
                      onClick={()=>{increaseStar(movies)}}
                      />

                      <span>{star}</span>
                    </div>
                    {/* {fav?<button className="unfavourite-btn" onClick={this.handleClick}>Un-favourite</button>:
                      <button className="favourite-btn"onClick={this.handleClick}>Favourite</button>} */}

                    <button className={fav?"unfavourite-btn":"favourite-btn"} onClick={()=>{handleClickFav(movies)}}>{fav?"UnFavourite":"Favourite"}</button>
                    
                    <button className={cart?"cart-btn":"remove-cart-btn"} onClick={()=>{handleClickCart(movies)}}>{cart?"Remove from cart":"Add to cart"}</button>
                </div>
              </Moviecartstyle>
            </div>
          </div>
        )
    }
    


export default Moviecart;