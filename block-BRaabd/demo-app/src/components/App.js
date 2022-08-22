import React from "react";



class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      counter : 0
    }
  }
  render(){
    return (
      <>
      <h1 className="heading">Assignment</h1>
      <div className="btn-box container">
        <button className="btn" onClick={() => {
          
        }}>Basketball</button>
        <button className="btn">PubG</button>
        <button className="btn">Tiger</button>
        <button className="btn">Phone</button>
        <button className="btn">Laptop</button>
        <button className="btn">Cricket</button>
      </div>
      <div className="img-box container">
        <img src={this.state.counter} alt=""/>
      </div>
      </>
    )
  }
}

export default App;