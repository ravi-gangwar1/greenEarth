import axios from 'axios';

export const placeOrder = (token, total) => async (dispatch, getState) => {
    dispatch({ type: 'PLACE_ORDER_REQUEST' });
    const currentUser = getState().loginUserReducer.currentUser;
    const bucketItems = getState().bucketReducer.bucketItems;
    try {
        console.log({ token, total, currentUser, bucketItems });
        const res = await axios.post('http://localhost:5000/api/orders/placeorder', { token, total, currentUser, bucketItems });
        dispatch({ type: 'PLACE_ORDER_SUCCESS' });
        console.log(res);
    } catch (error) {
        dispatch({ type: 'PLACE_ORDER_FAIL' });
        console.log('error in action frontend', error);
    }
};


export const getUserOrders = () => async (dispatch, getState) => {
    const currentUser = getState().loginUserReducer.currentUser;
    dispatch({ type: 'USER_ORDER_REQUEST' });
    try {
        const res = await axios.post('http://localhost:5000/api/orders/getorders', { userId: currentUser.data._id });
        dispatch({ type: 'USER_ORDER_SUCCESS', payload: res.data });
    } catch (error) {
        dispatch({ type: 'USER_ORDER_FAIL', payload: error });
    }
}
export const getAllOrders = () => async (dispatch) => {
    dispatch({ type: 'ALL_ORDER_REQUEST' });
    try {
        const res = await axios.post('http://localhost:5000/api/orders/admin/getAllOrders');
        dispatch({ type: 'ALL_ORDER_SUCCESS', payload: res.data });
    } catch (error) {
        dispatch({ type: 'ALL_ORDER_FAIL', payload: error });
    }
}


export const deliveredOrderMark = (orderId) => async (dispatch) => {
    dispatch({ type: 'DELIVERED_ORDER_REQUEST' });
    try {
        const res = await axios.post('http://localhost:5000/api/orders/admin/delivered-order', {orderId});
        dispatch({ type: 'DELIVERED_ORDER_SUCCESS', payload: res.data });
        window.location.reload(false);  // Correct casing
    } catch (error) {
        dispatch({ type: 'DELIVERED_ORDER_FAIL', payload: error });
    }
};