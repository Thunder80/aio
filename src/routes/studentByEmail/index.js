const { Router } = require("express");
const getStudentsByEmail = require("./get");

const StudentByEmailRouter = Router();

StudentByEmailRouter.get("/:email", getStudentsByEmail);

module.exports = StudentByEmailRouter;
