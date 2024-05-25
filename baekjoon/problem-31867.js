let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let a = input[1].split('')
let count = 0
for (let i=0; i<n; i++) {
  if (Number(a[i]) % 2 === 0) {
    count++
  }
}
if (count > n/2) {
  return console.log(0)
}
if (count < n/2) {
  return console.log(1)
}
console.log(-1)
