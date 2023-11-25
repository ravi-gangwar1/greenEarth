import express from "express";
import "colors";
import morgan, { compile } from "morgan";
import connectDB from './config/config.js';
import dotenv from 'dotenv';
dotenv.config();
import router from "./routes/treeRoute.js";
import  cors from 'cors'


const app = express();
app.use(cors());




app.use(express.json());
app.use(morgan('dev'));


connectDB();

//routes
app.use('/api/trees', router);
app.get('/', (req, res)=>{
    res.status(200).json({
        succuess: true,
        data: "Hello from server",
    })
})

app.listen(5000, ()=> {
    console.log(`Server running on http://localhost:5000`.bgGreen.white);
})