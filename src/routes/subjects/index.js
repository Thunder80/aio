const { Router } = require("express");
const getSubjects = require("./get");

const SubjectsRouter = Router();

SubjectsRouter.get("/:dept", getSubjects);

module.exports = SubjectsRouter;
