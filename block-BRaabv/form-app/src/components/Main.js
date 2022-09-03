import React from 'react';
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            currentstep: 1,
            firstname: "",
            lastname: "",
            dob: "",
            address: "",
            message: "",
            choice: "",
            check: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert('you have registrated');
    }

    handleChange = ({target}) => {
        let {name, value} = target;

        this.setState({
            [name]: value
        })
    }

    next = () => {
        let currentStep = this.state.currentstep;
        currentStep = currentStep >= 2 ? 3 : currentStep + 1;
        this.setState({
            currentStep: currentStep
        })
    }

    prev = () => {
        let currentStep = this.state.currentstep;
        currentStep = currentStep <= 1 ? 1 : currentStep -1;
        this.setState({
            currentStep: currentStep
        })
    }

    previousButton(){
        let currentStep = this.state.currentstep;
        if(currentStep !== 1) {
            return(
                <button
                    className='btn'
                    type='button'
                    onClick={this.prev}
                >Back</button>
            )
        }
    }

    nextButton(){
        let currentStep = this.state.currentstep;
        if(currentStep < 3 ){
            return(
                <button
                    className='btn'
                    type='button'
                    onClick={this.next}
                >Next Step</button>
            )
        }
    }

    render() {
        let serial = ["Sign Up", "Message", "Checkbox"];
        return(
            <>
                <div className='container'>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <img src={this.currentstep ===1 
                            ? "/images/img1.jpg" 
                            : this.state.currentstep === 2
                            ? "/images/img2.jpg"
                            :"/images/img3.jpg"
                            } alt="background"/>
                        </div>
                    </form>
                </div>
                <div>
                    {
                        serial.map((data, i) => (
                            <p key={i}>
                                <span className={
                                    this.state.currentstep === i + 1 
                                    ? "selected-step" : ""
                                }>{i + 1}</span>
                                {data}
                            </p>
                        ))
                    }
                </div>
                <Step1 
                    currentstep = {this.state.currentstep}
                    handleChange = {this.handleChange}
                    email = {this.state.email}
                />
                <Step2
                    currentstep = {this.state.currentstep}
                    handleChange = {this.handleChange}
                    username = {this.state.username}
                />
                <Step3
                    currentStep={this.state.currentStep}
                    handleChange={this.handleChange}
                    password={this.state.password}
                />
                {}
            </>
        )
    }
}

export default Main;