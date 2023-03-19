let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let num = parseInt(input[0])
let array = new Array(num + 1)
for (let i = 1; i <= num; i++) {
  array[i] = 0
}
array[1] = 1
array[2] = 3
function dp (n) {
  if (array[n] !== 0) {
    return array[n]
  }
  array[n] = (dp(n - 1) + dp(n - 2) * 2) % 10007
  return array[n]
}
console.log(dp(num))
