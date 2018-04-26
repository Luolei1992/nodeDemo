'use strict';

var fs = require('fs');
var rs = fs.createReadStream('test.html');
var ws = fs.createWriteStream('sample.txt');


rs.pipe(ws);

// readable.pipe(writable, { end: false });