const { Router } = require("express");
const examAttempt = require("./createAttempt");
const getAttempt = require("./getAttempt");

const AttemptRouter = Router();

AttemptRouter.post("/", examAttempt);
AttemptRouter.get("/:sid", getAttempt);

module.exports = AttemptRouter;
