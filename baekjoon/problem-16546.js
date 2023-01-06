let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let runners = input[1].split(' ').map(function (v) {return parseInt(v)}).sort(function (a, b) {return a - b})
for (let i = 0; i < parseInt(input[0]);i++) {
  if (runners[i] !== i+1) {
    console.log(i+1)
    return
  }
}
