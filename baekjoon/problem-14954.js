let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = input[0].split('').map(function (v) { return parseInt(v)})
while (true) {
  let sum = 0
  for (let i = 0; i < n.length; i++) {
    sum += (n[i] * n[i])
  }
  if(sum === 4) {
    return console.log('UNHAPPY')
  }
  if(sum === 1) {
    return console.log('HAPPY')
  }
  n = sum.toString().split('')
}
