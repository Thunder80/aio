const db = require("../../firebase");
const getSnapData = require("../../utils/getSnapData");

const getExams = async (req, res) => {
  const { dept } = req.params;

  const snap = await db.collection("exam").where("dept", "==", dept).get();
  const data = getSnapData(snap);

  res.json(data);
};

module.exports = getExams;
