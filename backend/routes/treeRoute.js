import express from 'express'
import treeModel from '../model/treeListModel.js';


const router = express.Router();


// GET ALL FOODMENU || @GET REQUEST

//crud opr also called
router.get('/getall', async (req, res)=>{
    try {
        const treeList = await treeModel.find({});
        res.status(200).send(treeList);
    } catch (error) {
        console.error(error); // Log the error
        res.status(500).json({ message: "Internal server error" });
    }
    
})

export default router;