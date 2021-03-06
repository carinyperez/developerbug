import AuthActionTypes from "./auth.types";


const INITIAL_STATE  = {
    token: localStorage.getItem('token'), 
    isAuthenticated: null,
    // once user has been loaded set to false 
    loading: true,
    user: null
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case AuthActionTypes.SIGNUP_SUCCESS: 
        localStorage.setItem('token', action.payload.token)
        // one beautiful object 
        return {
            ...state,
            ...action.payload,
            isAuthenticated: true, 
            loading: false 
        }
        case AuthActionTypes.SIGNUP_FAILURE:
        localStorage.removeItem('token'); 
        return {
            ...state, 
            token: null, 
            isAuthenticated: false, 
            loading: false
        }
        default: 
        return state 
    }
}

export default authReducer;
