import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

import validator from "validator";
//Register User 
export const register = async (req,res) =>{
    try{
        //1-Check if the email is valid 
      
        const {
            fullName,
            username,
            email,
            password,
            phoneNumber,
            location



        } = req.body;
        if(!validator.isEmail(email)){
            return res.status(400).json({message: "invalid email"});
        }
        //check if email is in use
        const checkEmail = await User.findOne({email : req.body.email});
        if(checkEmail){
            return res.status(409).json({msg : err.message});
        }
        const salt = await bcrypt.genSalt();
        const passwordhash = await bcrypt.hash(password,salt);
        const newUser = new User({
            fullName,
            username,
            email,
            password: passwordhash,
            phoneNumber,
            location,
            
        });

const savedUser = await newUser.save();
res.status(201).json(savedUser);
    }catch(err){
        res.status(500).json({error : err.message});

    }
};
//Logging in
export const login = async(req,res) => {
    try{
        const {email, password } = req.body;
        const user = await User.findOne({email : email });
        if(!user) return res.status(400).json({msg : "User doesnt exist"});
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch) return res.status(400).json({msg : "Invalid credentials."});
        const token = jwt.sign({id: user._id},process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({token ,user});



    }catch(err){
        res.status(500).json({error : err.message});
    }
}
import Volunteer from "../models/volunteerModel.js";
//import User from "../models/userModel";


//to become a volunteer you should already be a user
export const addVolunteer = async (req,res) =>{
    try{
    //1- check if logged in
    const checkUser = await User.findById(req.body.email)
    console.log(checkUser);
    if(!checkUser ){
        return res.status(400).json({message: err.message });
    };
    const {
        fullName,
        email,
        reason,
        rating,
       location,
        phoneNumber

    } = req.body
    const newVolunteer = Volunteer.create({
        fullName,
        email,
        reason,
        rating,
        location,
        phoneNumber
    })
    //const savedVolunteer = await newVolunteer.save();
res.status(201).json(newVolunteer);
    }catch{
        res.status(500).json({message : "server error"});
    }
};