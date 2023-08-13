// Modellerin içine mogoose scheme oluşturuyoruz

//model dediğimiz aslında her bir end point için bir structure yapısı

import mongoose from "mongoose";
//definations bu structurelarda vardır
export const UserSchema = new mongoose.Schema({
     username:{
        type:String,
        required:[true,"Please provide  unique username"],
        unique:[true,"Username Exist"]
     },
     passwowrd:{
        type:String,
        require:[true, "Please provide a password"],
        unique:false
     },
     mail:{
        type:String,
        required: [true, "Please provide a mail"],
        unique:true
     },
     firstName:{type:String},
     lastName:{type:String},
     mobile:{type:Number},
     address:{type:String},
     profile:{type:String}
})

export default mongoose.model.Users || mongoose.model('User', UserSchema);