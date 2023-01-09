const db = require("../../firebase");
const getSnapData = require("../../utils/getSnapData");

const getStudents = async (req, res) => {
  const { dept } = req.params;

  const snap = await db.collection("student").where("dept", "==", dept).get();
  const data = getSnapData(snap);

  res.json( data );
};

module.exports = getStudents;
