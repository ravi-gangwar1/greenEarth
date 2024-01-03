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
  origin: "https://green-earth-flame.vercel.app", 
  methods: 'GET,POST',
  credentials: true,
};

app.use(cors(corsOptions));

// app.use(cors());


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



const PORT = process.env.PORT || 5001;
app.listen(PORT, ()=> {
    console.log(`Server running on http://localhost:${PORT}`.bgGreen.white);
})
