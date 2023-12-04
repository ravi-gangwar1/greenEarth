import express from "express";
import { v4 as uuidv4 } from 'uuid';
import Stripe from 'stripe';


const stripe = new Stripe('sk_test_51OHyz1SB7yI7Si8NED0HEr2OGThJUoUIYHATxbT9SY9ZKuaWI09BoZjGRQ0dVh4HevuS0ahzpNVQwIXAW10lPc4P0018ZXFqp6');
const orderRouter = express.Router();

orderRouter.post('/placeorder', async (req, res) => {
    const { token, total, currentUser, bucketItems } = req.body;
    try {
        // Create a customer in Stripe
        const customer = await stripe.customers.create({
            email: token.email,
          });

        // Create a charge for the customer
        const payment = await stripe.charges.create({
            amount: total * 100,
            currency: 'inr',
            customer: customer.id,
            receipt_email: token.email
        }, {
            idempotencyKey: uuidv4()
        });
        
        console.log(payment , "payments");
        if (payment) {
            res.status(200).send('Payment Success');
        } else {
            res.status(400).send('Payment Failed');
        }

    } catch (error) {
        res.status(400).json({
            message: 'Something went wrong',
            error: error.stack,
        });
    }
});

export default orderRouter;
