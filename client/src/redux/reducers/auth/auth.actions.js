import axios from 'axios'; 
import AuthActionTypes from './auth.types';
import {setAlert} from '../alert/alert.actions'
import setAuthToken from '../../../utils/setAuthToken';
import ProfileActionTypes from '../profile/profile.types';

// Load User 
export const loadUser = () => async dispatch => {
    console.log('load user'); 
    // if there is a token in local storage set auth token in the headers
    //x-auth-token: "eyJhbGciOi..."
    if(localStorage.token) {
        setAuthToken(localStorage.token); 
    } 
    // hit up our endpoint to signup a user using our backend auth route 
    try {
        const res = await axios.get('/api/auth'); 
        console.log(res); 
        dispatch({
            type: AuthActionTypes.USER_LOADED,
            payload: res.data
        })
        
    } catch (err) {
        dispatch({
            type: AuthActionTypes.AUTH_ERROR
        })
        
    }
}


//signup a user 
export const signup = ({name, email, password}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({name, email, password}); 
    try {
        const res = await axios.post('/api/users', body, config);
        dispatch({
            type: AuthActionTypes.SIGNUP_SUCCESS, 
            payload: res.data
        }); 
        dispatch(loadUser()); 
    // if empty fields call the alert action   
    } catch (err) {
        //{name: "", email: "", password: ""}
        const errors = err.response.data.errors; 
        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
        dispatch({
            type: AuthActionTypes.SIGNUP_FAILURE
        })
    }
}
// Login User
export const login = (email, password) => async dispatch => {
    const body = { email, password };
  
    try {
      const res = await axios.post('api/auth', body);
      console.log(res);
      dispatch({
        type: AuthActionTypes.LOGIN_SUCCESS,
        payload: res.data
      });
  
      dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors;
  
      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
      }
  
      dispatch({
        type: AuthActionTypes.LOGIN_FAILURE
      });
    }
  };
  
  // Logout/clear profile 
  export const logout = () => dispatch =>  {
    dispatch({ type: ProfileActionTypes.CLEAR_PROFILE});
    dispatch({ type: AuthActionTypes.LOGOUT });
  }
   