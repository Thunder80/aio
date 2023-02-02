const db = require("../../firebase");
const FormData = require("form-data");
const fs = require("fs");
const axios = require("axios");

const createPdfAnswer = async (req, res) => {
  const exam_id = req.body?.exam_id;
  const student_id = req.body?.student_id;

  const formData = new FormData();
  formData.append("file", fs.createReadStream(req.file.path));
  const { data } = await axios.post(
    "https://api.ocr.space/parse/image",
    formData,
    {
      headers: {
        apikey: "K84080903888957",
      },
    }
  );
  console.log(data?.ParsedResults[0]?.ParsedText);

  answersData = {
    data: {
      exam_id,
      student_id,
      question_id: null,
      answer: data?.ParsedResults[0]?.ParsedText
        ? data?.ParsedResults[0]?.ParsedText
        : "",
      file_name: req.answerFile.name,
    },
  };

  const batch = db.batch();
  batch.set(db.collection("answer").doc(), answersData);
  let marks = 0;

  await batch.commit();
  await db.collection("result").add({
    student_id,
    exam_id,
    marks,
  });

  res.sendStatus(200);
};

module.exports = createPdfAnswer;
