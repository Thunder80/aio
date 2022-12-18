const db = require("../../firebase");

const createQuestion = async (req, res) => {
  await db.collection("question").add({ ...req.body });

  res.sendStatus(200);
};

module.exports = createQuestion;
