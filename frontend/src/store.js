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
    gardenReducer


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
