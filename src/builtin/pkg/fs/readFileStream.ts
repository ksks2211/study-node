import fs from "fs";

const readStream = fs.createReadStream("files/text.txt", {
  highWaterMark: 4,
});

const chunks: Buffer[] = [];

readStream.on("data", (chunk: Buffer) => {
  console.log(`Read Size : ${chunk.length}`);
  chunks.push(chunk);
});

readStream.on("end", () => {
  console.log("Done Reading");
  console.log(Buffer.concat(chunks).toString("utf-8"));
});

readStream.on("error", (err) => {
  console.error(err);
});
