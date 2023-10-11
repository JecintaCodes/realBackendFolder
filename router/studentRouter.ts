import { Router } from "express";
import { createStudent, getAllStudent, singinStudent, updateStudent, updateStudentImage } from "../controller/studentController";

const studentRouter = Router();

studentRouter.route("/create-student").post(createStudent)
studentRouter.route("/sign-in-student").post(singinStudent)

studentRouter.route("/get-student").post(getAllStudent)
studentRouter.route("/:studentID-/update-student").post(updateStudent)
studentRouter.route("/:studentID-update-student-image").post(updateStudentImage)

export default studentRouter