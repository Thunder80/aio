const db = require("../../firebase");

const createAnswer = async (req, res) => {
  await db.collection("answer").add({ ...req.body });

  res.sendStatus(200);
};

module.exports = createAnswer;
