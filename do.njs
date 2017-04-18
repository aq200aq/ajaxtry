#!/usr/local/bin/node
var fs = require('fs');
var qs = require('qs');
var param = qs.parse(fs.readFileSync('/dev/stdin','utf-8'));
var content = fs.readFileSync('name.json');
var obj = JSON.parse(content);
var flag=1;

console.log('Content-type: text/html; charset=utf-8\n');

if(flag==1){
  flag=0;
  for(i=0;i<4;i++){
    if(param.key==obj[i].key){
      console.log('<h1>Hello ' + obj[i].name + ‘~</h1>');
      flag=1;
     }
  }
}
if(flag==0){
  console.log('<h1>Sorry, '+param.key+' is not in our team </h1>');
}

