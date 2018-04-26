const crypto = require('crypto');

const hash = crypto.createHash('md5');
const sha1 = crypto.createHash('sha1');
const sha256 = crypto.createHash('sha256');

// 可任意多次调用update():
hash.update('Hello, world!');
hash.update('Hello, nodejs!');
sha1.update('Hello, world!');
sha1.update('Hello, nodejs!');
sha256.update('Hello, world!');
sha256.update('Hello, nodejs!');

console.log(hash.digest('hex')); // 7e1977739c748beac0c0fd14fd26a544
console.log(sha1.digest('hex')); // 1f32b9c9932c02227819a4151feed43e131aca40
console.log(sha256.digest('hex')); // 940371b8619c00ed7a39d46ba45e71b5081ea19e35fa7d8315e5972a501465af