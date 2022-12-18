const { Router } = require("express");
const createAnswer = require("./createAnswer");
const getAnswers = require("./get");

const AnswerRouter = Router();

AnswerRouter.get("/:id", getAnswers);
AnswerRouter.post("/", createAnswer);

module.exports = AnswerRouter;
