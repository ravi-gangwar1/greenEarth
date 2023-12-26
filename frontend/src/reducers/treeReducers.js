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
  export const AddTreeReducer = (state = { loading: false, success: false, error: null }, action) => {
    switch (action.type) {
      case 'ADD_TREE_REQUEST':
        return { ...state, loading: true, success: false, error: null };
  
      case 'ADD_TREE_SUCCESS':
        return {
          ...state,
          success: true,
          loading: false,
          error: null,
        };
  
      case 'ADD_TREE_FAIL':
        return {
          ...state,
          error: action.payload,
          loading: false,
          success: false,
        };
  
      // Optionally, handle a 'RESET' action to reset the state to its initial values
      case 'RESET_ADD_TREE_STATE':
        return { loading: false, success: false, error: null };
  
      default:
        return state;
    }
  };
  