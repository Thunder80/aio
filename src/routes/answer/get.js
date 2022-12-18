const db = require("../../firebase");
const getSnapData = require("../../utils/getSnapData");

const getAnswers = async (req, res) => {
  const { id } = req.params;
  const snap = await db.collection("answer").where("exam_id", "==", id).get();
  //   console.log(snap);
  const data = getSnapData(snap);

  res.json({ answers: data });
};

module.exports = getAnswers;
