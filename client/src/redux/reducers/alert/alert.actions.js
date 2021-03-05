import AlertActionTypes from "./alert.types";
import uuid from 'uuid/v4'; 

export const setAlert = (msg, alertType) => dispatch => {
    const id = uuid; 
    // call reducer based on the type 
    dispatch(({
        type: AlertActionTypes.SET_ALERT,
        payload: {msg, alertType, id}
    }))
}