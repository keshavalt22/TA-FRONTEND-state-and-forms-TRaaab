import React from "react";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      counter : 0,
      step: 5,
      max: 15
    }
  }

  handleIncrement = () => {
    let {step, max, counter} = this.state;
    this.setState({
      counter: 
      counter + step > max ? counter : counter + step
    })
  }

  handleDecrement = () => {
    this.setState({
      counter: this.state.counter - this.state.step
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
              {
                [5,10,15].map((step) => (
                  <button onClick={() => {
                    this.setState({step: step})
                  }} className={this.state.step === step ? "active-step": ""}>{step}</button>
                ))
              }
            </div>
            <div className="box">
              <h2>Max Value</h2>
              {
                [15, 100, 200].map((max) => (
                  <button onClick={() => {
                    this.setState({max: max})
                  }} className={this.state.max === max ? "active-step": ""}>{max}</button>
                ))
              }
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
