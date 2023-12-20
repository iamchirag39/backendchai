import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";

const userSchema=new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            trim:true,
            unique:true,
            lowecase:true,
            index:true
        },
        email:{
            type:String,
            required:true,
            trim:true,
            unique:true,
            lowecase:true,
        },
        fullname:{
            type:String,
            required:true,
            trim:true,
            index:true
        },
        avatar:{
            type:String,
            required:true
        },
        watchHistory:{
            type:Schema.Types.ObjectId,
            ref:"Video",
            required:true
        },
        coverImage:{
            type:String,
        },
        password:{
            type:String,
            required:true
        },
        refreshToken:{
            type:String,
            required:true
        }

    },{timestamps:true}
);

userSchema.pre("save",async function (next){
    if(!this.isModified("password")) return next()
    this.password= bcrypt.hash(this.password,10)
    next()
})

userSchema.methods.correctPassword=async function(password){
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken= function(){
    return Jwt.sign(
        {
            _id:this._id,
            username:this.username,
            fullname:this.fullname,
            email:this.email
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
           expiresIn: process.env.ACCESS_TOKEN_EXPIRE
        }
    )
}

userSchema.methods.generateRefrashToken= function(){
    return Jwt.sign(
        {
            _id:this._id,
        },
        process.env.REFRASH_TOKEN_SECRETT,
        {
           expiresIn: process.env.REFRASH_TOKEN_EXPIRE
        }
    )
}

export const User=mongoose.model("User",userSchema)