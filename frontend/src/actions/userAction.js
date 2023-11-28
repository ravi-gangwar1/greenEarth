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