import axios from "axios";

export const signupAction = (user) => async dispatch => {
    dispatch({type: 'USER_REGISTER_REQUEST'})
    try {
        const res = await axios.post('http://localhost:5000/api/auth/signup', user);
        console.log(res, "this is responce");
        dispatch({type: 'USER_REGISTER_SUCCESS'})
    } catch (error) {
        dispatch({type: 'USER_REGISTER_FAIL', payload: error})
    }
}

export const loginAction = (user) => async dispatch => {
    dispatch({type: 'USER_LOGIN_REQUEST'});
    try {
        const res = await axios.post('http://localhost:5000/api/auth/login', user);
        dispatch({type: 'USER_LOGIN_SUCCESS', payload: res.data})
        localStorage.setItem("currentUser", JSON.stringify(res.data));
        window.location.href = '/';
    } catch (error) {
        dispatch({type: "USER_LOGIN_FAIL", payload: error});
    }
}


export const logoutAction = () => () => {
    localStorage.removeItem('currentUser');
    window.location.href = '/';
}


export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: 'GET_USER_REQUEST' });

  try {
    const res = await axios.get('http://localhost:5000/api/auth/getall-users');
    dispatch({ type: 'GET_USER_SUCCESS', payload: res.data });
  } catch (error) {
    // If there's an error, handle it more carefully
    if (error.response) {
      // The request was made and the server responded with a status code
      dispatch({ type: 'GET_USER_FAIL', payload: error.response.data });
    } else if (error.request) {
      // The request was made but no response was received
      dispatch({ type: 'GET_USER_FAIL', payload: 'No response received from the server.' });
    } else {
      // Something happened in setting up the request that triggered an Error
      dispatch({ type: 'GET_USER_FAIL', payload: 'An error occurred while making the request.' });
    }
  }
};
