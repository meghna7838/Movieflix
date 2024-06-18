import React from "react";
import styled from "styled-components";
import navstyle from "./Navbar.module.css";

// const Nav = styled.div `
// width:100%;
// height:70px;
// background:linear-gradient(170deg, #1bc059,#0d47a1);
// display:flex;
// justify-content:space-between;
// align-items:center;
// position:relative

// `;
// const Title= styled.div`
//     font-size:40px;
//     color:#fff;
//     font-weight:600;
//     font-family:'Montserrat,sans-serif';
//     text-transform:uppercase;
//     margin-left:20px;
//     &:hover{color: #0f0}
    
//     `;

// const Cartcontainer = styled.div`
// cursor:pointer;
// position:relative;
// `;

// const Carticon = styled.img`
// margin-right:20px;
// margin-top:5px;
// height:40px;
// `;

// const Cartcount = styled.div`
// background-color:${(props)=>props.color};
// border-radius:50%;
// padding:4px 8px;
// position:absolute;
// right:10px;
// top:-5px;
// font-size:12px;
// visibility:${(props)=>props.show?"visible":"hidden"}
// `

class Navbar extends React.Component{

    render()
    {
        return(
            <>
            <div className={navstyle.nav}>
            <div className={navstyle.title}>Movie-App</div>
            <div className={navstyle.cartcontainer}>
            <img className={navstyle.carticon} src="https://cdn-icons-png.flaticon.com/128/891/891462.png" />
            <div className={navstyle.cartcount} >0</div>  
            </div>
            </div>
            </>
        )
    }
}

//Internal styling 

// const style = {
//     nav : 
//     {
//     height:70,
//     background:"#4267b2",
//     display:"flex",
//     justifyContent:"space-between",
//     alignItems:"center",
//     position:"relative"
//     },
//     title:{
//         fontSize:30,
//         color:"#fff",
//         fontWeight:600,
//         fontFamily:'"Montserrat",sans-serif',
//         textTransform:"uppercase",
//         marginLeft:20
//     },
//     cartContainer:{
//         position:"relative",
//         cursor:"pointer",
//     },
//     cartIcon:{
//         height:48,
//         marginRight:20
//     },
//     cartCount:{
//         background:"orange",
//         borderRadius:"50%",
//         padding:"4px 8px",
//         position:"absolute",
//         right:10,
//         top:-5,
//         fontSize:12
//     }

// }
 export default Navbar;

