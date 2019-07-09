import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor () {
    super()
    this.state = {
      showArr: ['Yamaha', 'Honda', 'KTM', 'Kawasaki', 'Husqvarna', 'Suzuki']
    }
  }
  render() {
    let bikes = this.state.showArr.map((el, i) => {
      return <h2 key={i}>{el}</h2>
    })
    return <div className="App">{bikes}</div>
  }
}

export default App;
