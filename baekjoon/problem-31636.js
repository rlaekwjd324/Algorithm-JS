let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let word = input[1]
if(word.includes('ooo')) {
  return console.log('Yes')
}
console.log('No')