const { Router } = require("express");
const getTeachers = require("./get");

const TeacherRouter = Router();

TeacherRouter.get("/", getTeachers);

module.exports = TeacherRouter;
