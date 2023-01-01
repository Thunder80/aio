const db = require("../../firebase");
const getSnapData = require("../../utils/getSnapData");

const getExams = async (_req, res) => {
  const snap = await db.collection("exam").get();
  const data = getSnapData(snap);

  res.json(data);
};

module.exports = getExams;
