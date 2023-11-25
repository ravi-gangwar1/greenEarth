import axios from 'axios';

export const getAllTree = () => async (dispatch) => {
    dispatch({type : 'GET_TREE_REQUEST'})
    try {
        const res = await axios.get('http://localhost:5000/api/trees/getall');
        console.log(res);
        dispatch({type : 'GET_TREE_SUCCESS', payload: res.data})
    } catch (error) {
        dispatch({type : 'GET_TREE_FAIL', payload: error})
    }
}