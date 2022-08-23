import React from "react";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      counter : 0
    }
  }

  handleIncrement = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  handleDecrement = () => {
    this.setState({
      counter: this.state.counter -1
    })
  }

  handleReset = () => {
    this.setState({
      counter: 0
    })
  }

  render(){
    return (
      <div class="container">
        <h1>Counter App</h1>
        <div>
          <h2>{this.state.counter}</h2>
          <div className="flex">
            <div>
            <h2>Steps</h2>
            <button>5</button>
            <button onClick={this.handleDecrement}>10</button>
            <button onClick={this.handleReset}>15</button>
            </div>
          <div className="box">
            <h2>Max Value</h2>
            <button>15</button>
            <button>100</button>
            <button>200</button>
          </div>
          </div>
        </div>
        <div className="margin-top">
          <button onClick={this.handleIncrement}>Increment</button>
          <button onClick={this.handleDecrement}>Decrement</button>
          <button onClick={this.handleReset}>Reset</button>
        </div>
      </div>
    )
  }
}

export default App;
