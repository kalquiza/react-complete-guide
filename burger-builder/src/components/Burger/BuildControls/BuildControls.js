import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},

]

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <strong>Current Price: ${props.price.toFixed(2)}</strong>
            {controls.map(ctrl => (
                <BuildControl 
                    key={ctrl.label}
                    label={ctrl.label} 
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemoved(ctrl.type)} 
                    disabled={props.disabled[ctrl.type]} />
            ))}
            <button 
                className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={props.ordered}>{props.isAuthenticated ? 'Place Order' : 'Sign up to order'}</button>
        </div>
    );
};

export default buildControls;