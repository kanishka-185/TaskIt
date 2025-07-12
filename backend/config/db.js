import mongoose from "mongoose"

// export const connectDB = async() => {
//     await mongoose.connect('mongodb+srv://kanishkagrover1:taskit25@cluster0.oe2mkjz.mongodb.net/TaskIt')
//     .then (() => console.log('DB CONNECTED'));
    
// }
export const connectDB = async () => {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
        console.error("MONGODB_URI is not defined in environment variables");
        process.exit(1);
    }

    await mongoose.connect(uri)
        .then(() => console.log('✅ DB CONNECTED'))
        .catch((err) => console.error("❌ MongoDB connection error:", err));
}