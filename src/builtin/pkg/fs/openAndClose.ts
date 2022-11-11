import fs from "fs";
import { Buffer } from "buffer";

function readFileSync(path: string, bufferSize?: number) {
  const chunks: Buffer[] = [];
  const buffer = Buffer.alloc(bufferSize || 10);
  let position = 0;

  try {
    // open file
    const fd = fs.openSync(path, "r");

    // read file
    while (true) {
      const size = fs.readSync(fd, buffer, 0, buffer.length, position);
      if (size > 0) {
        const chunk = Buffer.alloc(size);
        buffer.copy(chunk, 0, 0, size);
        chunks.push(chunk);
        position += size;
      } else {
        break;
      }
    }
    // close file
    fs.closeSync(fd);
  } catch (err) {
    console.error(err);
  }

  return Buffer.concat(chunks);
}

function writeFileSync(path: string, data: string, bufferSize?: number) {
  const buffer = Buffer.alloc(bufferSize || 10);
  let start = 0;

  try {
    // open file
    const fd = fs.openSync(path, "w");
    const content = Buffer.from(data);

    // write file
    while (start < content.length) {
      let end = start + buffer.length;
      end = end < content.length ? end : content.length;
      content.copy(buffer, 0, start, end);
      fs.writeSync(fd, buffer, 0, end - start);
      start = end;
    }
    // close file
    fs.closeSync(fd);

    console.log("Completed");
  } catch (err) {
    console.error(err);
  }
}

// const buf = readFileSync("files/text.txt");

// console.log(`Length : ${buf.length}`);
// console.log(buf.toString("utf-8"));

writeFileSync(
  "files/customWriteFileSync",
  "Hello World\nNice to meet you\nSee you next time."
);
