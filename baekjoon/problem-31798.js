let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let a = Number(input[0].split(' ')[0])
let b = Number(input[0].split(' ')[1])
let c = Number(input[0].split(' ')[2])
if(a === 0) {
  return console.log(c*c-b)
}
if(b === 0) {
  return console.log(c*c-a)
}
console.log(Math.sqrt(a+b))