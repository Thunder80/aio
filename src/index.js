const express = require("express");
const cors = require("cors");
const RootRouter = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(RootRouter);

app.listen(5000, () => console.log("Server listening on port 5000"));
