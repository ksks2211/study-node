import fs from "fs/promises";

fs.readFile("files/text.txt")
  .then((data) => {
    console.log(`Length : ${data.length}`);
    console.log(data.toString("utf-8"));
  })
  .catch((err) => {
    console.error(err);
  });
