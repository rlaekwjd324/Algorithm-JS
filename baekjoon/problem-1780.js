let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let array = new Array(n)
let lineCount = n
let counts = [0, 0, 0]
let visitedArray = new Array(n)
for (let i = 0; i < n; i++) {
  array[i] = input[i + 1].split(' ').map(function (v) {return parseInt(v)})
  visitedArray[i] = new Array(n)
}
while(true) {
  if (lineCount < 1) {
    break
  }
  for (let i = 0; i < n / lineCount; i++) {
    for (let j = 0; j < n / lineCount; j++) {
      if (!visitedArray[i * lineCount][j * lineCount]) {
        countPaperNumbers(i * lineCount, j * lineCount)
      }
    }
  }
  lineCount = lineCount / 3
}
console.log(counts.join('\n'))

function countPaperNumbers (startX, startY) {
  let standardNumber = array[startX][startY]
  for (let i = startX; i < startX + lineCount; i++) {
    for (let j = startY; j < startY + lineCount; j++) {
      if (standardNumber !== array[i][j]) {
        return
      }
    }
  }
  for (let i = startX; i < startX + lineCount; i++) {
    for (let j = startY; j < startY + lineCount; j++) {
      visitedArray[i][j] = true
    }
  }
  counts[standardNumber + 1]++
  return
}
