let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0].split(' ')[0])
let m = Number(input[0].split(' ')[1])
let array = []
let redCount = 0
let blueCount = 0
for (let i = 1; i <= n; i++) {
  array.push(input[i].split(''))
  for (let j = 0; j < m; j++) {
    if (array[i - 1][j] === '1') {
      blueCount++
    }else {
      redCount++
    }
  }
}
console.log(blueCount > redCount ? redCount : blueCount)
