let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let answer = ''
for (let i = 1; i <= n; i++) {
  let a = Number(input[i].split(' ')[0].split('').reverse().join(''))
  let b = Number(input[i].split(' ')[1].split('').reverse().join(''))
  answer += (Number((a + b).toString().split('').reverse().join('')) + '\n')
}
console.log(answer)
