const e = require("express");
const db = require("../../firebase");
const getSnapData = require("../../utils/getSnapData");

const getUser = async (req, res) => {
  const { email } = req.params;

  const snapS = await db.collection("student").where("email", "==", email).get();
  const dataS = getSnapData(snapS);
  if(!snapS.empty){
    res.json({ type : "student" , student : dataS[0] })
  }
  else{
    const snapT = await db.collection("teacher").where("email", "==", email).get();
    const dataT = getSnapData(snapT);
    if(!snapT.empty){
      res.json({ type : "teacher" , teacher : dataT[0] })
    }
    else{
      res.json({ type : "none" , student : {}, teacher : {} })
    }
  }
};

module.exports = getUser;
