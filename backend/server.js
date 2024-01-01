import express from "express";
import "colors";
import morgan from "morgan";
import connectDB from './config/config.js';
import dotenv from 'dotenv';
dotenv.config();
import router from "./routes/treeRoute.js";
import  cors from 'cors'
import userRouter from "./routes/userRoutes.js";
import orderRouter from "./routes/orderRoute.js";
import contactRouter from "./routes/contactRouter.js";

const app = express();

const corsOptions = {
  origin: process.env.FRONTEND_URI, 
  methods: 'GET,POST',
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(morgan('dev'));

  (async () => {
    try {
      await connectDB();
      console.log("i know mongoDB url is Public".bgRed);
    } catch (error) {
      console.error("MongoDB connection failed:", error);
    }
  })();

//routes
app.use('/api/trees', router);
app.use('/api/auth', userRouter);
app.use('/api/orders', orderRouter);
app.use('/api/user-message', contactRouter);




app.listen(process.env.PORT, ()=> {
    console.log(`Server running on http://localhost:${process.env.PORT}`.bgGreen.white);
})