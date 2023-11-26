const initialState = {
    bucketItems: [],
  };
  
  export const bucketReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_BUCKET':
        return {
          ...state,
          bucketItems: [...state.cartItems, action.payload],
        };
      default:
        return state;
    }
  };
  