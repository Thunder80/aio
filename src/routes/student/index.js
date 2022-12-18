const { Router } = require("express");
const getStudents = require("./get");

const StudentRouer = Router();

StudentRouer.get("/", getStudents);

module.exports = StudentRouer;
