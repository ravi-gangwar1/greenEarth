import mongoose from "mongoose";
const {Schema} = mongoose;

const conatctSchema = new Schema({
    name: {
        type : String,
        require : [true, "User name is Required"],

    },
    email : {
        type : String,
        require: [true, "user email must be required"],
        lowercase: true
    },
    message: {
        type : String,
        require: [true, "user message required"],
    }
},{
    timestamps : true
});

const contactModel = mongoose.model('userMessage', conatctSchema);
export default contactModel;