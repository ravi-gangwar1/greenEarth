import express from "express";
import Stripe from 'stripe';
import orderModel from "../model/orderModel.js"

const orderRouter = express.Router();
const stripe = new Stripe('sk_test_51OHyz1SB7yI7Si8NED0HEr2OGThJUoUIYHATxbT9SY9ZKuaWI09BoZjGRQ0dVh4HevuS0ahzpNVQwIXAW10lPc4P0018ZXFqp6');

orderRouter.post('/placeorder', async (req, res) => {
    const { bucketItems, address} = req.body;

    // Construct line items
    const lineItems = bucketItems.map((item) => ({
        price_data: {
            currency: 'inr',
            product_data: {
                name: item.name,
            },
            unit_amount: item.price * 100,
        },
        quantity: item.quantity,
    }));

    // Create a Checkout Session with the session data
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: lineItems,
        mode: 'payment',
        success_url: 'http://localhost:5173/orders',
        cancel_url: 'http://localhost:5173/cancel',
    }); 

    if(session){
        const newOrder = new orderModel({
            name: address.name,
            email: address.email,
            userId: address.userId,
            orderTrees: bucketItems,
            shippingAddress: address,
            orderAmount: address.amount,
            transectionId: session.id,
        })
        const saveOrder = await newOrder.save();
        if(saveOrder){
            console.log("order save");
        }
        else{
            console.log("order not save");
        }
    }

    res.json({
        id: session.id,
    });
});


orderRouter.post('/getorders', async (req, res) => {
    const { userId } = req.body;
    try {
        const orders = await orderModel.find({ userId: userId }).sort({_id: "-1"});
        res.send(orders);
    } catch (error) {
        console.log(error);
    }
})

export default orderRouter;
