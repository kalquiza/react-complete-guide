import React, { Component } from 'react';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        this.props.onFetchOrders(this.props.token);
    }

    render() {
        let orders = <p>Orders couldn't be loaded :(</p>;
        if (this.props.loading) orders = <Spinner />;
        if (!this.props.loading && !this.props.error) {
            orders = (
                <div>
                    {this.props.orders.map(order => (
                        <Order
                            key={order.id}
                            ingredients={order.ingredients}
                            price={order.price} />
                    ))}
                </div>
            );
        }
        return orders;
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        error: state.order.error,
        token: state.auth.token
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token) => dispatch(actions.fetchOrders(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));
