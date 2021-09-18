import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    counter: 0,
    num: 1,
  }

  handleChange = (e) => {
    this.setState({num: Number(e.target.value)})
  }

  addNum = (e) => {
    this.setState((state) => ({
      counter: state.counter + state.num
    }))
  }

  subNum = (n) => {
    this.setState((state) => ({
      counter: state.counter - state.num
    }))
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1 id="title">COUNTER</h1>
          <h1 id="counter">{this.state.counter}</h1>
          <div id="control">
            <button className="btn-floating btn-large waves-effect waves-light blue" onClick={this.addNum}>+</button>
            <input 
                id="numInput"
                name='num'
                type="number"
                value={this.state.num}
                onChange={this.handleChange}
              />
            <button className="btn-floating btn-large waves-effect waves-light blue" onClick={this.subNum}>-</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
