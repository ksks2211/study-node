import fs from "fs";

fs.writeFile("files/writeFile.txt", "New York London Paris", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Completed!");
  }
});
