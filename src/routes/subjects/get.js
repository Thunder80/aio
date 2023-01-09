const e = require("express");
const db = require("../../firebase");
const getSnapData = require("../../utils/getSnapData");

const getSubjects = async (req, res) => {
  const { dept } = req.params;

  const snap = await db.collection("subject").where("dept", "==", dept).get();
  const data = getSnapData(snap);
  res.json( data );
};

module.exports = getSubjects;
