let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let answer = ''
for (let i = 1; i <= n; i++) {
  let a = input[i].split('')
  let index = -1
  let num = false
  if (a.includes('0')) {
    index = a.indexOf('0')
    num = false
    if (index < a.length - 1) {
      num = true
    }
  }else {
    index = a.indexOf('1')
    num = true
  }
  if (index % 2 === 1) {
    num = !num
  }
  answer += (num ? '1\n' : '0\n')
}
console.log(answer)
