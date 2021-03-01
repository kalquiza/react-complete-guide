const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {counter: state.counter + 1}
        case 'DECREMENT':
            return {counter: state.counter - 1}
        case 'ADD_5':
            return {counter: state.counter + 5}
        case 'SUBTRACT_5':
            return {counter: state.counter - 5}        
        default:
            return state;
    }
};

export default reducer;