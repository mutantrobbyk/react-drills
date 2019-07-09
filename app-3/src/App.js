import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      filterString: '',
      showArr: ['Yamaha', 'Honda', 'KTM', 'Kawasaki', 'Husqvarna', 'Suzuki']
    }
  }
  handleChange(filter) {
    this.setState({
      filterString: filter
    })
  }
  render() {
    let bikes = this.state.showArr
      .filter((el, i) => {
        return el.includes(this.state.filterString)
      })
      .map((el, i) => {
        return <h2 key={i}>{el}</h2>
      })
    return <div className="App">
      <input onChange={e => this.handleChange(e.target.value)} type="text" />
      {bikes}
    </div>
  }
}

export default App;
