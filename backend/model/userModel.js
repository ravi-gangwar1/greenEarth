import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema({
    email : {
        type : String,
        require: [true, "user email must be required"],
        unique: [true, "email already registered"],
        lowercase: true
    },
    name: {
        type: String,
        require: [true, 'user name is Required'],
        minLength: [3, "name min length 5 char"],
        maxLength: [15, "name must be less than 15 char"],
        trim: true
    },
    password : {
        type : String,
        require: [true, 'user Password is Required'],
        select: false
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
},{
    timestamps: true
});



const userModel = mongoose.model('user', userSchema);
export default userModel;