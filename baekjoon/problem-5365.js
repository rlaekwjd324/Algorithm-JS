let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let words = input[1].split(' ')
let pre = words[0].length
let answer = words[0].charAt(0)
for (let i = 1; i < n; i++) {
  if (words[i].length < pre) {
    answer += ' '
  }else {
    answer += words[i].charAt(pre - 1)
  }
  pre = words[i].length
}
console.log(answer)
