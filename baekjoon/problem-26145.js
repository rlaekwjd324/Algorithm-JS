let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let N = parseInt(input[0].split(' ')[0])
let M = parseInt(input[0].split(' ')[1])
let money = input[1].split(' ').map(function (v) { return parseInt(v); })
for (let i = 0; i < M; i++) {
  money.push(0)
}
for (let i = 2; i < N + 2; i++) {
  let line = input[i].split(' ').map(function (v) { return parseInt(v); })
  money[i - 2] -= line.reduce((partialSum, a) => partialSum + a, 0)
  for (let j = 0; j < N + M; j++) {
    money[j] += line[j]
  }
}
console.log(money.join(' '))
