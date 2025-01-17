import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function dbconnect() {
    try {
        await mongoose.connect("mongodb+srv://namanchauhan2001:admin@scrapster.cr2mz.mongodb.net/?retryWrites=true&w=majority&appName=scrapster");
        console.log("Database connected");
    } catch (error) {
        console.log("Error connecting to database");
        process.exit(1);
    }
};

export default dbconnect;