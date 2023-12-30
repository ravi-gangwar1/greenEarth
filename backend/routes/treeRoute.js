import express from 'express'
import treeModel from '../model/treeListModel.js';
import orderModel from '../model/orderModel.js';


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


// import { ObjectId } from 'mongodb';

router.post('/addtree', async (req, res) => {
  const {id, name, price, imageUrl, category, discription } = req.body;
  try {
    const newTree = new treeModel({
      id,
      name,
      price,
      imageUrl,
      category,
      discription,
    });
    await newTree.save();
    res.status(200).send(newTree);
  } catch (error) {
    console.error(error); // Add this line
    res.status(500).json({ message: "Internal server error backend" });
  }
});



router.post('/get-tree', async (req, res) => {
  const {treeId} = req.body;

  try {
    const tree = await treeModel.findOne({_id:treeId})
    res.status(200).send(tree);
  } catch (error) {
    console.error(error); // Add this line
    res.status(500).json({ message: "Internal server error backend" });
  }
});

router.post('/update-tree', async (req, res) => {
  const {_id, name, price, imageUrl, category, description } = req.body;

  try {
    const updatedTree = await treeModel.findOneAndUpdate(
      { _id: _id },
      { name, price, imageUrl, category, description },
      { new: true }
    );
    res.status(200).send(updatedTree);
  } catch (error) {
    console.error(error); // Add this line
    res.status(500).json({ message: "Internal server error backend" });
  }
})

router.post('/delete-tree', async (req, res) => {
  try {
    const { treeId } = req.body;
    const deleteTree = await treeModel.deleteOne({ _id: treeId });
    
    if (deleteTree.deletedCount === 1) {
      res.status(200).json({ message: "Tree deleted successfully." });
    } else {
      res.status(404).json({ message: "Tree not found." });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error deleting tree.",
      error: error,
    });
  }
});

router.post('/garden', async (req, res)=>{
  const id = req.body.userId;
  try {
    const gardenTreeList = await orderModel.find({userId: id});
    const deliveredTrees = gardenTreeList.filter((tree) => tree.isDelivered === true);
    res.status(200).send(deliveredTrees);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});


  

export default router;