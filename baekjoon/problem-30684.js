let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let answer = 'ZZZ'.split('')
for (let i = 1; i <= n; i++) {
  let temp = input[i].split('')
  if (temp.length === 3) {
    if (answer[0].charCodeAt(0) > temp[0].charCodeAt(0) ||
      (answer[0].charCodeAt(0) === temp[0].charCodeAt(0) && answer[1].charCodeAt(0) > temp[1].charCodeAt(0)) ||
      (answer[0].charCodeAt(0) === temp[0].charCodeAt(0) && answer[1].charCodeAt(0) === temp[1].charCodeAt(0) && answer[2].charCodeAt(0) > temp[2].charCodeAt(0))) {
      answer = temp
    }
  }
}
console.log(answer.join(''))
