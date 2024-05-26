import {Component} from "react";
import Moviecart from "./Moviecart";

class Movielist extends Component{
        
    render(){
        return(
            <>
            <Moviecart/>
            <Moviecart/>
            </>
        );
    }
}
export default Movielist;