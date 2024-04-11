let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0].split(' ')[0])
let m = Number(input[0].split(' ')[1])
let count = 0
for (let i = 1; i <= n; i++) {
  let result = input[i].split('')
  if (result.includes('+')) {
    count++
  }
}
console.log(count)
