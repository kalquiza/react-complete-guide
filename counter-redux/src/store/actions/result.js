import * as actionTypes from './actionTypes';

export const saveResult = result => {
    // const updatedResponse = response * 2;
    return {
        type: actionTypes.STORE_RESULT,
        result: result
    };
}

export const storeResult = result => {
    return dispatch => {
        setTimeout( () => {
            dispatch(saveResult(result));
        }, 2000);
    } 
};

export const deleteResult = id => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: id
    }
};