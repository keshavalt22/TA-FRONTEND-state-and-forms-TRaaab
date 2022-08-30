import React from "react";

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputText: "",
            fontSize: 16
        }
    }

    handleChange = (event) => {
        this.setState({inputText: event.target.value})
    }

    handleRange = (event) => {
        this.setState({fontSize: event.target.value})
    }

    render(){
        let fonts = [
            'Courier New',
            'Franklin Gothic Medium',
            'Gill Sans',
            'Lucida Sans',
            'Segoe UI',
            'Times New Roman',
            'Trebuchet MS',
            'Arial',
            'Cambria',
            'Georgia',
            'Impact',
            'Verdana',
          ];
        return(
            <main>  
                <div className ="input-section">
                    <input onChange={this.handleChange} type="text"/>
                    <h3>Font-Size: {this.state.fontSize}Px</h3>
                    <input onChange={this.handleRange} type="range"></input>
                    
                </div>
                <div className="cards">
                    {
                        fonts.map((font) => (
                            <div className="card" key ={font}>
                                <h2 style={{fontFamily: font}} >{font}</h2>
                                <p style={{fontFamily: font, 
                                    fontSize: this.state.fontSize + "px"}}>{this.state.inputText}</p>
                            </div>
                        ))
                    }
                </div>
            </main>
        )
    }
}

export default Main;