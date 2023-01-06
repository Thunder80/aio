const db = require("../../firebase");
const getSnapData = require("../../utils/getSnapData");

const getStudents = async (req, res) => {
  
  const snap = await db.collection("student").get();
  const data = getSnapData(snap);

  res.json({ students: data });
};

module.exports = getStudents;
