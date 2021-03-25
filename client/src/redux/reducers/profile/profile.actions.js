import axios from 'axios'; 
import {setAlert} from '../alert/alert.actions'; 
import AuthActionTypes from '../auth/auth.types';
import ProfileActionTypes from './profile.types';

// Get current users profile 
export const getCurrentProfile = () => async dispatch => {
    try {
        // only returns profile if there is a profile associated with the user's token 
        const res = await axios.get('/api/profile/me');
        console.log(res);
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

// Get all profiles 
export const getAllProfiles = () => async dispatch => {
  // dispatch({type: ProfileActionTypes.CLEAR_PROFILE})
  try {
    const res = await axios.get('api/profile'); 
    console.log(res); 
    dispatch({
      type: ProfileActionTypes.GET_PROFILES,
      payload: res.data
    })
    dispatch(setAlert('Got profiles', 'success'))
  } catch (err) {
    console.log(err)
    dispatch({
      type: ProfileActionTypes.PROFILE_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    })
  }
}

// Get profile by id 
export const getProfileById = (user_id) => async dispatch => {
  console.log(user_id); 
  try {
    const res = await axios.get(`/api/profile/user/${user_id}`);
    console.log(res);
    dispatch({
      type: ProfileActionTypes.GET_PROFILE, 
      payload: res.data
    })
    dispatch(setAlert('Got profile', 'success'))
  } catch (err) {
    console.error(err); 
    dispatch({
      type: ProfileActionTypes.PROFILE_ERROR, 
      payload: {msg: err.response.statusText, status: err.response.status}
    })
  }
}

// get github repos 
export const getGithubRepos = (username) => async dispatch =>  {
  try {
    const res = await axios.get(`api/profile/github/${username}`); 
    dispatch({
      type: ProfileActionTypes.GET_REPOS, 
      payload: res.data
    })
    dispatch(setAlert('Got gihub repos', 'success')); 
  } catch (err) {
    dispatch({
      type: ProfileActionTypes.PROFILE_ERROR, 
      payload: {msg: err.response.statusText, status: err.response.status}
    }) 
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
    // {data: "Server Error", status: 500, statusText: "Internal Server Error", headers: {…}, config: {…}, …}
    const errors = err.response.data.errors; 
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: ProfileActionTypes.PROFILE_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    })
  }
  
}

// delete experience 
export const deleteExperience = (exp_id) => async dispatch => {
  try {
    const res = await axios.delete(`api/profile/experience/${exp_id}`); 
    dispatch({
      type: ProfileActionTypes.UPDATE_PROFILE,
      payload: res.data
    }) 
    dispatch(setAlert('Experience deleted', 'success'))
  } catch (err) {
    dispatch({
      type: ProfileActionTypes.PROFILE_ERROR, 
      payload: {msg: err.response.statusText, status: err.response.status}
    })
  } 
}

// Delete education 
export const deleteEducation = (edu_id) =>  async dispatch => {
  try {
    const res = await axios.delete(`api/profile/education/${edu_id}`); 
    dispatch({
      type: ProfileActionTypes.UPDATE_PROFILE, 
      payload: res.data
    })
    dispatch(setAlert('Education deleted', 'success')); 
  } catch (err) {
    // {data: "Server Error", status: 500, statusText: "Internal Server Error", headers: {…}, config: {…}, …}
    dispatch({
      type: ProfileActionTypes.PROFILE_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status} 
    })
  }
}

// Delete account and clear profile 
export const deleteAccount = (history) => async dispatch => {
  if(window.confirm('This will delete your account PERMANENTLY!')) {
    console.log('delete account'); 
    try {
      await axios.delete('api/profile');
      dispatch({
        type: AuthActionTypes.ACCOUNT_DELETED, 
      })  
      dispatch({
        type: ProfileActionTypes.CLEAR_PROFILE
      }) 
      dispatch(setAlert('Your account has been permanently deleted'));

    } catch (err) {
      dispatch({
        type: ProfileActionTypes.PROFILE_ERROR, 
        payload: {msg: err.response.statusText, status: err.response.status}
      }) 
    }
  };
}



