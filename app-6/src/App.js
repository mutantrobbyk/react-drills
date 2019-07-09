import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input type="text"/>
        <button>Add</button>
      </div>
    );
  }
}

export default App;
