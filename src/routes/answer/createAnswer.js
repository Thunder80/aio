const db = require("../../firebase");

const createAnswer = async (req, res) => {
  const batch = db.batch();
  for (const answer of req.answers) {
    batch.set(db.collection("answer").doc(), answer);
  }

  await batch.commit();

  res.sendStatus(200);
};

module.exports = createAnswer;
