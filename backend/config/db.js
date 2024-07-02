import mongoose from "mongoose";

 export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://greatstack:80049452@cluster0.myuntph.mongodb.net/food-del').then(()=>console.log("DB connected"));
}