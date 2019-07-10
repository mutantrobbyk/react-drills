import React, { Component } from "react";
import "./App.css";
import Todo from './components/Todo'

class App extends Component {
  constructor() {
    super()
    this.state = {
      list: [],
      tasks: ''
    }
    this.handleChange2 = this.handleChange2.bind(this)
  }
  handleChange1(val) {
    this.setState({
      tasks: val
    })
  }
  handleChange2() {
    this.setState({
      list: [...this.state.list, this.state.tasks],
      tasks: ''
    })
  }
render() {
  let newList = this.state.list.map((el, i) => {
    return <Todo key={i} task={el} />
  })
  return (
    <div className="App">
      <h1>My to-do list:</h1>
      <input value={this.state.tasks} onChange={e => this.handleChange1(e.target.value)} placeholder='enter new task' type="text" />
      <button onClick={this.handleChange2}>Add</button>
      {newList}
    </div>
  );
}
}

export default App;
