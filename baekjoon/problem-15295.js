let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let t = Number(input[0])
let answer = ''
for (let i = 1; i <= t; i++) {
  let n = Number(input[i].split(' ')[1])
  let count = n + (n + 1) * (parseInt(n / 2))
  if (n % 2 === 1) {
    count += Math.ceil(n / 2)
  }
  answer += (i + ' ' + count + '\n')
}
console.log(answer)
