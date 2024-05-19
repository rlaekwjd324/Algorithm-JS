let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let menus = []
for (let i = 1; i <= n; i++) {
  menus.push(Number(input[i]))
}
let m = Number(input[n + 1])
let answer = 0
for (let i = n + 2; i <= n + m + 1; i++) {
  answer += (menus[Number(input[i] - 1)])
}
console.log(answer)
