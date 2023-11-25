export const treeReducer = (state = { trees: [] }, action) => {
    switch (action.type) {
      case 'GET_TREE_REQUEST':
        return { ...state, loading: true };
  
      case 'GET_TREE_SUCCESS':
        return {
          trees: action.payload,
          loading: false,
        };
  
      case 'GET_TREE_FAIL':
        return {
          error: action.payload,
          loading: false,
        };
  
      default:
        return state;
    }
  };
  