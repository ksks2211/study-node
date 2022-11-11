import fs from "fs";
fs.appendFile("files/writeFile.txt", "Los Angeles Boston", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Completed");
  }
});
