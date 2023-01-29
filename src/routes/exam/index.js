const { Router } = require("express");
const getExams = require("./get");
const createExam = require("./createExam");

const ExamRouter = Router();

ExamRouter.get("/:dept", getExams);
ExamRouter.post("/createExam", createExam);

module.exports = ExamRouter;
