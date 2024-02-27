let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let rules = []
for (let i = 1; i <= n; i++) {
  rules.push(input[i])
}
let answer = ''
for (let i = n + 2; i < input.length; i++) {
  let index = Number(input[i])
  if (index > 0 && index <= n) {
    answer += ('Rule ' + index + ': ' + rules[index - 1] + '\n')
  }else {
    answer += ('Rule ' + index + ': No such rule\n')
  }
}
console.log(answer)
