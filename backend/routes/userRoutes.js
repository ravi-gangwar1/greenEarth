import express from 'express'
import userModel from '../model/userModel.js';
import validator from 'validator';




const userRouter = express.Router();


userRouter.post('/signup' , async (req, res) => {
    const {email, name, password} = req.body;
    console.log(email,name, password);

    //store in db
    if( !name && !email && !password){
        return res.status(400).json({
            succuess: false,
            message: "Every field must be filled."
        })
    }

    const validEmail = validator.isEmail(email);

    if(!validEmail){
        return res.status(400).json({
            succuess: false,
            message: "Not valid email id"
        })
    }


    try {
        const userInfo = userModel(req.body); // if structure of schema and coming data are same.
        const result = await userInfo.save();
        return res.status(200).json({
            succuess: true,
            message: 'Login Success'
        });
        
    } catch (e) {
        if(e.code === 11000){
            return res.status(400).json({
                succuess: false,
                message: "account already exists"
            })
        }
        return res.status(400).json({
            succuess: false,
            message: e.message
        })
    }
})

export default userRouter;