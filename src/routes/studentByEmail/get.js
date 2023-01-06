const e = require("express");
const db = require("../../firebase");
const getSnapData = require("../../utils/getSnapData");

const getStudentsByEmail = async (req, res) => {
  const { email } = req.params;

  const snap = await db.collection("student").where("email", "==", email).get();
  if(snap.empty){
    res.json({ email : "notFound" })
  }
  else{
    const data = getSnapData(snap);
    res.json( data );
  }
};

module.exports = getStudentsByEmail;
