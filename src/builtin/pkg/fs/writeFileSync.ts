import fs from "fs";

try {
  fs.writeFileSync("files/writeFileSync.txt", "write file sync");
  console.log("Completed");
} catch (err) {
  console.error(err);
}
