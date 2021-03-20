import axios from 'axios'; 
import {setAlert} from '../alert/alert.actions'; 
import ProfileActionTypes from './profile.types';


// Get current users profile 
export const getCurrentProfile = () => async dispatch => {
    try {
        // only returns profile if there is a profile associated with the user's token 
        const res = await axios.get('/api/profile/me');
        dispatch({
            type: ProfileActionTypes.GET_PROFILE,
            payload: res.data
        })
    } catch (err) {
        // otherwise will throw a 400 error 
        dispatch({
            type: ProfileActionTypes.PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
            
        })
    }
}

// Create or update profile
export const createProfile = (formData, history, edit = false) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const res = await axios.post('api/profile', formData, config);
    dispatch({
      type: ProfileActionTypes.GET_PROFILE,
      payload: res.data
    });

    dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'));

    if (!edit) {
      history.push('/dashboard');
    }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: ProfileActionTypes.PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}

// Add experience 
export const addExperience = (formData, history) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        'Content-Type':'application/json'
      }
    }
    const res = await axios.put('api/profile/experience', formData);
      dispatch({
        type: ProfileActionTypes.UPDATE_PROFILE,
        payload: res.data
      })
      dispatch(setAlert('Experience added', 'success'));
      history.push('/dashboard'); 
    } catch (err) {
      const errors = err.response.data.errors; 
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }
      dispatch({
        type: ProfileActionTypes.PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      })
    }
}

// Add education 
export const addEducation = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const res = await axios.put('api/profile/education',formData, config); 
    dispatch({
      type: ProfileActionTypes.UPDATE_PROFILE,
      payload: res.data
    })
    dispatch(setAlert('Education added', 'success')); 
    history.push('/dashboard');

  } catch (err) {
    console.log(err.response); 
    const errors = err.response.data.errors; 
    if (errors) {
      console.log(errors.response); 
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: ProfileActionTypes.PROFILE_ERROR,
      payload: {msg: err.response.status, status: err.response.statusText}
    })
  }
  
}