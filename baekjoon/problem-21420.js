let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let zero = 0
let one = 0
for (let i = 1; i <= n; i++) {
  if (input[i] === '1') {
    one++
  }else if (input[i] === '0') {
    zero++
  }
}
console.log(Math.min(one, zero).toString())
