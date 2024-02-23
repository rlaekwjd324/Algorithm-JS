let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
if(n%2 === 1) {
  return console.log('still running')
}
let pre = 0
let sum = 0
for (let i = 1; i <= n; i++) {
  if(i%2===1) {
    pre = Number(input[i])
  }else {
    sum += (Number(input[i]) - pre)
  }
}
console.log(sum)
