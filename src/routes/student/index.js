const { Router } = require("express");
const getStudents = require("./get");

const StudentRouer = Router();

StudentRouer.get("/:dept", getStudents);

module.exports = StudentRouer;
