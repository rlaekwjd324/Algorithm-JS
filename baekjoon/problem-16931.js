let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0].split(' ')[0])
let m = parseInt(input[0].split(' ')[1])
let line = new Array(n)
let sum = 0
for (let i = 1; i <= n; i++) {
  line[i - 1] = input[i].split(' ').map(function (v) {return parseInt(v)})
}
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    // 상
    sum += (i === 0 ? line[i][j] : (line[i][j] - line[i - 1][j] > 0 ? line[i][j] - line[i - 1][j] : 0))
    // 하
    sum += (i === n - 1 ? line[i][j] : (line[i][j] - line[i + 1][j] > 0 ? line[i][j] - line[i + 1][j] : 0))
    // 좌
    sum += (j === 0 ? line[i][j] : (line[i][j] - line[i][j - 1] > 0 ? line[i][j] - line[i][j - 1] : 0))
    // 우
    sum += (j === m - 1 ? line[i][j] : (line[i][j] - line[i][j + 1] > 0 ? line[i][j] - line[i][j + 1] : 0))
  }
}
console.log(sum + n * m * 2)
