export const signupReducer = (state = {}, action) => {
    switch(action.type){
        case 'USER_REGISTER_REQUEST':
            return {
                loading : true,

            }
        case 'USER_REGISTER_SUCCESS':
            return {
                loading : false,
                success : true
            }
        case 'USER_REGISTER_FAIL':
            return {
                loading: false,
                error: action.payload
            }
        default:
            return {state};
    }
}
export const getAllUsersReducer = (state = {}, action) => {
    switch(action.type){
        case 'GET_USER_REQUEST':
            return {
                loading : true,
                error: null

            }
        case 'GET_USER_SUCCESS':
            return {
                users: action.payload,
                loading : false,
                success : true
            }
        case 'GET_USER_FAIL':
            return {
                loading: false,
                error: action.payload,
                users: {},
            }
        default:
            return state;
    }
}



export const loginUserReducer = (state = {}, action)=> {
    switch(action.type){
        case "USER_LOGIN_REQUEST":
            return {
                loading: true
            };
        case "USER_LOGIN_SUCCESS":
            return{
                loading:true,
                success: true,
                currentUser: action.payload
            };
        case "USER_LOGIN_FAIL":
            return {
                loading: false,
                error: action.payload
            };
        default :
            return state;
    }
} 