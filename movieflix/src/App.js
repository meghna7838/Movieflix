import React from "react";
import Movielist from "./Movielist";
import Navbar from "./Navbar";

class App extends React.Component{

  render(){
    return (
      <>
      <Navbar/>
        <h1>Movieflix</h1>
        <Movielist/>
      </>
    );
  }
}

export default App;