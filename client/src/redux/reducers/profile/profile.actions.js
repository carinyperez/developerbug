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
    const res = await axios.post('api/profile', formData);
    console.log(res); 
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


export const addExperience = (formData, history) => async dipspatch => {
    console.log('add experience')
}