import React from "react";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      active: 'basketball'
    }
  }
  render(){
    let labels = ['basketball', 'pubg', 'tiger', 'phone', 'laptop', 'cricket'];
    return (
      <>
      <h1 className="heading">Assignment</h1>
      <div className="container">
        {labels.map((label) => {
          return (
            <button className= {this.state.active === label ? "active" : ""} onClick={() => {
              this.setState({
                active: label,
              })
            }}>{label}</button>
          )
        })}
      </div>
      <div className="img-box container">
        <img 
        src={`./media/${this.state.active}.jpg`} 
        alt={this.state.active}/>
      </div>
      </>
    )
  }
}

export default App;