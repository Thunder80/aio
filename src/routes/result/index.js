const { Router } = require("express");
const getResults = require("./getResults");

const ResultsRouter = Router();

ResultsRouter.get("/", getResults);

module.exports = ResultsRouter;
