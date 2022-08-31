import React from "react";

class MultipleInput extends React.Component{
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
        this.state = {
            text: "",
            date: "",
            area: ""
        }
    }

    handleInput = ({target}) => {
        let {name, value} = target;
        this.setState({[name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        console.log(this.fileInput.current.files[0].name);
    }


    render(){
        return(
            <>
                <h2>Input Form</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="text">Text Input</label>
                    <input type="text" id="text" 
                        value = {this.state.text} 
                        onChange = {this.handleInput}
                        name= "text"/>
                    <label htmlFor="date">Date Input</label>
                    <input type="date" id="date" 
                        value = {this.state.date} 
                        onChange = {this.handleInput}
                        name= "date"/>
                    <label htmlFor="file">File Input</label>
                    <input type="file" ref={this.fileInput}/>
                    <label htmlFor="readonly">Read-Only Input</label>
                    <input type="text" readOnly={true} id="readonly"/>
                    <label htmlFor="disableinput">Disabled Input</label>
                    <input type="text" disabled={true} id="disableinput"/>
                    <label htmlFor="textarea">Textarea</label>
                    <textarea name="area" id="textarea" cols="30" rows="10"
                        value={this.state.area} 
                        onChange = {this.handleInput}></textarea>
                    <label htmlFor="disabletextarea">Textarea Disabled</label>
                    <textarea name="area" id="disabletextarea" cols="30" rows="10" disabled={true}></textarea>
                    <input type="submit" value="submit" className="btn"></input>
                </form>
            </>
        )
    }
}

export default MultipleInput;