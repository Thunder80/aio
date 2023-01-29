const db = require("../../firebase");

const createExam = async (req, res) => {

    exam = req.body
    id = exam?.id

    await db.collection("exam").doc(id).set( exam );

    console.log('Added document with ID: ', res.id);

  res.sendStatus(200);
};

module.exports = createExam;
