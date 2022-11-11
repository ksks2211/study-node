import fs from "fs";

const watcher = fs.watch("files", (eventType, filename) => {
  console.log(`Event Type : ${eventType}`);
  console.log(`File Name : ${filename}`);
});
