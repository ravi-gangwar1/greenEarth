
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

export const getMembershipAction = ({ _id, membership }) => async (dispatch) => {
    try {
        const stripe = await loadStripe('pk_test_51OHyz1SB7yI7Si8Nh90kpRQBPIDSidKNxyKSdT49idzoM8IcAULsXJdJzFQ8l95bJ9M3xis06Xu2WUIDU5W4EFnM00xOnAp5Vi');

        dispatch({ type: 'GET_MEMBERSHIP_REQUEST' });

        const response = await axios.post('http://localhost:5000/api/orders/get-membership', { _id, membership }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = response.data;
        const { error, paymentIntent } = await stripe.redirectToCheckout({ sessionId: data.id });

        if (error) {
            dispatch({ type: 'GET_MEMBERSHIP_FAIL', payload: { error: error.message } });
            console.error(error.message);
        } else if (paymentIntent) {
            // Handle successful checkout
            dispatch({ type: 'GET_MEMBERSHIP_SUCCESS' });
        }
    } catch (error) {
        // Log more details about the error
        dispatch({ type: 'GET_MEMBERSHIP_FAIL', payload: { error: error.message } });
        console.error(error.message);
    }
};
