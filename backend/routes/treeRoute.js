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


import { ObjectId } from 'mongodb';

router.post('/addtree', async (req, res) => {
    console.log(req.body);
  const {id, name, price, imageUrl, category, description } = req.body;

  try {
    const newTree = new treeModel({
      id,
      name,
      price,
      imageUrl,
      category,
      description,
    });

    await newTree.save();
    res.status(200).send(newTree);
  } catch (error) {
    console.error(error); // Add this line
    res.status(500).json({ message: "Internal server error backend" });
  }
});

  

export default router;