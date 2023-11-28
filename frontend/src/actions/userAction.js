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


export const logoutAction = () => (dispatch) => {
    localStorage.removeItem('currentUser');
    window.location.href = '/';
}