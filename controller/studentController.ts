import express, { Request, Response } from "express"
import bcrypt from "bcrypt";
import studentModel from "../model/studentModel";
import { trusted } from "mongoose";
import { streamUpload } from "../utils/stream";


export const createStudent = async(req:Request, res:Response):Promise<Response>=>{
    try {
        const {email, password, studentName, schoolName} = req.body;

        const salt = await bcrypt.genSalt(36);
        const harsh = await bcrypt.hash(password, salt)

        const student = await studentModel.create({
            email,
            password:harsh,
            studentName,
            schoolName,
            balance:0
        })
        return res.status(201).json({
            message:"student created",
            data: student
        })
    } catch (error) {
        return res.status(404).json({
            message:`error creating user: ${error}`
        })
    }
}
export const getAllStudent = async(req:Request, res:Response):Promise<Response>=>{
    try {

           const student = await studentModel.find({})

        return res.status(200).json({
            message:"all-student -found",
            data: student
        })
    } catch (error) {
        return res.status(404).json({
            message:`error finding user: ${error}`
        })
    }
}
export const geOneStudent = async(req:Request, res:Response):Promise<Response>=>{
    try {
        const {studentID} = req.params;
           const student = await studentModel.findById({studentID})

        return res.status(200).json({
            message:"one-student -found",
            data: student
        })
    } catch (error) {
        return res.status(404).json({
            message:`error finding user: ${error}`
        })
    }
}
export const updateStudent = async(req:Request, res:Response):Promise<Response>=>{
    try {
        const {studentID} = req.params;
        const {houseAddress,gender, phoneNumber} = req.body;

           const student = await studentModel.findByIdAndUpdate(studentModel,
            {
                houseAddress,
                gender,
                phoneNumber
            },
            {new: true},
            );

        return res.status(201).json({
            message:"updated-student ",
            data: student
        })
    } catch (error) {
        return res.status(404).json({
            message:`error updating user: ${error}`
        })
    }
}
export const updateStudentImage = async(req:Request, res:Response):Promise<Response>=>{
    try {
        const {studentID} = req.params;
        const {secure_url, public_id,}: any = streamUpload(req);

        const student = await studentModel.findByIdAndUpdate(
            studentID,
            {
                studentImage: secure_url,
                studentImageID: public_id,
            },
            {new: true}
        );
        
            return res.status(201).json({
            message:"updated-student-image ",
            data: student
        })
    } catch (error) {
        return res.status(404).json({
            message:`error updating strudent- image: ${error}`
        })
    }
}

export const singinStudent = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const { email, password } = req.body;
  
      const student = await studentModel.findOne({ email });
  
      if (student) {
        const passwordChaeck = await bcrypt.compare(password, student.password);
  
        if (passwordChaeck) {
          return res.status(201).json({
            message: "view one",
            data: student,
          });
        } else {
          return res.status(404).json({
            message: "Error with password",
          });
        }
      } else {
        return res.status(404).json({
          message: "Error with Student",
        });
      }
    } catch (error) {
      return res.status(404).json({
        message: "Error",
      });
    }
  };
  