const db = require("../../firebase");
const getSnapData = require("../../utils/getSnapData");

const getResults = async (req, res) => {
  const { exam_id } = req.params;
  const snap = await db
    .collection("result")
    .where("exam_id", "==", exam_id)
    .get();
  const data = getSnapData(snap);
  if(snap.empty)
  {
    res.json([])
  }
  else{
    res.json(data);
  }
};

module.exports = getResults;
