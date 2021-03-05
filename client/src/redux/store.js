import {createStore, applyMiddleware} from 'redux'; 
import {composeWithDevTools} from 'redux-devtools-extension'; 
import thunk from 'redux-thunk'; 
import rootReducer from './root-reducer';
import logger from 'redux-logger'; 


const INITIAL_STATE = {}; 

const middlewares = [thunk]; 

if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger); 
}

const store = createStore(rootReducer, INITIAL_STATE, composeWithDevTools(applyMiddleware(...middlewares))); 

export default store;



