import { Router } from "express";

const ExamRouter = Router();

ExamRouter.get("/", getExam);

export default ExamRouter;