const db = require("../../firebase");
const getSnapData = require("../../utils/getSnapData");

const getResults = async (req, res) => {
  const student_id = req.headers["x-id"];
  const snap = await db
    .collection("result")
    .where("student_id", "==", student_id)
    .get();
  const data = getSnapData(snap);

  res.json(data);
};

module.exports = getResults;
