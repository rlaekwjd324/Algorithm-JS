let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let m = Number(input[1])
let nArray = []
let mArray = []
for (let i = 0; i < n; i++) {
  nArray.push(input[i + 2])
}
for (let i = 0; i < m; i++) {
  mArray.push(input[i + 2 + n])
}
let answer = ''
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    answer += (nArray[i] + ' as ' + mArray[j] + '\n')
  }
}
console.log(answer)
