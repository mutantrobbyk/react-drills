import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor () {
    super()
    this.state = {
      answer: null
    }
  }
  changeHandle (e) {
    this.setState({
      answer: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <input onChange={e => this.changeHandle(e)} type="text"/>
        <h4>{this.state.answer}</h4>
      </div>
    );
  }
}

export default App;
