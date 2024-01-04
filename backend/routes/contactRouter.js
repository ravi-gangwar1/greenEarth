import express from "express";
import contactModel from '../model/contactModel.js';

const contactRouter = express.Router();

contactRouter.post('/contact', async (req, res) => {
    try {
        const {userId, name, message } = req.body.contactMessage;
        console.log(req.body);
        const userMessage = new contactModel({
            userId: userId,
            name: name,
            message: message
        });

        const savedMessage = await userMessage.save();

        if (savedMessage) {
            return res.status(200).json({
                message: "Successfully sent",
            });
        }
    } catch (err) {
        console.error(err); 
        return res.status(500).json({
            message: "Server error while sending message"
        });
    }
});

export default contactRouter;
