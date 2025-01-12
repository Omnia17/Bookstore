// src/redux/actions/authActions.js
import axios from 'axios';

// Action types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// Action creators
export const login = (email, password) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        user: response.data.user, // Ensure the backend provides `user` and `token`
        token: response.data.token,
      },
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: error.message,
    });
  }
};
