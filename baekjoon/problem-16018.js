let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let count = 0
for (let i = 0; i < n; i++) {
  if (input[1].split('')[i] === 'C' && input[2].split('')[i] === 'C') {
    count++
  }
}
console.log(count)
