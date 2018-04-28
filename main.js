'use strict';

// 引入hello模块:
var greet = require('./hello');

var s = 'Michael';

greet(s); // Hello, Michael!

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '192.168.10.105',
    user: 'luolei',
    password: '123',
    database: 'test'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log(results);
    console.log(fields);
    
    console.log('The solution is: ', results[0].solution);
});

connection.end();