import fs from "fs";

fs.readFile("files/text.txt", (err, data) => {
  if (err) {
    console.error(err);
    throw err;
  }
  console.log(`File Size : ${data.length} bytes`);
  console.log(data.toString("utf-8"));
});
