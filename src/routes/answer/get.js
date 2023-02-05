const db = require("../../firebase");
const getSnapData = require("../../utils/getSnapData");

const getAnswers = async (req, res) => {
  const { eid,sid } = req.params;
  const snap = await db.collection("answer").where("exam_id", "==", eid).where("student_id", "==", sid).get();
  
  const data = getSnapData(snap);

  res.json( data[0] );
};

module.exports = getAnswers;
