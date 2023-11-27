const initialState = {
    bucketItems: [],
  };
  
  export const bucketReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_BUCKET':
        const alreadyExists = state.bucketItems.find(item=> item._id === action.payload._id);
        if(alreadyExists){
          return {
            ...state,
            bucketItems : state.bucketItems.map(item=> item._id === action.payload._id ? action.payload : item)
          }
        }else{
        return {
          ...state,
          bucketItems: [...state.bucketItems, action.payload],
        };

      }

      default:
        return state;
    }
  };

  