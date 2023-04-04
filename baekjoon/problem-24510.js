let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let max = 0
for (let i = 1; i <= n; i++) {
  let count = input[i].split('for').length - 1 + input[i].split('while').length - 1
  max = Math.max(max, count)
}
console.log(max)
