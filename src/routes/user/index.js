const { Router } = require("express");
const getUser = require("./get");

const UserRouter = Router();

UserRouter.get("/:email", getUser);

module.exports = UserRouter;
