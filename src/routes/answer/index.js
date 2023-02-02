const { Router } = require("express");
const createAnswer = require("./createAnswer");
const createPdfAnswer = require("./createPdfAnswer");
const getAnswers = require("./get");
const multer = require("multer");
const path = require("path");

const AnswerRouter = Router();
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + "../../../../public");
  },
  filename: function (req, file, cb) {
    const name = Date.now() + path.extname(file.originalname);
    req.answerFile = {
      name,
      path: path.join(__dirname, "/../../../../public", name),
    };
    cb(null, name);
  },
});
const upload = multer({ storage });

AnswerRouter.get("/:id", getAnswers);
AnswerRouter.post("/", createAnswer);
AnswerRouter.post("/pdf", upload.single("file"), createPdfAnswer);

module.exports = AnswerRouter;
