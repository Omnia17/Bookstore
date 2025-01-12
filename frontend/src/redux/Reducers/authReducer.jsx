// src/redux/authReducer.js
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/authAction';

const initialState = {
    isAuthenticated: false,
    loading: false,
    user: null,
    token: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return { ...state, loading: true };
      case LOGIN_SUCCESS:
        return {
            ...state,
            isAuthenticated: true,
            user: action.payload.user, // Ensure this matches your login response
            loading: false,
          };
      case LOGIN_FAILURE:
        return {
            ...state,
            isAuthenticated: false,
            user: null,
            loading: false,
            error: action.payload,
          };
                default:
        return state;
    }
  };
  
  export default authReducer;
  