import crypto from "crypto";

// algorithm
const algorithm = "aes-256-cbc";

// key
const key = "abcdefghijklmnopqrstuvwxyz123456";

// initial vector
const iv = "1234567890123456";

const message = "Nice to meet you";

// cipher
const cipher = crypto.createCipheriv(algorithm, key, iv);

let ciphered = cipher.update(message, "utf8", "base64");
ciphered += cipher.final("base64");

console.log(ciphered);

// decipher
const decipher = crypto.createDecipheriv(algorithm, key, iv);

let deciphered = decipher.update(ciphered, "base64", "utf8");
deciphered += decipher.final("utf8");

console.log(deciphered);

console.log(crypto.getCiphers());
