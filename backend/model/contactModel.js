import mongoose from "mongoose";
const {Schema} = mongoose;

const conatctSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        require: [true, "user id is required"]
        
    },
    name: {
        type : String,
        require : [true, "User name is Required"],

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