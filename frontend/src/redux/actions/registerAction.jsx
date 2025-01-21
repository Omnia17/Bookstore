import axios from 'axios';

export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: 'REGISTER_REQUEST' });

    const response = await axios.post('http://localhost:5000/api/auth/register', userData);

    dispatch({
      type: 'REGISTER_SUCCESS',
      payload: response.data.message,
    });
  } catch (error) {
    dispatch({
      type: 'REGISTER_FAILURE',
      payload: error.response?.data?.message || 'Server error',
    });
  }
};
