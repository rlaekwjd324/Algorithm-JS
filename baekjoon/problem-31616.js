let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let word = input[1].split('')
let pre = word[0]
for (let i = 1; i < n; i++) {
  if(pre !== word[i]) {
    return console.log('No')
  }
}
console.log('Yes')