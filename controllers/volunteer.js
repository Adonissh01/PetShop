// import Volunteer from "../models/volunteerModel";
// import User from "../models/userModel";


// //to become a volunteer you should already be a user
// export const addVolunteer = async (req,res) =>{
//     try{
//     //1- check if logged in
//     const checkUser = await User.findOne({email : email});
//     if(!checkUser ){
//         res.status(400).json({message: err.message });
//     }
//     const {
//         fullName,
//         email,
//         reason,
//         rating,
//        location,
//         phoneNumber

//     } = req.body
//     const newVolunteer = new Volunteer({
//         fullName,
//         email,
//         reason,
//         rating,
//         location,
//         phoneNumber
//     })
//     const savedVolunteer = await newVolunteer.save();
// res.status(201).json(savedVolunteer);
//     }catch{
//         res.status(500).json({error : err.message});
//     }
// };