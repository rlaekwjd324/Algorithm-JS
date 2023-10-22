let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0].split(' ')[0])
let k = Number(input[0].split(' ')[1])
let p = Number(input[0].split(' ')[2])
let breads = input[1].split(' ')
let answer = n
for (let i = 0; i < n; i++) {
  let creamX = 0
  for (let j = 0; j < k; j++) {
    if (breads[i * k + j] === '0') {
      creamX++
    }
  }
  if (creamX >= p) {
    answer--
  }
}
console.log(answer)
