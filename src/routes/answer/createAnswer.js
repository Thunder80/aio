const db = require("../../firebase");
const getSnapData = require("../../utils/getSnapData");

const createAnswer = async (req, res) => {
  const exam_id = req.body[0]?.exam_id;
  const student_id = req.body[0]?.student_id;

  const snap = await db
    .collection("question")
    .where("exam_id", "==", exam_id)
    .get();
  const questions = getSnapData(snap);

  const batch = db.batch();
  let marks = 0;
  for (const answer of req.body) {
    batch.set(db.collection("answer").doc(), answer);
    for (const question of questions) {
      if (question.answer === answer.mcq || question.answer === answer.answer) {
        marks += +question.marks;
      }
    }
  }

  await batch.commit();
  await db.collection("result").add({
    student_id,
    exam_id,
    marks,
  });

  res.sendStatus(200);
};

module.exports = createAnswer;
