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

export const resetPasswordReducer = (state = {}, action)=> {
    switch(action.type){
        case "USER_RESET_PASSWORD_REQUEST":
            return {
                loading: true,
                success: null,
                error: null

            };
        case "USER_RESET_PASSWORD_SUCCESS":
            return{
                loading:false,
                success: true,
            };
        case "USER_RESET_PASSWORD_FAIL":
            return {
                loading: false,
                success: false,
                error: action.payload
            };
        default :
            return state;
    }
} 
export const otpVerifyReducer = (state = {}, action)=> {
    switch(action.type){
        case "USER_OTP_REQUEST":
            return {
                ...state,
                otpVerifyloading: true,
                otpVerifysuccess: null,
                otpVerifyerror: null

            };
        case "USER_OTP_SUCCESS":
            return{
                ...state,
                otpVerifyloading:false,
                otpVerifysuccess: true,
                otpVerifyerror:null
            };
        case "USER_OTP_FAIL":
            return {
                otpVerifyloading: false,
                otpVerifysuccess: false,
                otpVerifyerror: action.payload
            };
        default :
            return state;
    }
}

export const changePasswordReducer = (state = {}, action)=> {
    switch(action.type){
        case "CHANGE_USER_PASSWORD_REQUEST":
            return {
                ...state,
                changePasswordloading: true,
                changePasswordsuccess: null,
                changePassworderror: null

            };
        case "CHANGE_USER_PASSWORD_SUCCESS":
            return{
                ...state,
                changePasswordloading:false,
                changePasswordsuccess: true,
                changePassworderror:null
            };
        case "CHANGE_USER_PASSWORD_FAIL":
            return {
                changePasswordloading: false,
                changePasswordsuccess: false,
                changePassworderror: action.payload
            };
        default :
            return state;
    }
} 