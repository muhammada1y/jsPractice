import mongoose from "mongoose";


const attendance = new mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    attendance:{
        type: Boolean,
        require: true,
        default:false
    }
},{timestamps: true});

const  healthAttendance = mongoose.model("staff", attendance);

export default healthAttendance;