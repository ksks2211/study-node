import fs from "fs";

try {
  let data = fs.readFileSync("files/text.txt");
  console.log(`File Size : ${data.length} Bytes`);
  console.log(data.toString());
} catch (err) {
  console.error(err);
}
