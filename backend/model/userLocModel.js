import mongoose from "mongoose";
const {Schema} = mongoose;

const userLocSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        require: [true, "user id is required"]
        
    },
    name: {
        type: String,
        require: [true, "name is required"]
    },
    location: {
        type : Object,
    }
},{
    timestamps : true
});

const userLocModel = mongoose.model('userLocation', userLocSchema);
export default userLocModel;