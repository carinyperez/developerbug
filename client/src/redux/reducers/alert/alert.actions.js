import AlertActionTypes from "./alert.types";
import uuid from 'uuid/v4'; 

export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
    const id = uuid; 
    // call reducer based on the type 
    dispatch(({
        type: AlertActionTypes.SET_ALERT,
        payload: {msg, alertType, id}
    }));

    // dispatch 
    setTimeout(() => dispatch({type: AlertActionTypes.REMOVE_ALERT, payload: id}), timeout)
}