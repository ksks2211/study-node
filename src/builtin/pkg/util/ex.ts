import util from "util";
import fs from "fs";

fs.readFile("./text.txt", (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(data.toString("utf-8"));
});

const readFilePromise = util.promisify(fs.readFile);

readFilePromise("./text.txt")
  .then((data) => {
    console.log(data.toString("utf-8"));
  })
  .catch((err) => {
    console.error(err);
  });
