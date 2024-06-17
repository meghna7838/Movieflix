import React from "react";
import styled from "styled-components";

const Nav = styled.div `
width:100%;
height:70px;
background-color:cadetblue;
display:flex;
justify-content:space-between

`
class Navbar extends React.Component{

    render()
    {
        return(
            <>
            <Nav>
            <div style={style.title}>Movie-App</div>
            <div style={style.cartContainer}>
            <img src="https://cdn-icons-png.flaticon.com/128/891/891462.png" style={style.cartIcon}/>
            <span style={style.cartCount}>0</span>  
            </div>
            </Nav>
            </>
        )
    }
}

const style = {
    nav : 
    {
    height:70,
    background:"#4267b2",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    position:"relative"
    },
    title:{
        fontSize:30,
        color:"#fff",
        fontWeight:600,
        fontFamily:'"Montserrat",sans-serif',
        textTransform:"uppercase",
        marginLeft:20
    },
    cartContainer:{
        position:"relative",
        cursor:"pointer",
    },
    cartIcon:{
        height:48,
        marginRight:20
    },
    cartCount:{
        background:"orange",
        borderRadius:"50%",
        padding:"4px 8px",
        position:"absolute",
        right:10,
        top:-5,
        fontSize:12
    }

}
export default Navbar;

