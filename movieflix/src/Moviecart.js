import {Component} from "react";

class Moviecart extends Component{
    render(){
        return(
            <div className="main">
            <div className="movie-card">
              <div className="left">
                <img alt="Poster" src="https://cdn.pixabay.com/photo/2022/05/25/02/37/nft-7219625_960_720.png"/>
              </div>
              <div className="right">
                <div className="title">The Avenger</div>
                <div className="plot">Supernatural power depiction</div>
                <div className="price">100$</div>
                <div className="footer">
                    <div className="rating">rating</div>
                    <div className="star-dis">
                      <img className="str-btn"
                      alt="decrease"
                      src="https://cdn-icons-png.flaticon.com/128/1828/1828901.png"/>

                      <img className="star" 
                      alt="star" 
                      src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"/>
                      
                      <img className="str-btn"
                      alt="increase"
                      src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"/>

                      <span>0</span>
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