let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let p = Number(input[0].split(' ')[0])
let r = Number(input[0].split(' ')[1])
let num = p/r
if(num<0.2){
  return console.log('weak')
}
if(num<0.4){
  return console.log('normal')
}
if(num<0.6){
  return console.log('strong')
}
console.log('very strong')
