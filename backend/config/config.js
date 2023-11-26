import mongoose from 'mongoose';
import 'colors';

const connectDB = async () => {
  try {
    const url = process.env.MONGO_URI || "mongodb+srv://zippy:ravi7465@cluster0.fxc3dyn.mongodb.net/greenEarth";
    const conn = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Add other options if needed
    });

    console.log(`MongoDB database connected to ${conn.connection.host}`.bgCyan.white);
  } catch (error) {
    console.error(`DB connection error`.bgRed.white);
    console.error(`Connection URL: ${url}`.red); // Log the connection URL
    console.error(error.message.red); // Log the error message

    // Exit the process if the connection fails
    process.exit(1);
  }
};

export default connectDB;

