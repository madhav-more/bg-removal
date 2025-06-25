import mongoose from "mongoose";

const connectDB = async()=>{
  mongoose.connection.on('connected' , ()=>{
    console.log('database connectes');
    
  })
  await mongoose.connect(`${process.env.MONGODB_URI}/bg-removal`)
}

export default connectDB;