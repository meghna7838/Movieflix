import {Component} from "react";

class Moviecart extends Component{
  constructor(){
    super();
    this.state ={
      title:"The Avengers",
      plot:"Supernatural powers shown in the movie",
      price:199,
      rating:8.9,
      star:0,
    }
    this.addstars = this.addstars.bind(this);//Global binding 
  }
   //If we want to avoid binding we can simply write arrow function instead of normal func.
  addstars(){
    //this.state.star=this.state.star+0.5;
    // //Form1
    // this.setState({
    //   star:this.state.star+0.5 
    // });

    if(this.state.star>=5)
      return;
    //Form2
    this.setState((prevState)=>{
      return { 
        star:this.state.star+0.5
      }
    })
    console.log(this.state.star);
  }

   decreaseStar=()=>{
    if(this.state.star>0){
    this.setState((prevState)=>{
      return{
        star:prevState.star-0.5
      }
    });
  }
  }
    render(){

      const {title,plot,price,rating,star} = this.state;
        return(
            <div className="main">
            <div className="movie-card">
              <div className="left">
                <img alt="Poster" src="https://cdn.pixabay.com/photo/2022/05/25/02/37/nft-7219625_960_720.png"/>
              </div>
              <div className="right">
                <div className="title">{this.state.title}</div>
                <div className="plot">{plot}</div>
                <div className="price">{price}$</div>
                <div className="footer">
                    <div className="rating">{rating}</div>
                    <div className="star-dis">
                      <img className="str-btn"
                      alt="decrease"
                      src="https://cdn-icons-png.flaticon.com/128/1828/1828901.png"
                      onClick={this.decreaseStar}/>

                      <img className="star" 
                      alt="star" 
                      src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"/>
                      
                      <img className="str-btn"
                      alt="increase"
                      src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                      //onClick={this.addstars.bind(this)} Local binding
                      onClick={this.addstars}
                      />

                      <span>{star}</span>
                    </div>
                    <button className="favourite-btn">Fav</button>
                    <button className="cart-btn">Cart</button>
                </div>
              </div>
            </div>
          </div>
        )
    }
    
}

export default Moviecart;