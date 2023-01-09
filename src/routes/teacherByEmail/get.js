const e = require("express");
const db = require("../../firebase");
const getSnapData = require("../../utils/getSnapData");

const getTeachersByEmail = async (req, res) => {
  const { email } = req.params;

  const snap = await db.collection("teacher").where("email", "==", email).get();
  if(snap.empty){
    res.json({ email : "notFound",name : "none",dept : "none",id : "none" })
  }
  else{
    const data = getSnapData(snap);
    res.json( data[0] );
  }
};

module.exports = getTeachersByEmail;
