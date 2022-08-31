import React from "react";

class Validation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            confirmpassword: "",
            errors: {
                username: "",
                email: "",
                password: "",
                confirmpassword: "",
            }
        }
    }

    validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    handleInput = ({target}) => {
        let {name, value} = target;
        let errors = this.state.errors;

        switch (name) {
            case "username":
                errors.username = value.length < 4 ? "This username is not valid!" : "";
                break;
            case "email":
                errors.email = this.validateEmail(value) ? "" : "Email is not valid!";
                break;
            case "password":
                errors.password = value.length < 6 ? "Password can not be less than 6 characters" : "";
                break;
            case "confirmpassword":
                errors.confirmpassword = value !== this.state.password ? "This password is not valid!" : ""
                break;
            default:
                break;
        }

        this.setState({ errors, [name] : value});
    }

    handleSubmit = () => {
        console.log()
    }

    render(){
        let {username, email, password, confirmpassword} = this.state.errors;
        return(
            <>
            <h2>Form Validation</h2>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username"
                value={this.state.username} 
                onChange = {this.handleInput}
                className = {username && "error"}/>
                <span>{username}</span>

                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email"  
                value={this.state.email}
                onChange = {this.handleInput}
                className = {email && "error"}/>
                <span>{email}</span>

                <label htmlFor="password">Password</label>
                <input type="text" name="password" id="password"
                value={this.state.password}
                onChange = {this.handleInput}
                className = {password && "error"}/>
                <span>{password}</span>

                <label htmlFor="confirmpassword">Confirm Password</label>
                <input type="text" name="confirmpassword" id="confirmpassword" 
                value={this.state.confirmpassword}
                onChange = {this.handleInput}
                className = {confirmpassword && "error"}/>
                <span>{confirmpassword}</span>
            </form>
            </>
        )
    }
}

export default Validation;