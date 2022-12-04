const { Router } = require("express");
const OCRRouter = require("./ocr");

const router = Router();

router.use("/ocr", OCRRouter);

module.exports = router;
