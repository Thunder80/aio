const { Router } = require("express");
const getResults = require("./get");

const ResultsRouter = Router();

ResultsRouter.get("/:exam_id", getResults);

module.exports = ResultsRouter;
