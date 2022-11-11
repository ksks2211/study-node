import fs from "fs";

try {
  fs.copyFileSync("files/text.txt", "files/copy.txt");
} catch (err) {
  console.error(err);
}
