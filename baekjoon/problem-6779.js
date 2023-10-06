let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let h = Number(input[0])
let m = Number(input[1])
let t = 1
let a = -6 * Math.pow(t, 4) + h * Math.pow(t, 3) + 2 * Math.pow(t, 2) + t
while (a > 0) {
  t++
  if (t>m) {
    return console.log('The balloon does not touch ground in the given time.')
  }
  a = -6 * Math.pow(t, 4) + h * Math.pow(t, 3) + 2 * Math.pow(t, 2) + t
}
console.log('The balloon first touches ground at hour: '+t)
