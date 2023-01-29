const db = require("../../firebase");
const getSnapData = require("../../utils/getSnapData");

const getAttempts = async (req, res) => {
  
  const { sid } = req.params;

  const snap = await db.collection("attempt").where("student_id", "==", sid).get();
  const data = getSnapData(snap);

  res.json( data );
};

module.exports = getAttempts;
