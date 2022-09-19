let fs = require('fs');
let inputLine = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let p1 = parseInt(inputLine[0].split(' ')[0]);
let s1 = parseInt(inputLine[0].split(' ')[1]);
let s2 = parseInt(inputLine[1].split(' ')[0]);
let p2 = parseInt(inputLine[1].split(' ')[1]);

if(p1 + p2 > s1 + s2) {
  return console.log("Persepolis");
}
if(p1 + p2 < s1 + s2) {
  return console.log("Esteghlal");
}
console.log(s1 > p2 ? "Esteghlal" : (s1 < p2 ? "Persepolis" : "Penalty"));
