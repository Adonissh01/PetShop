
import mongoose  from "mongoose";

const volunteerSchema = new mongoose.Schema({
    fullName: {
        type:String,
        required:true,
    },
    email :{
        type:String,
        required:true,

    },
    reason: {
        type: String,
        required: true,    
    },
    rating: {
        type: String,
        trim:true,
    },
    location:{

        type :[
            {
                country:{
                    type:String,
                    required:true,
                    ref:'user'
                },
                city:{
                    type:String,
                    required:true,
                    ref:'user'
                }
            }
        ],
        
        },
    phoneNumber: {
        type:String,
    },


},
{timestamps:true}
);
const Volunteer = mongoose.model("Volunteer",volunteerSchema);
export default Volunteer;

