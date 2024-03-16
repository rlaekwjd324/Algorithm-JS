let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0].split(' ')[0])
let array = [1, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]
let answer = ''
for (let i = 1; i <= n; i++) {
  let count = 0
  let s = input[i].replaceAll(' ', '').split('')
  for (let j = 0; j < s.length; j++) {
    count += (array[s[j].charCodeAt(0) - 65])
  }
  answer += (count + '\n')
}
console.log(answer)
