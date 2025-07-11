import mongoose from "mongoose"

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://kanishkagrover1:taskit25@cluster0.oe2mkjz.mongodb.net/TaskIt')
    .then (() => console.log('DB CONNECTED'));
    
}