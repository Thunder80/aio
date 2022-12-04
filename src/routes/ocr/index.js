const { Router } = require("express");
const multer = require("multer");
const { convertOCR } = require("./convertOCR");

const router = Router();
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + "../../../../public");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + ".jpg");
  },
});
const upload = multer({ storage });

router.post("/", upload.array("files", 20), convertOCR);

module.exports = router;
