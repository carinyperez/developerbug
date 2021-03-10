import axios from 'axios'; 
import {setAlert} from '../alert/alert.actions'; 
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
            payload: {msg: err.response.statusText, status: err.response.status}
        })
    }
}