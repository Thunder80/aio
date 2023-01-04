const db = require("../../firebase");

const createAnswer = async (req, res) => {
  console.log(req.body);
  const batch = db.batch();
  for (const answer of req.body) {
    batch.set(db.collection("answer").doc(), answer);
  }

  await batch.commit();

  res.json({});
};

module.exports = createAnswer;
