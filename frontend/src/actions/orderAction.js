import axios from 'axios';
import {loadStripe} from '@stripe/stripe-js';

export const placeOrderAction = (reqBody) => async (dispatch) => {
    const stripe = await loadStripe('pk_test_51OHyz1SB7yI7Si8Nh90kpRQBPIDSidKNxyKSdT49idzoM8IcAULsXJdJzFQ8l95bJ9M3xis06Xu2WUIDU5W4EFnM00xOnAp5Vi');
    console.log("REqbody", reqBody);
  
    dispatch({ type: 'PLACE_ORDER_REQUEST' });
  
    try {
      const response = await axios.post('http://localhost:5000/api/orders/placeorder', reqBody, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = response.data;
      const { result, error } = await stripe.redirectToCheckout({ sessionId: data.id });
  
      if (error) {
        dispatch({ type: 'PLACE_ORDER_FAIL'});
        console.log('Error in Stripe Checkout:', error);
      } else {
        dispatch({ type: 'PLACE_ORDER_SUCCESS' });
        console.log('Order placed successfully:', result);
      }
    } catch (error) {
        dispatch({ type: 'PLACE_ORDER_FAIL', payload: { error } });

      console.log('Error in placing order:', error);
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