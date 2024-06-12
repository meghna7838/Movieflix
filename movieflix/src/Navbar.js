import React from "react";
class Navbar extends React.Component{

    render()
    {
        return(
            <>
            <div style={
                {width:"100%",
                height:70,
                background:"red",
                display:"flex",
                justifyContent:"space-between"
            }}>
            <div>Title</div>
            <div>
            <img alt="Cart"/>
            <span>0</span>  
            </div>
            </div>
            </>
        )
    }
}

export default Navbar;