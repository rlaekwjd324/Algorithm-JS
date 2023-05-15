let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let index = 0
let t = parseInt(input[index].split(' ')[0])
let answer = ''
for (let i = 0; i < t; i++) {
  index++
  let n = parseInt(input[index].split(' ')[0])
  let m = parseInt(input[index].split(' ')[1])
  let sums = new Array(n)
  for (let j = 0; j < n; j++) {
    sums[j] = 0
  }
  for (let j = 0; j < m; j++) {
    index++
    let line = input[index].split(' ')
    for (let w = 0; w < n; w++) {
      sums[w] += parseInt(line[w])
    }
  }
  let max = 0
  let winner = 0
  for (let j = 0; j < n; j++) {
    if (max < sums[j]) {
      max = sums[j]
      winner = j + 1
    }
  }
  answer += (winner + '\n')
}
console.log(answer)
