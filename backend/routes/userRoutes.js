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





userRouter.post("/login", async (req, res)=>{

    try {
        const {email, password} = req.body;
    
        if(!email && !password){
            return res.status(400).json({
                succuess: false,
                message: "Every field is mandatory"
            })
        }
    
        const user = await userModel.find({
            email, password
        });

        if(user.length > 0) {
            const currentUser = {
                name : user[0].name,
                email : user[0].email,
                isAdmin : user[0].isAdmin,
                _id : user[0].id
            }
            res.status(200).json({
                succuess: true,
                data: currentUser
            })
        }
        if(!user && user.password !== password){
            return res.status(400).json({
                succuess: false,
                message: "Invlaid credentials"
            })
        }
    } catch (error) {
        res.status(400).json({
            succuess: false,
            message: `Login in Error ${error}`
        })
    }
})

export default userRouter;