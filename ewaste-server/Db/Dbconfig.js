import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function dbconnect() {
    try {
        await mongoose.connect(process.env.MongoDB_URI);
        console.log("Database connected");
    } catch (error) {
        console.log("Error connecting to database");
        process.exit(1);
    }
};

export default dbconnect;