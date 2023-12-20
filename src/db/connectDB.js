import mongoose from "mongoose";
import { DB_Name } from "../constenc.js";
const connectDb=async(URI)=>
{
    try {
       const dbstring= await mongoose.connect(URI)
        console.log(`connexted succsess 🔥🔥 db HOST:${dbstring.connection.host}`);
        } catch (error) {
        console.error("database connextion ERROR",error);
        process.exit(1);
    }
}

export default connectDb