const initialState = {
    bucketItems: [],
  };
  
  export const bucketReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_BUCKET':
        return {
          ...state,
          bucketItems: [...state.bucketItems, action.payload],
        };
      default:
        return state;
    }
  };

  