import { Router } from "express";

const StudentRouer = Router();

StudentRouer.get("/", getStudents);

export default StudentRouer;