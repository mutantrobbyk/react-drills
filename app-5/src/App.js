import React, { Component } from "react";
import Image from './components/Image'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
    <Image pic='https://images-na.ssl-images-amazon.com/images/I/419us0hAdAL.jpg' test={'test'}/>
      </div>
    );
  }
}

export default App;
