import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor () {
    super()
    this.state = {
      thing1: '',
      thing2: ''
    }
    this.loginButton = this.loginButton.bind(this)
  }
  username(name) {
    this.setState({
      thing1: name
    })
  }
  password(pass) {
    this.setState({
      thing2: pass
    })
  }
  loginButton() {
    alert(`Username: ${this.state.thing1}  Password: ${this.state.thing2} `)
  }

  render() {
    return (
      <div className="App">
        <input onChange={e => this.username(e.target.value)} type="text" />
        <input onChange={e => this.password(e.target.value)} type="text" />
        <button onClick={this.loginButton}>Login</button>
      </div>
    );
  }
}

export default App;
