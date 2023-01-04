const db = require("../../firebase");
const getSnapData = require("../../utils/getSnapData");

const getTeachers = async (req, res) => {
  const snap = await db.collection("teacher").get();
  const data = getSnapData(snap);

  res.json(data);
};

module.exports = getTeachers;
