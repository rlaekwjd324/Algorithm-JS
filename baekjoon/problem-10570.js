let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let index = 0
let t = parseInt(input[index])
let answer = ''
for (let i = 0; i < t; i++) {
  index++
  let n = parseInt(input[index])
  let array = new Array(1001)
  for (let j = 1; j <= 1000; j++) {
    array[j] = 0
  }
  for (let j = 0; j < n; j++) {
    index++
    array[parseInt(input[index])]++
  }
  let max = 0
  let maxValue = 0
  for (let j = 1; j <= 1000; j++) {
    if (max < array[j]) {
      max = array[j]
      maxValue = j
    }
  }
  answer += (maxValue + '\n')
}
console.log(answer)
