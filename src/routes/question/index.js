const { Router } = require("express");
const createQuestion = require("./create");
const getQuestions = require("./getQuestions");

const QuestionRouter = Router();

QuestionRouter.get("/:id", getQuestions);
QuestionRouter.post("/", createQuestion);

module.exports = QuestionRouter;
