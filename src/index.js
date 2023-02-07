const express = require("express");
const cors = require("cors");
const RootRouter = require("./routes");
const path = require("path");
const fs = require("fs");

console.log(__dirname, "../public");
if (!fs.existsSync(path.join(__dirname, "../public")))
  fs.mkdirSync(path.join(__dirname, "../public"));

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(RootRouter);

app.use(express.static(path.join(__dirname, "../public")));

app.listen(5000, () => console.log("Server listening on port 5000"));
