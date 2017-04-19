#!/usr/local/bin/node

var fs = require('fs');
var querystring = require('querystring');
var param = querystring.parse(fs.readFileSync('/dev/stdin', 'utf-8'));
var file = fs.readFileSync('name.json','utf-8');
var data = JSON.parse(file);

console.log("Content-type: text/html; charset='utf-8'\n");

console.log('<h1>Hello ' + data[param.name] + '!</h1>'); 
