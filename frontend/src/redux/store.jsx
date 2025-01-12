import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import {thunk} from 'redux-thunk'; 
// Import your reducers
import authReducer from './Reducers/authReducer';  // For authentication state

const rootReducer = combineReducers({
  auth: authReducer,  // Combine reducers if you have multiple
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
