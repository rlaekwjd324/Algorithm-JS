let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let a = Number(input[0].split(' ')[0])
let b = Number(input[0].split(' ')[1])
let n = Number(input[1])
let answer = ''
for (let i = 2; i < n + 2; i++) {
  let num = Number(input[i])
  let sum = 0
  if (num > 1000) {
    sum += (1000 * a)
    sum += ((num - 1000) * b)
  }else {
    sum += num * a
  }
  answer += (num + ' ' + sum + '\n')
}
console.log(answer)
