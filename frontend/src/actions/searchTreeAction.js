import axios from 'axios';

export const searchTreeAction = (searchTerm) => async (dispatch) => {
    dispatch({ type: 'SEARCH_TREE_REQUEST' });

    try {
        const res = await axios.get(`http://localhost:5000/api/trees/search-tree`);
        const filteredTrees = res.data.filter((tree) => {
            return tree.name.toLowerCase().includes(searchTerm.toLowerCase());
          });
          console.log(filteredTrees);
        dispatch({ type: 'SEARCH_TREE_SUCCESS', payload: filteredTrees });
    } catch (error) {
        dispatch({ type: 'SEARCH_TREE_FAIL', payload: error });
    }
};
