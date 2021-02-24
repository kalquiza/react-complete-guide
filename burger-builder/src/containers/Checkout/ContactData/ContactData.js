import React, { Component } from 'react';
import axios from '../../../axios-orders';

import classes from './ContactData.module.css';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode:''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        // console.log(this.props.ingredients);

        alert('Order Continued! (Soon...)');
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'Kristoffer Alquiza',
                address: {
                    street: 'Lunar St 1111',
                    zipCode: '00000',
                    country: 'The Moon'
                },
                email: 'notarealemail@testing.com',
            },
            deliveryMethod: 'Snail Express'
        }
        axios.post('/orders.json', order)
            .then(response => {
                // console.log(response)
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                console.log(error)
                this.setState({loading: false});
            });
    }

    render(){
        let form = (
            <form>
                <input type="text" className={classes.Input} name="name" placeholder="Your Name"></input>
                <input type="text" className={classes.Input} name="email" placeholder="Your Email"></input>
                <input type="text" className={classes.Input} name="street" placeholder="Street"></input>
                <input type="text" className={classes.Input} name="postal" placeholder="Postal Code"></input>
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />
        }

        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;