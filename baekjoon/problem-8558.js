let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let fact = 1
for (let i = 1; i <= n; i++) {
  fact = (fact * i) % 10
}
console.log(fact % 10)
