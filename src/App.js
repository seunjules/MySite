import React, { Component } from "react";
import "./App.css";
import About from "./components/about";
import "animate.css";



class App extends Component {
 

  render() {
    

    return (
      <body>
        <div className="App">
          <div className="">
            <About handleView={this.handleView} />
         </div>
         </div>
      </body>
    );
  }
}

export default App;
