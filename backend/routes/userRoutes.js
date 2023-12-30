import express from 'express'
import userModel from '../model/userModel.js';
import validator from 'validator';
import otpModel from '../model/otpModel.js';




const userRouter = express.Router();


userRouter.post('/signup' , async (req, res) => {
    const {email, name, password} = req.body.user;
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
    const {email, name, password} = req.body.user;
    console.log(email, name, password, "Saving")
    const userInfo = userModel({
        email: email,
        name: name,
        password: password
    });
    const result = await userInfo.save();
    return res.status(200).json({
        success: true,
        message: 'Login Success'
    });
} catch (e) {
    if (e.code === 11000) {
        return res.status(404).json({
            success: false,
            message: "Account already exists"
        });
    }
    console.log(e)
    return res.status(400).json({
        success: false,
        message: e.message
    });
}

})





userRouter.post("/login", async (req, res)=>{
    console.log(req.body)
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


userRouter.get('/getall-users', async (req, res)=>{
    try {
        const userList = await userModel.find({});
        res.status(200).send(userList);
    } catch (error) {
        console.error(error); // Log the error
        res.status(500).json({ message: "Error Fetching the error" });
    }
    
})


//reset password 
userRouter.post('/reset-password', async (req, res) => {
    try {
        const data = await userModel.findOne({ email: req.body.email });

        if (data) {
            const otpCode = Math.floor((Math.random() * 10000) + 1);
            const otpData = new otpModel({
                email: req.body.email,
                code: otpCode,
                expireIn: new Date().getTime() + 300 * 1000
            });

            const findEmailOTP = await otpModel.findOne({ email: req.body.email });

            if (findEmailOTP) {
                const email = req.body.email;
                const updateWithNewOTP = await otpModel.findOneAndUpdate(
                    { email: email },
                    { code: otpCode, expireIn: new Date().getTime() + 300 * 1000 },
                    { new: true }
                );
                mailer(email, otpCode);
            } else {
                const otpRes = await otpData.save();
                const email = req.body.email;
                mailer(email, otpCode);
            }

            return res.status(200).json({
                message: "Please check your Email Id",
                success: true,
            });
        } else {
            console.log('Email does not exist');
            return res.status(404).json({
                message: "Email does not Exist",
            });
        }
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({
            message: "Server Error while generating OTP",
            error: error,
        });
    }
});





/////////////////////////////////////////////////////////
import nodemailer from "nodemailer";

const mailer = (email, otp) => {
    var transporter = nodemailer.createTransport({
        service: "gmail",
        port: 587,
        secure: false,
        auth: {
            user: "green.earth.mini.project@gmail.com",
            pass: "cxniyzfqmndrugcc"
        }
    });

    var mailOptions = {
        from: "green.earth.mini.project@gmail.com",
        to: `${email}`,
        subject: "Your OTP",
        text: `Your one-time password (OTP) is: ${otp}`
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}
////////////////////////////////////////////
userRouter.post('/verify-otp', async (req, res) => {
    const {email, code} = req.body;
    console.log(email, code);
    try {

        const otpMacth = await otpModel.find({email: email});
        const {code} = otpMacth;
        if(code === code) {
            return res.status(200).json({
                message: "Verification Done",
                success: true,
            })
        }
        console.log(otpMacth);

    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({
            message: "Server Error while verification",
            error: error,
        });
    }
});
userRouter.post('/change-password', async (req, res) => {
    const {email, newPassword} = req.body;
    console.log(email, newPassword)
    try {
            const updatePass = await userModel.findOneAndUpdate(
                {email: email},
                {password : newPassword},
                {new : true}
                )
            if(updatePass){
                return res.status(200).json({
                    message: "Verification Done",
                    success: true,
                })
            }else{
                return res.status(404).json({
                    message: "Error while changing the password",
                    success: false
                })
            }

    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({
            message: "Server Error while Changing password",
            error: error,
        });
    }
});

export default userRouter;