'use strict';

var fs = require('fs');

// fs.readFile('sample.txt', 'utf-8', function (err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });
fs.readFile('test.jpg', 'utf-8', function (err, data) {   //异步读取
    if (err) {
        console.log(err);
    } else {
        // console.log(data);
        console.log(data.length + ' bytes');
    }
});
try {
    var data = fs.readFileSync('sample.txt', 'utf-8');     //同步读取文件
    console.log(data);
} catch (err) {
    console.log(err) // 出错了
}




var data = 'write file!';
fs.writeFile('sample.txt', data, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('ok.');
    }
});

try {
    fs.writeFileSync('sample.txt', data);     //同步读取文件
    console.log(data);
} catch (err) {
    console.log(err) // 出错了
}