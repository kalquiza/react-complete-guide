import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    orders: [],
    loading: false,
    error: false,
    purchased: false
}

const purchaseInit = (state, action) => {
    return updateObject(state, {purchased: false, loading: false, error: false});
};

const purchaseBurgerStart = (state, action) => {
    return updateObject(state, { loading: true});
};

const purchaseBurgerSuccess = (state, action) => {
    const newOrder = updateObject(action.orderData, {id: action.orderId});
    return updateObject(state, {loading: false, purchased: true, error: false, orders: state.orders.concat(newOrder)});
};

const purchaseBurgerFail = (state, action) => {
    return updateObject(state, {loading: false, error: true});
};

const fetchOrdersStart = (state, action) => {
    return updateObject(state, {loading: true, error: false});
};

const fetchOrdersSuccess = (state, action) => {
    return updateObject(state, {loading: false, error: false, orders: action.orders});
};

const fetchOrdersFail = (state, action) => {
    return updateObject( state, {loading: false, error: true} );
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INIT: return purchaseInit(state, action);
        case actionTypes.PURCHASE_BURGER_START: return purchaseBurgerStart(state, action);
        case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess(state, action);
        case actionTypes.PURCHASE_BURGER_FAIL: return purchaseBurgerFail(state, action);
        case actionTypes.FETCH_ORDERS_START: return fetchOrdersStart(state, action);
        case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrdersSuccess(state, action);
        case actionTypes.FETCH_ORDERS_FAIL: return fetchOrdersFail(state, action);
        default: return state;
    }
};

export default reducer;