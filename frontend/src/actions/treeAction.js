import axios from 'axios';

export const getAllTree = () => async (dispatch) => {
    dispatch({type : 'GET_TREE_REQUEST'})
    try {
        const res = await axios.get('http://localhost:5000/api/trees/getall');
        dispatch({type : 'GET_TREE_SUCCESS', payload: res.data})
    } catch (error) {
        dispatch({type : 'GET_TREE_FAIL', payload: error})
    }
}
export const addTree = (treeData) => async (dispatch) => {
    dispatch({ type: 'ADD_TREE_REQUEST' });
    try {
      const res = await axios.post('http://localhost:5000/api/trees/addtree', treeData);
      dispatch({ type: 'ADD_TREE_SUCCESS', payload: res.data });
    } catch (error) {
      dispatch({ type: 'RESET_ADD_TREE_STATE', payload: error.message || 'An error occurred' });
    }
  };
  