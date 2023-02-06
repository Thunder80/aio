const db = require("../../firebase");
const getSnapData = require("../../utils/getSnapData");

const createAnswer = async (req, res) => {
  const exam_id = req.body?.exam_id;
  const student_id = req.body?.student_id;
  const timestamp = req.body?.timestamp;
  const answers = req.body?.choiceList;

  const snapS = await db.collection("student").where("id", "==", student_id).get();
  dataS = getSnapData(snapS);
  const student_name = dataS[0]?.name;

  const snap = await db
    .collection("question")
    .where("exam_id", "==", exam_id)
    .get();
  const questions = getSnapData(snap);

  answersData = req.body;

  const batch = db.batch();
  batch.set(db.collection("answer").doc(), answersData);
  
  let marks = 0;
  let total = 0;
  for (const question of questions) {
    total += +question.marks;
  }

  for (const answer of answers) {
    
    for (const question of questions) {
      if ((question.answer === answer.mcq) && (question.qid === answer.question_id)) {
        marks += +question.marks;
      }
    }
  }

  await batch.commit();
  await db.collection("result").add({
    student_id,
    student_name,
    exam_id,
    marks,
    total,
    timestamp
  });

  res.sendStatus(200);
};

module.exports = createAnswer;
