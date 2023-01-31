let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let a = input[0]
let b = input[1]
let alphabetCounts = [3, 2, 1, 2, 3, 3, 2, 3, 3, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 2, 1]
let lineSum = []
for (let i = 0; i < a.length; i++) {
  lineSum.push(alphabetCounts[a.charCodeAt(i) - 65])
  lineSum.push(alphabetCounts[b.charCodeAt(i) - 65])
}
for (let i = 1; i < a.length * 2 - 1; i++) {
  for (let j = 0; j < a.length * 2 - i; j++) {
    lineSum[j] = ((lineSum[j] + lineSum[j + 1]) % 10)
  }
}
console.log(lineSum[0] + '' + lineSum[1])
