import mongoose from "mongoose";

const {Schema} = mongoose;

const treeListSchema = new Schema({
    id : {
        type : Number,
        unique: [true, "id should be unique"],
        require : true,
    },
    name: {
        type: String,
        require: [true, 'tree name is Required'],
        minLength: [5, "name min length 5 char"],
        maxLength: [15, "name must be less than 15 char"],
        trim: true
    },
    price : {
        type : Number,
        require: [true, "tree price must be required"],
    },
    categeory : {
        type : String,
    },
    imageUrl : {
        type: String,
        require: [true, "tree imageURL must be required"],

    },
    discription : {
        type : String,
        maxLength: [1000, "name must be less than 1000 char"],
    }
},{
    timestamps: true
});



const treeModel = mongoose.model('treelist', treeListSchema);
export default treeModel;