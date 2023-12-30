import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { treeReducer } from "./reducers/treeReducers";
import { bucketReducer } from "./reducers/bucketReducer";
import { signupReducer } from "./reducers/userReducer";
import { loginUserReducer } from "./reducers/userReducer";
import { placeOrderReducer } from "./reducers/orderReducer.js";
import { getUserOrdersReducer } from "./reducers/orderReducer.js";
import { AddTreeReducer } from "./reducers/treeReducers";
import { getTreeByIdReducer } from "./reducers/treeReducers";
import { updateTreeByIdReducer } from "./reducers/treeReducers";
import { deleteTreeByIdReducer } from "./reducers/treeReducers";
import { getAllUsersReducer } from "./reducers/userReducer";
import { getAllUsersOrdersReducer } from "./reducers/orderReducer.js";
import { deliveredOrderMarkReducer } from "./reducers/orderReducer.js";
import { gardenReducer } from "./reducers/gardenReducer.js";
import { resetPasswordReducer } from "./reducers/userReducer";
import { otpVerifyReducer } from "./reducers/userReducer"; 
import { changePasswordReducer } from "./reducers/userReducer";
import { contactMessageReducer } from "./reducers/messageReducer.js";
import { deleteUserReducer } from "./reducers/userReducer";
import { makeAdminReducer } from "./reducers/userReducer";
import { makeWorkerReducer } from "./reducers/userReducer";
import { removeAdminReducer } from "./reducers/userReducer";
const rootReducer = combineReducers({
    treeReducer,
    bucketReducer,
    signupReducer,
    loginUserReducer,
    placeOrderReducer,
    getUserOrdersReducer,
    AddTreeReducer,
    getTreeByIdReducer,
    updateTreeByIdReducer,
    deleteTreeByIdReducer,
    getAllUsersReducer,
    getAllUsersOrdersReducer,
    deliveredOrderMarkReducer,
    gardenReducer,
    resetPasswordReducer,
    otpVerifyReducer,
    changePasswordReducer,
    contactMessageReducer,
    removeAdminReducer,
    makeWorkerReducer,
    makeAdminReducer,
    deleteUserReducer


});
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;
const bucketItems = localStorage.getItem('bucketItems') ? JSON.parse(localStorage.getItem('bucketItems')) : [];

const initialState = {
    bucketReducer: {
        bucketItems: bucketItems
    },
    loginUserReducer : {
        currentUser : currentUser,
    },
  };
  

const middleware = [thunk];

// Create the Redux store
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
