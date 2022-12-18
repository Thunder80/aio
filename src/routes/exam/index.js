const { Router } = require("express");
const getExams = require("./get");

const ExamRouter = Router();

ExamRouter.get("/", getExams);

module.exports = ExamRouter;
