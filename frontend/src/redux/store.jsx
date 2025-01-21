import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import {thunk} from 'redux-thunk'; 
// Import your reducers
import authReducer from './Reducers/authReducer';  // For authentication state
import registerReducer from './Reducers/registerReducer';

const rootReducer = combineReducers({
  auth: authReducer,  // Combine reducers if you have multiple
  register: registerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
