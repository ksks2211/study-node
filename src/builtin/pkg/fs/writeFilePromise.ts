import fs from "fs/promises";

fs.writeFile("files/writeFilePromise.txt", "Write file promise")
  .then(() => {
    console.log("Completed!");
  })
  .catch((err) => {
    console.error(err);
  });
