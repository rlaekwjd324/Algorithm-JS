let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let t = Number(input[0])
let index = 0
let answer = ''
for (let i = 1; i <= t; i++) {
  let count = 0
  index++
  let n = Number(input[index].split(' ')[0])
  let d = Number(input[index].split(' ')[1])
  for (let j = 0; j < n; j++) {
    index++
    let v = Number(input[index].split(' ')[0])
    let f = Number(input[index].split(' ')[1])
    let c = Number(input[index].split(' ')[2])
    let tempD = d / v * c
    if (tempD <= f) {
      count++
    }
  }
  answer += (count + '\n')
}
console.log(answer)
