import {combineReducers} from 'redux'; 
import alertReducer from './reducers/alert/alert.reducer';
import authReducer from './reducers/auth/auth.reducer';
import postsReducer from './reducers/posts/posts.reducer';
import profileReducer from './reducers/profile/profile.reducer';

export default combineReducers({
    alert: alertReducer, 
    auth: authReducer, 
    profile: profileReducer,
    posts: postsReducer
});