let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let word = input[1]
if(word.substring(0, n/2) === word.substring(n/2, n)) {
  return console.log('Yes')
}
console.log('No')