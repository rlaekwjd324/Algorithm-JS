let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0].split(' ')[0])
let aArray = new Array(n)
let bArray = new Array(n)
for (let i = 0; i < n; i++) {
  aArray[i] = input[i + 1].split(' ').map(function (v) { return parseInt(v)})
  bArray[i] = input[i + 1 + n].split(' ').map(function (v) { return parseInt(v)})
}
let temp = new Array(n)
for (let i = 0; i < n; i++) {
  temp[i] = new Array(n)
}
let sum = 0
for (i = 0; i < n; i++) {
  for (j = 0; j < n; j++) {
    for (k = 0; k < n; k++) {
      temp[i][j] = temp[i][j] || (aArray[i][k] && bArray[k][j])
    }
    sum += temp[i][j]
  }
}
console.log(sum)
