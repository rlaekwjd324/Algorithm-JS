let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let answer = ''
for (let i = 1; i <= n; i++) {
  let word = input[i].split('')
  let sum = 0
  for (let j = 0; j < 13; j++) {
    sum += Number(word[j])
  }
  sum += (Number(word[10] + word[11] + word[12]) * 10)
  if (sum < 1000) {
    sum += 1000
  }else if (sum > 10000) {
    sum = sum % 10000
    if (sum.toString().length < 4) {
      sum = '0'.repeat(4 - sum.toString().length) + sum.toString()
    }
  }
  answer += (sum + '\n')
}
console.log(answer)
