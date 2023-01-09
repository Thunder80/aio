const { Router } = require("express");
const getTeachersByEmail = require("./get");

const TeacherByEmailRouter = Router();

TeacherByEmailRouter.get("/:email", getTeachersByEmail);

module.exports = TeacherByEmailRouter;
