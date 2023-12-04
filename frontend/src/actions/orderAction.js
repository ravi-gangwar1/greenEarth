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
