const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");

const convertOCR = async (req, res) => {
  try {
    const { files } = req;
    for (const file of files) {
      console.log(file);
      const formData = new FormData();
      formData.append("file", fs.createReadStream(file.path));
      console.log(file);
      const { data } = await axios.post(
        "https://api.ocr.space/parse/image",
        formData,
        {
          headers: {
            apikey: "K84080903888957",
          },
        }
      );
      console.log(data);
    }
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

module.exports = { convertOCR };

// convertOCR();
