export const getMembershipReducer = (state = {}, action) => {
    switch (action.type) {
      case 'GET_MEMBERSHIP_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
  
      case 'GET_MEMBERSHIP_SUCCESS':
        return {
          ...state,
          loading: false,
          sessionId: action.payload.sessionId,
          error: null,
        };
  
      case 'GET_MEMBERSHIP_FAIL':
        return {
          ...state,
          loading: false,
          sessionId: null,
          error: action.payload.error,
        };
  
      default:
        return state;
    }
  };
