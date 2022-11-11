const sentence = "Hello World";
const buf = Buffer.from(sentence);

console.log(`Length : ${buf.length}`);
console.log(buf.toString("utf-8"));

const emptyBuf = Buffer.alloc(100);

let cnt = emptyBuf.write("Nice to meet you");
