let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let count = 0
for (let i = 1; i <= n; i++) {
  let car = input[i]
  if (car !== '1') {
    count++
  }
}
console.log(count)
