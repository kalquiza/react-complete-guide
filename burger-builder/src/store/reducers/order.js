import * as actionTypes from '../actions/actionTypes';

const initialState = {
    orders: [],
    loading: false,
    error: false,
    purchased: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INIT:
            return {
                ...state,
                purchased: false,
                loading: false,
                error: false
            }
        case actionTypes.PURCHASE_BURGER_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder = {
                ...action.orderData,
                id: action.orderId
            };
            return {
                ...state,
                loading: false,
                purchased: true,
                error: false,
                orders: state.orders.concat(newOrder)
            };
        case actionTypes.PURCHASE_BURGER_FAIL:
            return {
                ...state,
                loading: false,
                error: true
            };
        case actionTypes.FETCH_ORDERS_START:
            return {
                ...state,
                loading: true,
                error: false
            };
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                orders: action.orders
            };
        case actionTypes.FETCH_ORDERS_FAIL:
            return {
                ...state,
                error: true
            };
        default:
            return state;
    }
};

export default reducer;