import {combineReducers} from 'redux'; 
import alertReducer from './reducers/alert/alert.reducer';
import authReducer from './reducers/auth/auth.reducer';

export default combineReducers({
    alert: alertReducer, 
    auth: authReducer
});