import mongoose from "mongoose"

interface iFees{
    cash:number;
    studentID:string;
    schoolName:string;
}

interface iFeesData extends iFees, mongoose.Document{}

const feeModel = new mongoose.Schema<iFeesData>(
    {
        cash:{
            type:Number,
        },
        studentID:{
            type:String,
        },
        schoolName:{
            type:String,
        },
    },{timestamps:true}
)

export default mongoose.model<iFeesData>("fees", feeModel)