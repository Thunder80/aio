const { Router } = require("express");
const getExams = require("./get");

const ExamRouter = Router();

ExamRouter.get("/:dept", getExams);

module.exports = ExamRouter;
