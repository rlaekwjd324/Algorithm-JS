let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0].split(' ')[0])
let m = parseInt(input[0].split(' ')[1])
let array = new Array(n)
for (let i = 0; i < n; i++) {
  array[i] = input[i + 1].split('')
}
let minimum = 2500
let count = 0
for (var i = 0; i < m; i++) {
  // 가장 위
  if (array[0][i] !== 'W') {
    count++
  }
  // 가장 아래
  if (array[n - 1][i] !== 'R') {
    count++
  }
}
backtracking(1, count, 'W')
function backtracking (x, tempCount, preColor) {
  if (x === n - 1) {
    minimum = Math.min(minimum, tempCount)
    return
  }
  let lineCount
  // 3가지 경우의 수로 동작
  // 1. 흰색 - 바로 위가 흰색인지 검사
  if (preColor === 'W' && x < n - 2) {
    lineCount = 0
    for (var i = 0; i < m; i++) {
      if (array[x][i] !== 'W') {
        lineCount++
      }
    }
    backtracking(x + 1, tempCount + lineCount, 'W')
  }
  // 2. 파란색 - i가 1이상이고 n-1 미만인지 검사
  if (x < n - 1 && preColor !== 'R') {
    lineCount = 0
    for (var i = 0; i < m; i++) {
      if (array[x][i] !== 'B') {
        lineCount++
      }
    }
    backtracking(x + 1, tempCount + lineCount, 'B')
  }
  // 3. 빨간색 - 바로 위가 파란색인지 검사
  if (preColor !== 'W') {
    lineCount = 0
    for (var i = 0; i < m; i++) {
      if (array[x][i] !== 'R') {
        lineCount++
      }
    }
    backtracking(x + 1, tempCount + lineCount, 'R')
  }
}
console.log(minimum)
