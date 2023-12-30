import axios from "axios";

export const signupAction = (user) => async dispatch => {
    dispatch({type: 'USER_REGISTER_REQUEST'})
    try {
        const res = await axios.post('http://localhost:5000/api/auth/signup', {user: user});
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


// Reset password 

export const resetAction = (email, userId) => async dispatch => {
  dispatch({type: 'USER_RESET_PASSWORD_REQUEST'});
  try {
      const res = await axios.post('http://localhost:5000/api/auth/reset-password', {email : email, _id: userId});
      dispatch({type: 'USER_RESET_PASSWORD_SUCCESS', payload: res.data})
      console.log(res.data);
  } catch (error) {
      dispatch({type: "USER_RESET_PASSWORD_FAIL", payload: error});
  }
}



export const otpVerifyAction = (email, otp) => async dispatch => {
  dispatch({type: 'USER_OTP_REQUEST'});
  try {
      const res = await axios.post('http://localhost:5000/api/auth/verify-otp', {email : email, code: otp});
      dispatch({type: 'USER_OTP_SUCCESS', payload: res.data})
  } catch (error) {
      dispatch({type: "USER_OTP_FAIL", payload: error});
  }
}


export const changePasswordAction = ({email, newPassword}) => async dispatch => {
  dispatch({type: 'CHANGE_USER_PASSWORD_REQUEST'});
  try {
      const res = await axios.post('http://localhost:5000/api/auth/change-password', {email, newPassword});
      dispatch({type: 'CHANGE_USER_PASSWORD_SUCCESS', payload: res.data})
  } catch (error) {
      dispatch({type: "CHANGE_USER_PASSWORD_FAIL", payload: error});
  }
}

