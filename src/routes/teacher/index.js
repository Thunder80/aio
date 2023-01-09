const { Router } = require("express");
const getTeachers = require("./get");

const TeacherRouter = Router();

TeacherRouter.get("/:dept", getTeachers);

module.exports = TeacherRouter;
