import mongoose from "mongoose";
import bcrypt from "bcrypt";



const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:[true,"Please enter your fullname"],
        trim:true,
        minlength:5,

    },
    username:{
        type:String,
        unique:true,
        required:[true,"Please enter your username"],
        minlength:5,
        maxlength:15,

    },
    email:{
        type:String,
        unique:true,
        required :[true,"Please enter your email"],
        maxLength:30,
    },
    password:{
        type:String,
        minlength:8,
        trim:true,
        required:[true,"Please enter your password"],
    },
    
    phoneNumber:{
        type:String,
        unique:true,
        
        minlength:8,
        trim:true,


    },
  
    

    location:{

        type :[
            {
                country:{
                    type:String,
                    required:true
                },
                city:{
                    type:String,
                    required:true
                }
            }
        ],
        
        }
    },
        {timestamps:true}
);

const User = mongoose.model("User",userSchema);
export default User;
