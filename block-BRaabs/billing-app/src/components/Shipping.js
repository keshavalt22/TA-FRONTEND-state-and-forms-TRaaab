import React from 'react';

class Shipping extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            shipping: {
                address: "",
                zip: "",
                city: "",
                country: ""
               },
            billing: {
                address: "",
                zip: "",
                city: "",
                country: ""
               },
            isChecked: false
        }
    }

    handleshippingInput = ({target}) => {
        let {name, value} = target;
        this.setState({
            shipping: {...this.state.shipping, [name]: [value]},
        })
    }

    handlebillingInput = ({target}) => {
        let {name, value} = target;
        this.setState({
            billing: {...this.state.billing, [name]: [value]},
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    handlechecked = () => {
        this.setState({
            isChecked: !this.state.isChecked,
        })
    }



    render() {

        let {shipping, billing, isChecked} = this.state;

        let billingData = isChecked ? shipping: billing;
        
        return(
            <div className='flex'>
            <div>
                <h2>Shipping Address</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="address">Address</label>
                    <input type="text" id='address' name='address' 
                    value={this.state.shipping.address}
                    onChange = {this.handleshippingInput}/>

                    <label htmlFor="zip">ZIP/Postal Code</label>
                    <input type="text" id='zip' name='zip' 
                    value={this.state.shipping.zip}
                    onChange = {this.handleshippingInput}/>

                    <label htmlFor="city">City</label>
                    <input type="text" id='city' name='city' 
                    value={this.state.shipping.city}
                    onChange = {this.handleshippingInput}/>

                    <label htmlFor="country">Country</label>
                    <input type="text" id='country' name='country' 
                    value={this.state.shipping.country}
                    onChange = {this.handleshippingInput}/>
                </form>
            </div>
            <div>
            <h2>Billing Address</h2>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="checked"> Same as the Shipping Address? </label>
                <input type="checkbox" id='checked' onChange={this.handlechecked}/>
                <label htmlFor="address">Address</label>
                <input type="text" id='address' name='address' 
                value={billingData.address}
                onChange = {this.handlebillingInput}/>

                <label htmlFor="zip">ZIP/Postal Code</label>
                <input type="text" id='zip' name='zip' 
                value={billingData.zip}
                onChange = {this.handlebillingInput}/>

                <label htmlFor="city">City</label>
                <input type="text" id='city' name='city' 
                value={billingData.city}
                onChange = {this.handlebillingInput}/>

                <label htmlFor="country">Country</label>
                <input type="text" id='country' name='country' 
                value={billingData.country}
                onChange = {this.handlebillingInput}/>
                
                <input type="submit" id="submit" onClick={this.handleSubmit}></input>
            </form>
        </div>
        </div>
        )
    }
}

export default Shipping;