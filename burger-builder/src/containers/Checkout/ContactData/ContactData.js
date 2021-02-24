import React, { Component } from 'react';

import classes from './ContactData.module.css';
import Button from'../../../components/UI/Button/Button';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode:''
        }
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);
    }

    render(){
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                <form>
                    <input type="text" className={classes.Input} name="name" placeholder="Your Name"></input>
                    <input type="text" className={classes.Input} name="email" placeholder="Your Email"></input>
                    <input type="text" className={classes.Input} name="street" placeholder="Street"></input>
                    <input type="text" className={classes.Input} name="postal" placeholder="Postal Code"></input>
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;