import React, { Component } from 'react';

import Aux from '../../../hoc/Auxillary/Auxillary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    //  For demonstration purposes only, otherwise OrderSummary can be a functional component
    // componentWillUpdate() {
    //     console.log('[OrderSummary] will update');
    // }

    render() {
        const ingredientsSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return <li key={igKey}><
                span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
            </li>
        })

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A tasty burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType='Danger' clicked={this.props.purchaseCanceled}>CANCEL</Button>
            <Button btnType='Success' clicked={this.props.purchaseContinued}>CONTINUE</Button>
        </Aux>
        );
    }
}

export default OrderSummary;