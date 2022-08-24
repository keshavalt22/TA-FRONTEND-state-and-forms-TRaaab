import React from "react";
import questions from '../data/data';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      active: questions.Q,
    }
  }

  render(){
    return (
      <div className="container">
        <h1>Assignment</h1>
        <ul>
        {
          questions.map((elm) => (
            <li className={this.state.active === elm ? "active-step" : ""} onClick={() => {
              this.setState({
                active: elm,
              })
            }}>
              <h2>{elm.Q}</h2>
              <p>{this.state.active === elm ? elm.A : ""}</p>
            </li>
          ))
        }
        </ul>
      </div>
    )
  }
}

export default App;
