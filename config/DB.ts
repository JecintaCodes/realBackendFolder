import mongoose from "mongoose";

const studentDataBase: string = "mongodb://127.0.0.1:27017/petProject";


export const DataBase = async()=>{
   try {
    await mongoose.connect(studentDataBase).then(()=>{
        console.log(`connected to:${studentDataBase}`)
    })
   } catch (error) {
    console.log(`error connecting to database${error}`)
   }
}