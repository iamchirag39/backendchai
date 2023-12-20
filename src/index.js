import express from "express";
import connectDb from "./db/connectDB.js";
const app=express();
const URI="mongodb+srv://chiragjadav3843:hz53gqHZh795oJ2b@cluster0.rppqhhz.mongodb.net/fullplay"

// dotenv.config({
//     path:"./env"
// })

connectDb(URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("display ohk");
    });
})
.catch(()=>{
    console.log("connection faild ??")
})


console.log(process.env.MONGODB_URI);