const db = require("../../firebase");
const getSnapData = require("../../utils/getSnapData");

const getQuestions = async (req, res) => {
  const { id } = req.params;

  const snap = await db.collection("question").where("exam_id", "==", id).get();
  const data = getSnapData(snap);

  res.json(data);
};

module.exports = getQuestions;
